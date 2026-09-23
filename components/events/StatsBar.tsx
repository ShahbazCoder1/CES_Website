"use client";

import { mouseGlow, glowOverlay } from "../mouseGlow";

const stats = [
  { value: "25+", label: "Events Conducted" },
  { value: "500+", label: "Participants" },
  { value: "15+", label: "Speakers Hosted" },
  { value: "10+", label: "Collaborations" },
];

export default function StatsBar() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            onMouseMove={mouseGlow}
            className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-[#07060e] px-4 py-8 text-center transition-all duration-300 hover:bg-white/[0.02] hover:ring-1 hover:ring-inset hover:ring-[#6FA8FF]/40 sm:py-10"
          >
            <div className={glowOverlay} />

            <span className="relative text-[28px] font-medium leading-none text-[#E8EEFF] transition-transform duration-300 group-hover:scale-110 sm:text-[36px]">
              {stat.value}
            </span>

            <span className="relative text-[9px] font-medium uppercase tracking-[2px] text-[#6F7DA8] transition-colors duration-300 group-hover:text-[#9AA9D6] sm:text-[10px] sm:tracking-[2.5px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
