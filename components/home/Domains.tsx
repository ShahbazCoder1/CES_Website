"use client";

import { useEffect, useRef, useState } from "react";
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
    tag: "INNOVATION",
    title: "Hackathons & Innovation",
    desc: "Building real-world solutions under pressure in flagship events like SIT Hack-A-Verse and SIH.",
    icon: Trophy,
    accent: "#6FA8FF",
  },
  {
    id: "02",
    tag: "CYBERSECURITY",
    title: "Cybersecurity",
    desc: "Exploring threat intelligence, digital defense systems, and competing in CyberShield Hackathon.",
    icon: ShieldCheck,
    accent: "#5C9DFF",
  },
  {
    id: "03",
    tag: "EMBEDDED",
    title: "IoT & Hardware",
    desc: "Designing embedded systems and smart devices, from advisory sensors to satellite tech.",
    icon: Cpu,
    accent: "#64B5F6",
  },
  {
    id: "04",
    tag: "FULLSTACK",
    title: "Web & App Development",
    desc: "Creating scalable applications, mastering web frameworks, and cross-platform tools like Flutter.",
    icon: Code2,
    accent: "#4A90E2",
  },
  {
    id: "05",
    tag: "OPEN SOURCE",
    title: "Open Source",
    desc: "Contributing to global public codebases and developer networks through DevFest & SAP Hackfest.",
    icon: GitBranch,
    accent: "#88B8FF",
  },
  {
    id: "06",
    tag: "ALGORITHMS",
    title: "Competitive Programming",
    desc: "Strengthening logical thinking and algorithmic problem-solving in Code Bites & DSA challenges.",
    icon: Terminal,
    accent: "#60A5FA",
  },
];

export default function Domains() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="domains"
      className="
        relative z-10
        w-full
        px-5 sm:px-6 lg:px-8
        py-16 sm:py-20 lg:py-24
        bg-transparent
        border-t border-white/[0.04]
      "
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`
            mb-10 sm:mb-14
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-[3px] h-16 sm:h-20 bg-[#6FA8FF] rounded-full shrink-0 mt-1" />
              <div>
                <p className="mb-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[4px] text-[#9AA9D6]">
                  EXPLORE OUR
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.08] tracking-[-1px] text-[#E8EEFF]">
                  Technical Scope &amp;{" "}
                  <span className="text-[#6FA8FF]">Focus Tracks</span>
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#8F9CC2] max-w-md font-normal leading-relaxed lg:pb-1">
              Core technical focus areas fostering hands-on learning, engineering excellence, and real-world project impact across the CES community.
            </p>
          </div>
        </div>

        {/* 3x2 Grid of Mockup-Inspired Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                onMouseMove={mouseGlow}
                style={{
                  transitionDelay: isVisible ? `${index * 70}ms` : "0ms",
                }}
                className={`
                  group
                  relative
                  p-6 sm:p-7 lg:p-8
                  bg-[#080D21]/80
                  border border-white/[0.08]
                  rounded-2xl
                  hover:border-[#6FA8FF]/40
                  hover:bg-[#0B122E]/90
                  transition-all
                  duration-300
                  ease-out
                  flex flex-col justify-between
                  overflow-hidden
                  cursor-pointer
                  shadow-lg shadow-black/20
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
              >
                {/* Top Left Accent Line */}
                <div
                  className="absolute top-0 left-6 w-12 h-[3px] rounded-b-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: domain.accent }}
                />

                <div>
                  {/* Top Bar: Number | Category Tag on Left, Icon Box on Right */}
                  <div className="flex items-start justify-between mb-6 pt-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider">
                      <span className="text-[#9AA9D6]">{domain.id}</span>
                      <span className="text-white/20">|</span>
                      <span
                        className="font-semibold tracking-widest text-[11px]"
                        style={{ color: domain.accent }}
                      >
                        {domain.tag}
                      </span>
                    </div>

                    <div
                      className="
                        flex items-center justify-center
                        w-12 h-12
                        rounded-xl
                        bg-white/[0.03]
                        border border-white/[0.08]
                        group-hover:border-[#6FA8FF]/30
                        group-hover:bg-[#6FA8FF]/10
                        transition-all
                        duration-300
                      "
                      style={{ color: domain.accent }}
                    >
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Domain Title */}
                  <h3 className="text-xl sm:text-[22px] font-medium leading-snug text-[#E8EEFF] group-hover:text-[#6FA8FF] transition-colors duration-300 mb-3">
                    {domain.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-[#8F9CC2] mb-6">
                    {domain.desc}
                  </p>
                </div>

                {/* Bottom Row: Explore Track */}
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium transition-all duration-300">
                  <span
                    className="border-b border-transparent group-hover:border-current transition-all"
                    style={{ color: domain.accent }}
                  >
                    Explore Track
                  </span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                    style={{ color: domain.accent }}
                  >
                    →
                  </span>
                </div>

                {/* Subtle Pixel Watermark in bottom right corner */}
                <div
                  className="
                    absolute -right-4 -bottom-4
                    w-24 h-24
                    bg-[radial-gradient(rgba(111,168,255,0.08)_2px,transparent_2px)]
                    [background-size:10px_10px]
                    rounded-full
                    pointer-events-none
                    opacity-40 group-hover:opacity-80
                    transition-opacity duration-300
                  "
                />

                {/* Mouse Spotlight */}
                <div className={glowOverlay} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}