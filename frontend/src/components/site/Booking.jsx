import React, { useState } from "react";
import { Calendar, Clock, MapPin, User, Phone, Car, Check } from "lucide-react";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF5500] block mb-2">Fast Online Scheduling</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-white">
            BOOK YOUR <span className="text-[#FF5500]">SERVICE</span>
          </h2>
          <p className="text-white/60 text-sm mt-3">Fill out your vehicle details and preferred time. We'll confirm your booking promptly.</p>
        </div>

        <div className="bg-[#14161B] border border-white/10 p-8 sm:p-10 rounded-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[#FF5500]/20 border border-[#FF5500] rounded-full flex items-center justify-center mx-auto text-[#FF5500]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-3xl uppercase text-white">Booking Request Sent!</h3>
              <p className="text-white/70 text-sm max-w-md mx-auto">We've received your details and will contact you shortly to confirm your service appointment.</p>
              <button onClick={() => setSubmitted(false)} className="btn-ghost mt-4">Book Another Service</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:border-[#FF5500] focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="tel" required placeholder="0400 000 000" className="w-full bg-white/5 border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:border-[#FF5500] focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">Vehicle (Make / Model / Year)</label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" required placeholder="e.g. BMW 320d 2010" className="w-full bg-white/5 border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:border-[#FF5500] focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">Service Location (Subu/Address)</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" required placeholder="e.g. Ringwood, VIC" className="w-full bg-white/5 border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:border-[#FF5500] focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:border-[#FF5500] focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">Service Type</label>
                  <select required className="w-full bg-[#14161B] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-[#FF5500] focus:outline-none">
                    <option value="">Select a service...</option>
                    <option value="diagnostics">Diagnostics & Fault Finding</option>
                    <option value="brakes">Brakes & Suspension</option>
                    <option value="logbook">Logbook Servicing</option>
                    <option value="battery">Battery & Electrical</option>
                    <option value="inspection">Pre-Purchase Inspection</option>
                    <option value="other">Other Repair / Maintenance</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full justify-center !py-4 text-base mt-4">
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
