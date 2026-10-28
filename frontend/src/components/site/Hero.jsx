import React from "react";
import { Wrench, Shield, Clock, MapPin, ChevronRight, Star, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-white/10">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF5500]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full font-mono text-xs text-[#FF5500]">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>Mobile Mechanic Services On-Site</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              WE BRING THE <span className="text-[#FF5500]">WORKSHOP</span> TO YOUR DOORSTEP
            </h1>

            <p className="text-white/70 text-base sm:text-lg max-w-2xl font-light">
              Full-service automotive repairs, diagnostics, and routine maintenance performed directly at your home or workplace. No towing required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#booking" className="btn-primary">
                <Calendar className="w-4 h-4" />
                <span>Book Service Now</span>
              </a>
              <a href="#services" className="btn-ghost">
                <span>View Our Services</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#FF5500]" />
                <span>Fully Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF5500]" />
                <span>Same-Day Response</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span>On-Site Repairs</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-[#14161B] border border-white/10 p-6 sm:p-8 rounded-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-1 text-[#FF5500]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF5500]" />
                  ))}
                </div>
                <span className="font-mono text-xs text-white/50">5.0 Star Rated Service</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
                  <h4 className="font-display font-bold text-lg text-white uppercase">Diagnostic & Scan</h4>
                  <p className="text-xs text-white/60 mt-1">Full computer diagnostics, error code reading, and clear fault identification.</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
                  <h4 className="font-display font-bold text-lg text-white uppercase">Brake & Suspension</h4>
                  <p className="text-xs text-white/60 mt-1">Pad replacement, rotor resurfacing, coilover setups, and component repairs.</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-sm">
                  <h4 className="font-display font-bold text-lg text-white uppercase">Logbook Servicing</h4>
                  <p className="text-xs text-white/60 mt-1">Complete engine service keeping your factory warranty intact.</p>
                </div>
              </div>

              <div className="p-4 bg-[#FF5500]/10 border border-[#FF5500]/20 rounded-sm text-center">
                <span className="font-mono text-xs text-[#FF5500] uppercase tracking-wider block font-semibold">Need immediate roadside assistance?</span>
                <a href="tel:0400000000" className="font-display font-bold text-xl text-white hover:text-[#FF5500] transition-colors mt-1 block">
                  CALL 0400 000 000
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
