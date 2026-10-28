import React from "react";

export function Marquee() {
  const items = [
    "LOGBOOK SERVICING",
    "DIAGNOSTICS & FAULT FINDING",
    "BRAKES & SUSPENSION",
    "BATTERY REPLACEMENT",
    "ENGINE REPAIRS",
    "PRE-PURCHASE INSPECTIONS",
  ];

  return (
    <div className="bg-[#FF5500] text-[#0B0C0E] py-3 overflow-hidden whitespace-nowrap font-display font-extrabold text-xl tracking-wider uppercase transform -rotate-1 my-4">
      <div className="inline-flex animate-marquee gap-8 items-center">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-black/40">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
