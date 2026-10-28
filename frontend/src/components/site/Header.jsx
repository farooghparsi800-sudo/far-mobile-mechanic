import React, { useState, useEffect } from "react";
import { Wrench, Phone, Menu, X, ShieldCheck, Clock } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0B0C0E]/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#FF5500] flex items-center justify-center font-display font-extrabold text-[#0B0C0E] text-xl tracking-wider rounded-sm group-hover:scale-105 transition-transform">
            FAR
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-wider text-white block leading-none">F.A.R</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF5500]">Mobile Mechanic</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#services" className="text-white/80 hover:text-[#FF5500] transition-colors link-underline">Services</a>
          <a href="#pricing" className="text-white/80 hover:text-[#FF5500] transition-colors link-underline">Pricing</a>
          <a href="#process" className="text-white/80 hover:text-[#FF5500] transition-colors link-underline">How It Works</a>
          <a href="#booking" className="text-white/80 hover:text-[#FF5500] transition-colors link-underline">Book Online</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-white/70 bg-white/5 px-3 py-1.5 border border-white/10 rounded-sm">
            <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Mon-Sat: 7am - 7pm</span>
          </div>
          <a href="tel:0400000000" className="btn-primary !py-2.5 !px-4 text-xs">
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency Call</span>
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0C0E] border-b border-white/10 px-6 py-6 flex flex-col gap-4 font-mono text-sm">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#FF5500]">Services</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#FF5500]">Pricing</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#FF5500]">How It Works</a>
          <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#FF5500]">Book Online</a>
          <a href="tel:0400000000" className="btn-primary justify-center mt-2">
            <Phone className="w-4 h-4" />
            <span>Call 0400 000 000</span>
          </a>
        </div>
      )}
    </header>
  );
}
