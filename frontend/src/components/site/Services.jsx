import React from "react";
import { Wrench, ShieldAlert, Cpu, Disc, Battery, FileText, ChevronRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Cpu className="w-6 h-6 text-[#FF5500]" />,
      title: "Diagnostics & Fault Finding",
      description: "Advanced OBD2 computer scanning, live sensor data analysis, and check engine light diagnosis on-site.",
      price: "From $120"
    },
    {
      icon: <Disc className="w-6 h-6 text-[#FF5500]" />,
      title: "Brake & Suspension Repairs",
      description: "Brake pad and rotor replacement, hydraulic bleeding, coilover adjustments, and suspension component overhauls.",
      price: "From $150"
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#FF5500]" />,
      title: "Logbook Servicing",
      description: "Comprehensive scheduled maintenance following manufacturer specifications. Keeps your new car warranty fully valid.",
      price: "From $199"
    },
    {
      icon: <Battery className="w-6 h-6 text-[#FF5500]" />,
      title: "Battery & Electrical",
      description: "Battery testing, heavy-duty replacement, alternator diagnostics, and starter motor repairs at your location.",
      price: "From $99"
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#FF5500]" />,
      title: "Pre-Purchase Inspections",
      description: "Thorough 150-point mechanical, structural, and computer scan evaluation before you buy a used vehicle.",
      price: "From $220"
    },
    {
      icon: <FileText className="w-6 h-6 text-[#FF5500]" />,
      title: "General Engine Repairs",
      description: "Belt replacements, cooling system fixes, gasket replacements, and oil leak rectifications.",
      price: "Enquire"
    }
  ];

  return (
    <section id="services" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5500] block mb-2">Comprehensive On-Site Care</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-white">
              OUR MOBILE <span className="text-[#FF5500]">SERVICES</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm mt-4 md:mt-0">
            Professional workshop-grade equipment brought directly to your driveway. Fully equipped service vans ready for action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#14161B] border border-white/10 p-8 rounded-sm hover:border-[#FF5500]/50 transition-colors group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#FF5500]/10 group-hover:border-[#FF5500]/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-sm text-[#FF5500] font-semibold">{service.price}</span>
                <a href="#booking" className="inline-flex items-center gap-1 font-mono text-xs text-white uppercase tracking-wider group-hover:text-[#FF5500] transition-colors">
                  <span>Book</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
