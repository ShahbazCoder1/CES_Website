"use client";

import Image from "next/image";
import { useState } from "react";

interface AlumniMember {
  name: string;
  image: string;
  designation: string;
  company: string;
  linkedin: string;
}

const alumni: AlumniMember[] = [
  {
    name: "Aayush Kumar",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    designation: "Platforms Engineer - II",
    company: "Expedia Group",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Aditya Raj",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    designation: "Software Engineer",
    company: "Microsoft",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Akash Singh",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    designation: "Full Stack Engineer",
    company: "Google",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Alfiya Fatima",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    designation: "Product Engineer",
    company: "Amazon",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rohan Mehta",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=900&q=85",
    designation: "Software Development Engineer",
    company: "Adobe",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sneha Sharma",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
    designation: "Data Engineer",
    company: "Atlassian",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Arjun Verma",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    designation: "Backend Engineer",
    company: "Flipkart",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Priya Nair",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    designation: "Cloud Engineer",
    company: "Deloitte",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function AlumniPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveId((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCard(index);
    }
  };

  return (
    <div className="relative min-h-screen w-full px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28 lg:px-12">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-12 left-1/2 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-[#7a8cff]/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-[10%] h-[400px] w-[400px] rounded-full bg-[#c9a24a]/[0.04] blur-[160px]" />

      <section className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c9a24a] sm:text-xs">
            Our Community
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#f5f4fb] sm:text-5xl lg:text-6xl">
            Alumni
          </h1>
          <div className="mx-auto mt-5 h-px w-16 bg-[#c9a24a]/50" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#8b85b3] sm:text-base">
            Meet the alumni who continue to build, innovate, and make an impact
            across the technology industry.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {alumni.map((person, index) => {
            const isActive = activeId === index;

            return (
              <article
                key={person.name}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`View ${person.name}'s professional profile`}
                onClick={() => toggleCard(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`group relative cursor-pointer rounded-[38px] border p-5 transition-all duration-300 sm:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a24a] ${
                  isActive
                    ? "-translate-y-1 border-[#c9a24a] bg-[#121946]/70 shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_30px_rgba(201,162,74,0.2)]"
                    : "border-white/[0.08] bg-[#0c1232]/50 backdrop-blur-md hover:-translate-y-1 hover:border-[#c9a24a]/50 hover:bg-[#101742]/60 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4),0_0_24px_rgba(201,162,74,0.12)]"
                }`}
              >
                {/* Media Container: Smoothly switches between Photo and Details */}
                <div
                  className={`relative aspect-square w-full overflow-hidden rounded-[30px] border transition-colors duration-300 ${
                    isActive
                      ? "border-[#c9a24a]/30 bg-[#080d28]"
                      : "border-white/[0.06] bg-[#070a1e]"
                  }`}
                >
                  {/* Photo View */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ease-out ${
                      isActive
                        ? "pointer-events-none scale-95 opacity-0"
                        : "scale-100 opacity-100"
                    }`}
                  >
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      priority={index < 4}
                    />
                  </div>

                  {/* Details View */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_#17225c_0%,_#090e28_100%)] p-6 text-center transition-all duration-300 ease-out ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-95 opacity-0"
                    }`}
                  >
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${person.name}'s LinkedIn profile`}
                      onClick={(e) => e.stopPropagation()}
                      className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#c9a24a] text-[#050408] shadow-[0_0_12px_rgba(201,162,74,0.35)] transition-all duration-200 hover:scale-110 hover:bg-[#F4B41A]"
                    >
                      <svg
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.64 1.65 1.65 0 0 0 1.66 1.66 1.65 1.65 0 0 0 1.66-1.66c0-.91-.74-1.64-1.66-1.64Z" />
                      </svg>
                    </a>

                    <p className="text-sm font-medium leading-relaxed text-[#f5f4fb]">
                      {person.designation}
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-[#c9a24a]">
                      @{person.company}
                    </p>
                  </div>
                </div>

                {/* Name Pill */}
                <div className="mt-5 flex justify-center">
                  <div
                    className={`rounded-full px-6 py-2.5 text-center text-sm font-medium transition-all duration-300 border ${
                      isActive
                        ? "border-[#c9a24a]/50 bg-[#162058] text-[#c9a24a] shadow-[0_0_15px_rgba(201,162,74,0.2)]"
                        : "border-white/[0.08] bg-[#0c1232]/90 text-[#f5f4fb] group-hover:border-[#c9a24a]/30 group-hover:text-[#c9a24a]"
                    }`}
                  >
                    {person.name}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Small Interaction Hint */}
        <p className="mt-12 text-center text-xs tracking-wider text-[#7A8AA3]">
          Click an alumni card to view their professional profile.
        </p>
      </section>
    </div>
  );
}
