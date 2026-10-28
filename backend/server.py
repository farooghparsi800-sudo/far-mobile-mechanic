# backend/server.py
from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import time
import logging
from pathlib import Path
from typing import Annotated, Literal, Optional
from datetime import datetime, timezone
from bson import ObjectId
from pydantic import BaseModel, BeforeValidator, ConfigDict, EmailStr, Field

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from email_service import send_booking_notification  # noqa: E402

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

client = AsyncIOMotorClient(os.environ['MONGO_URL'])
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(lambda v: str(v) if isinstance(v, ObjectId) else v)]

ServiceType = Literal["General Service", "Service + Filters", "General Repairs", "Tyre Puncture Repair", "Not sure"]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict:
        data = self.model_dump(by_alias=True, exclude={"id"})
        if self.id:
            data["_id"] = ObjectId(self.id)
        return data

    @classmethod
    def from_mongo(cls, doc: dict):
        return cls.model_validate(doc)


class BookingCreate(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    phone: str = Field(min_length=6, max_length=20)
    email: Optional[EmailStr] = None
    suburb: str = Field(min_length=2, max_length=60)
    vehicle: str = Field(min_length=2, max_length=80)
    service: ServiceType
    preferred_date: Optional[str] = Field(default=None, max_length=20)
    message: Optional[str] = Field(default=None, max_length=1000)


class Booking(BaseDocument, BookingCreate):
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    email_sent: bool = False


_recent: dict[str, list[float]] = {}


def _rate_limited(ip: str) -> bool:
    now = time.time()
    hits = [t for t in _recent.get(ip, []) if now - t < 600]
    _recent[ip] = hits + [now]
    return len(hits) >= 5


@api_router.get("/")
async def root():
    return {"message": "F.A.R Mobile Mechanic API"}


@api_router.post("/bookings")
async def create_booking(payload: BookingCreate, request: Request):
    ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "unknown").split(",")[0]
    if _rate_limited(ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please call us instead.")
    booking = Booking(**payload.model_dump())
    result = await db.bookings.insert_one(booking.to_mongo())
    booking.id = str(result.inserted_id)
    try:
        await send_booking_notification(booking.model_dump())
        booking.email_sent = True
        await db.bookings.update_one({"_id": result.inserted_id}, {"$set": {"email_sent": True}})
    except Exception as e:
        logger.error(f"Booking {booking.id} saved but email failed: {e}")
    return {"id": booking.id, "email_sent": booking.email_sent}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
