"use client";

import { mouseGlow, glowOverlay } from "@/components/mouseGlow";

const achievements = [
  {
    id: "01",
    tag: "RESEARCH AWARD",
    date: "2024–2025",
    title: "Outstanding Paper at Regional Science & Technology Congress, 2025",
    project: "CNN-Based Ensemble Classifier Powered by GAN: A Framework for Crime Data Analysis",
    desc: "A student team from Siliguri Institute of Technology (SIT) secured the Outstanding Paper Award at the 7th Regional Science & Technology Congress 2024–25 for their research on crime data analysis.",
    team: "Arunangshu Nag, Arpan Dey, Rounak Pramanik, Dripta Majumdar",
    mentor: "Dr. Anupam Mukherjee",
  },
  {
    id: "02",
    tag: "RESEARCH AWARD",
    date: "2026",
    title: "Outstanding Paper Presentation at Regional Science and Technology Congress, 2026",
    project: "A Hybrid Machine Learning Framework for Geospatial Cyber Crime Prediction and Demographic Pattern Analysis",
    desc: "The research received the Outstanding Paper Presentation Award at the 8th Regional Science & Technology Congress (Region-1), 2026, held at the University of North Bengal.",
    team: "Arnav Biswas, Ayandeep Roy, Suryashis Banerjee, Rimi Dutta",
    mentor: "Dr. Anupam Mukherjee",
  },
  {
    id: "03",
    tag: "SIH 2025 • 2ND RUNNERS UP",
    date: "2025",
    title: "2nd Runners Up at Smart India Hackathon (SIH) 2025, Grand Finale — Software Edition",
    teamName: "Team BLACK SYNTEX",
    project: "Smart Crop Advisory System for Small and Marginal Farmers",
    desc: "The team secured 2nd Runner-Up at the Smart India Hackathon 2025 Grand Finale with a solution focused on smart crop advisory support for small and marginal farmers.",
    team: "Ayush Sharma (Lead), Payal Vyas, Plovdiv Kumar Kundu, Nilkamal Adhikari, Avigyan Guha, Poulami Kundu",
    mentor: "Keshav Kumar & Swarnava Mukherjee (CSE Alumni)",
  },
  {
    id: "04",
    tag: "SIH 2025 • FINALIST",
    date: "2025",
    title: "Finalists at Smart India Hackathon (SIH) 2025 Grand Finale — Hardware Edition",
    teamName: "Team Grainz",
    project: "Handheld Radio Set having Satellite Personal Tracking System",
    desc: "The team reached the Grand Finale of Smart India Hackathon 2025 with a hardware solution involving a handheld radio and satellite-enabled personal tracking system.",
    team: "Debashish Sinha, Md Shahbaz Hashmi Ansari, Ishika Paul, Prithivi Raj Sha, Manjima Ghosh, Snigdha Bhowmick",
  },
  {
    id: "05",
    tag: "CYBERSECURITY • FINALIST",
    date: "2025",
    title: "Finalists of National CyberShield Hackathon — 5th Cybercrime Investigation and Intelligence Summit (CIIS)",
    teamName: "Team HashByte",
    project: "Detecting Fake Banking APKs",
    desc: "The team reached the National CyberShield Hackathon finals with a project focused on detecting fake banking APKs and addressing cybersecurity threats.",
    team: "Amol Kumar, Bhaskar Kumar, Rohini Kumari, Masudar Rahaman",
    mentor: "Dr. Prasanta Kumar Roy",
  },
];

export default function Achievements() {
  return (
    <section className="relative z-10 w-full px-4 py-14 sm:px-6 sm:py-20 lg:px-8 bg-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Section Header matching EventsExplorer */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[3px] text-[#7D89B5] sm:text-xs sm:tracking-[4px]">
            THE ARCHIVE
          </p>

          <h1 className="text-[28px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF] sm:text-[36px] lg:text-[40px]">
            Achievements
          </h1>

          <div className="mt-3 h-px w-16 bg-[#B8C5E3]/50 sm:w-20" />

          <p className="mt-4 max-w-xl text-[12px] leading-[1.6] text-[#8F9CC2] sm:text-[13px]">
            Celebrating research, innovation, collaboration and competitive excellence across the CES community.
          </p>
        </div>

        {/* 3-Column Responsive Grid matching Events page */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={item.id}
                onMouseMove={mouseGlow}
                className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6FA8FF]/55 hover:bg-white/[0.025] hover:shadow-[0_24px_60px_-24px_rgba(111,168,255,0.45)]"
              >
                {/* Visual Header */}
                <div className="relative h-32 overflow-hidden border-b border-white/[0.04] sm:h-40">
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute bottom-1 left-4 select-none text-[60px] font-medium leading-none tracking-[-5px] text-white/[0.035] sm:bottom-2 sm:left-6 sm:text-[76px]">
                    {number}
                  </div>
                  <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                    <span className="font-mono text-[9px] tracking-[2px] text-[#6F7DA8] sm:text-[10px]">
                      CES / {number}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <span
                    className="absolute left-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[1.5px] backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[10px]"
                    style={{
                      color: "#6FA8FF",
                      borderColor: "rgba(111,168,255,0.33)",
                      backgroundColor: "rgba(5,4,8,0.7)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Card Content Area */}
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6F7DA8] sm:text-[12px]">
                    <span>{item.date}</span>
                  </div>

                  <h3 className="mt-2 text-[18px] font-medium leading-tight tracking-[-0.3px] text-[#E8EEFF] transition-colors group-hover:text-[#C9D8FF] sm:text-[20px]">
                    {item.title}
                  </h3>

                  {item.teamName && (
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded bg-[#6FA8FF]/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-[#6FA8FF] border border-[#6FA8FF]/20 self-start">
                      {item.teamName}
                    </div>
                  )}

                  {item.project && (
                    <p className="mt-2 text-[11px] font-mono text-[#9AA9D6] italic line-clamp-2 sm:text-[12px]">
                      &quot;{item.project}&quot;
                    </p>
                  )}

                  <p className="mt-3 text-[12px] leading-[1.6] text-[#8F9CC2] sm:text-[13px] line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/[0.04] space-y-1 text-[11px] text-[#7D89B5] sm:text-[12px]">
                    {item.team && (
                      <p className="line-clamp-2">
                        <span className="font-medium text-[#9AA9D6]">Team:</span> {item.team}
                      </p>
                    )}
                    {item.mentor && (
                      <p className="line-clamp-1">
                        <span className="font-medium text-[#9AA9D6]">Mentor:</span> {item.mentor}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mouse Glow Spotlight */}
                <div className={glowOverlay} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
