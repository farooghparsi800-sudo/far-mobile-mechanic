from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="F.A.R Mobile Mechanic API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BookingRequest(BaseModel):
    name: str
    phone: str
    vehicle: str
    location: str
    date: str
    service_type: str

@app.get("/")
def read_root():
    return {"status": "online", "service": "F.A.R Mobile Mechanic API"}

@app.post("/api/bookings")
def create_booking(booking: BookingRequest):
    return {"status": "success", "message": "Booking received", "data": booking}
