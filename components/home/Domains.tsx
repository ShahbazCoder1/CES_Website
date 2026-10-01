"use client";

import {
  Trophy,
  ShieldCheck,
  Cpu,
  Code2,
  GitBranch,
  Terminal,
} from "lucide-react";
import { mouseGlow, glowOverlay } from "../mouseGlow";

const domains = [
  {
    id: "01",
    title: "Hackathons & Innovation",
    desc: "Building real-world solutions under pressure in flagship events like SIT Hack-A-Verse and the Smart India Hackathon.",
    icon: Trophy,
  },
  {
    id: "02",
    title: "Cybersecurity",
    desc: "Exploring threat intelligence, digital defense systems, and competing in national challenges like the CyberShield Hackathon.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "IoT & Hardware",
    desc: "Designing embedded systems and smart devices, from crop advisory sensors to satellite-enabled communication technology.",
    icon: Cpu,
  },
  {
    id: "04",
    title: "Web & App Development",
    desc: "Creating scalable applications, mastering modern web frameworks, and exploring cross-platform tools like Flutter.",
    icon: Code2,
  },
  {
    id: "05",
    title: "Open Source",
    desc: "Contributing to global public codebases and fostering developer networks through GDG DevFest and SAP Hackfest.",
    icon: GitBranch,
  },
  {
    id: "06",
    title: "Competitive Programming",
    desc: "Strengthening logical thinking and algorithmic problem-solving through intensive events like Code Bites and DSA challenges.",
    icon: Terminal,
  },
];

export default function Domains() {
  return (
    <section
      id="domains"
      className="
        relative z-10
        w-full
        flex items-center justify-center
        px-5 sm:px-6 lg:px-8
        py-16 sm:py-24 lg:py-28
        bg-transparent
        border-t border-white/[0.04]
      "
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-2 border-[#6FA8FF]/60 pl-4 sm:pl-5">
            <div>
              <p
                className="
                  mb-2
                  text-[11px] sm:text-xs
                  font-medium uppercase
                  tracking-[3px] sm:tracking-[4px]
                  text-[#9AA9D6]
                "
              >
                WHAT WE DO
              </p>

              <h2
                className="
                  text-[32px] sm:text-[40px] lg:text-[48px]
                  font-medium
                  leading-[1.1]
                  tracking-[-1px]
                  text-[#E8EEFF]
                "
              >
                Technical Scope{" "}
                <span className="text-[#6FA8FF]">&amp; Focus Tracks</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#8F9CC2] max-w-md font-normal leading-relaxed">
              Explore our core focus areas dedicated to hands-on learning, collaborative engineering, and technological innovation.
            </p>
          </div>
        </div>

        {/* Domain Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5 sm:gap-6 lg:gap-7
          "
        >
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                onMouseMove={mouseGlow}
                className="
                  group
                  relative
                  p-6 sm:p-7
                  bg-white/[0.015]
                  border border-white/[0.06]
                  rounded-2xl
                  hover:border-[#6FA8FF]/35
                  hover:bg-white/[0.03]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  ease-out
                  flex flex-col justify-between
                  overflow-hidden
                "
              >
                <div>
                  {/* Top Bar: Icon & ID */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div
                      className="
                        flex items-center justify-center
                        w-11 h-11 sm:w-12 sm:h-12
                        rounded-xl
                        bg-[#6FA8FF]/10
                        border border-[#6FA8FF]/20
                        text-[#6FA8FF]
                        group-hover:bg-[#6FA8FF]/20
                        group-hover:border-[#6FA8FF]/40
                        group-hover:text-[#88B8FF]
                        group-hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    </div>

                    <span
                      className="
                        text-xs sm:text-sm
                        font-mono
                        font-semibold
                        tracking-wider
                        text-[#6F7DA8]
                        group-hover:text-[#9AA9D6]
                        transition-colors
                        duration-300
                      "
                    >
                      {domain.id}
                    </span>
                  </div>

                  {/* Domain Title */}
                  <h3
                    className="
                      mb-2.5
                      text-lg sm:text-xl
                      font-semibold
                      leading-snug
                      text-[#E8EEFF]
                      group-hover:text-[#6FA8FF]
                      transition-colors
                      duration-300
                    "
                  >
                    {domain.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-xs sm:text-sm
                      font-normal
                      leading-relaxed
                      text-[#8F9CC2]
                    "
                  >
                    {domain.desc}
                  </p>
                </div>

                {/* Bottom Footer Accent / Indicator */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.03] group-hover:border-white/[0.08] transition-colors duration-300">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#5A6894] group-hover:text-[#8093C7] transition-colors duration-300">
                    Domain Track
                  </span>
                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#6F7DA8]
                      group-hover:text-[#6FA8FF]
                      group-hover:translate-x-1
                      transition-all
                      duration-300
                    "
                  >
                    →
                  </span>
                </div>

                {/* Mouse-following Spotlight */}
                <div className={glowOverlay} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}