import React from "react";
import { Calendar, Wrench, CheckCircle2 } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      icon: <Calendar className="w-6 h-6 text-[#FF5500]" />,
      title: "Book Online or Call",
      desc: "Select your required service and location."
    },
    {
      num: "02",
      icon: <Wrench className="w-6 h-6 text-[#FF5500]" />,
      title: "We Come To You",
      desc: "Our fully equipped mobile unit arrives on schedule."
    },
    {
      num: "03",
      icon: <CheckCircle2 className="w-6 h-6 text-[#FF5500]" />,
      title: "Job Done On-Site",
      desc: "Full inspection, repair, and clear digital reporting."
    }
  ];

  return (
    <section id="process" className="py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF5500] block mb-2">Simple Workflow</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl uppercase tracking-tight text-white">
            HOW IT <span className="text-[#FF5500]">WORKS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#14161B] border border-white/10 p-8 rounded-sm relative">
              <span className="font-display font-extrabold text-6xl text-white/5 absolute top-4 right-4">{step.num}</span>
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
