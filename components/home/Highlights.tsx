"use client";

import Link from "next/link";
//import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { mouseGlow, glowOverlay } from "../mouseGlow";

const highlights = [
  {
    tag: "HACKATHON",
    date: "03 APR 2025",
    title: "SIT Hack-A-Verse 2025",
    desc: "Our flagship 24-hour hackathon bringing together over 200 students and 50+ teams to tackle challenging real-world problem statements.",
    href: "/events",
  },
  {
    tag: "INDUSTRY CONNECT",
    date: "18 AUG 2025",
    title: "Campus 2 Corporate",
    desc: "A five-day intensive program bridging the gap to corporate life through technical mock interviews, group discussions, and career preparation.",
    href: "/events",
  },
  {
    tag: "COMPETITION",
    date: "21 MAY 2026",
    title: "Code Bites 5.0",
    desc: "Our signature coding challenge bringing together dozens of students to test their problem-solving, logical thinking, and programming skills.",
    href: "/events",
    //image: "/code-bites-5.jpg"
  },
  {
    tag: "WORKSHOP",
    date: "29 SEP 2024",
    title: "Roadmap to Programming",
    desc: "An engaging interactive workshop providing first-year students with foundational C programming concepts and a clear vision for their coding journey.",
    href: "/events",
  },
  {
    tag: "QUIZ COMPETITION",
    date: "18 SEP 2024",
    title: "Quiz-O-Mania",
    desc: "A thrilling three-round technical quiz competition bringing together over 35 teams across departments to showcase their technical knowledge.",
    href: "/events",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

export default function Highlights() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScroll =
      carousel.scrollWidth - carousel.clientWidth;

    const currentScroll = carousel.scrollLeft;

    setCanScrollLeft(currentScroll > 5);
    setCanScrollRight(currentScroll < maxScroll - 5);

    // Determine which card is currently closest to the left edge
    const cards = Array.from(
      carousel.children
    ) as HTMLElement[];

    if (!cards.length) return;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - currentScroll
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);

    /* ============================================================
        PARTIAL STACK — scroll-driven fan

        Each card is nudged toward the track center (sideways tuck),
        scaled down and tilted slightly by how far it sits from the
        middle, so the row reads as a loosely stacked deck while
        scrolling instead of a flat strip. Center cards win z-index;
        a hovered card always floats above its neighbours.

        Transforms are written straight to the DOM (no re-render),
        measured from layout metrics (offsetLeft) so the effect never
        feeds back into itself.
    ============================================================ */
    const half = carousel.clientWidth / 2;
    const trackCenter = carousel.scrollLeft + half;

    cards.forEach((card) => {
      const layer = card.firstElementChild as HTMLElement | null;

      if (!layer) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const raw = (cardCenter - trackCenter) / half;
      const dc = Math.max(-1, Math.min(1, raw));
      const f = Math.abs(dc);

      const scale = 1 - f * 0.1;
      const ty = f * 10;
      const tx = -dc * 16;
      const ry = dc * 6;

      layer.style.transform = `translate(${tx}px, ${ty}px) scale(${scale}) rotateY(${ry}deg)`;

      const hovered = card.matches(":hover");

      card.style.zIndex = hovered
        ? "15"
        : String(Math.max(0, Math.round((1 - f) * 10)));
    });
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    updateScrollState();

    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScrollState);
    };

    carousel.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      carousel.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard = carousel.children[0] as HTMLElement;

    if (!firstCard) return;

    const gap = 24;

    const amount = firstCard.offsetWidth + gap;

    carousel.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement;

    if (!carousel || !card) return;

    carousel.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="highlights"
      className="relative z-10 min-h-0 lg:min-h-[100svh] w-full flex items-center justify-center px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-0 bg-transparent border-t border-white/[0.03]"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-10 lg:mb-12">
          <div>
            <p className="mb-2 text-[10px] sm:text-xs font-medium uppercase tracking-[3px] text-[#9AA9D6]">
              SPOTLIGHT
            </p>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF]">
              Featured{" "}
              <span className="text-[#6FA8FF]">Events</span>
            </h2>
          </div>

          <Link
            href="/events"
            className="hidden sm:block text-[13px] sm:text-sm font-medium text-[#8F9CC2] hover:text-[#E8EEFF] transition-colors"
          >
            View all events →
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* LEFT ARROW */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous events"
              className="
                absolute left-2 sm:left-3 lg:left-[-20px]
                top-1/2 -translate-y-1/2
                z-20
                flex h-10 w-10 sm:h-11 sm:w-11
                items-center justify-center
                rounded-full
                border border-white/[0.10]
                bg-[#080D24]/90
                text-[#C9D8FF]
                shadow-xl
                backdrop-blur-md
                transition-all duration-200
                hover:border-[#6FA8FF]/50
                hover:bg-[#101936]
                hover:text-white
                active:scale-95
              "
            >
              <ChevronIcon direction="left" />
            </button>
          )}

          {/* RIGHT ARROW */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next events"
              className="
                absolute right-2 sm:right-3 lg:right-[-20px]
                top-1/2 -translate-y-1/2
                z-20
                flex h-10 w-10 sm:h-11 sm:w-11
                items-center justify-center
                rounded-full
                border border-white/[0.10]
                bg-[#080D24]/90
                text-[#C9D8FF]
                shadow-xl
                backdrop-blur-md
                transition-all duration-200
                hover:border-[#6FA8FF]/50
                hover:bg-[#101936]
                hover:text-white
                active:scale-95
              "
            >
              <ChevronIcon direction="right" />
            </button>
          )}

          {/* RIGHT EDGE FADE — removed in favour of the scroll stack;
              the dark gradient ends read as a heavy shadow and fought
              the page background at different widths */}

          {/* Cards */}
          <div
            ref={carouselRef}
            className="
              relative
              flex gap-4 sm:gap-6
              overflow-x-auto
              snap-x snap-mandatory
              pb-2
              pr-8
              overscroll-x-contain
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {highlights.map((item, idx) => (
              <article
                key={idx}
                className="
                  group
                  relative
                  flex
                  shrink-0
                  snap-start
                  flex-col
                  w-[calc(100vw-40px)]
                  sm:w-[480px]
                  lg:w-[520px]
                  xl:w-[540px]
                  [perspective:1400px]
                  transition-transform
                  duration-300
                  hover:-translate-y-2"
                onMouseMove={mouseGlow}
                >


                {/* Stack layer — JS scroll transforms land here so the
                    hover lift on the shell above never fights them */}
                <div
                  className="
                    stack-layer
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-xl
                    border border-white/[0.06]
                    bg-white/[0.015]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:border-[#6FA8FF]/60
                    group-hover:bg-white/[0.03]
                    group-hover:shadow-[0_24px_60px_-24px_rgba(111,168,255,0.45)]
                  "
                >

                {/* Visual Area */}
                <div
                  className="
                    relative
                    h-32
                    sm:h-44
                    lg:h-48
                    overflow-hidden
                    border-b border-white/[0.04]
                  "
                >
                  {/* Grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Large Number */}
                  <div
                    className="
                      absolute
                      bottom-1
                      left-4
                      sm:bottom-3
                      sm:left-6
                      text-[60px]
                      sm:text-[80px]
                      lg:text-[88px]
                      font-medium
                      leading-none
                      tracking-[-5px]
                      text-white/[0.035]
                      transition-colors
                      duration-300
                      group-hover:text-white/[0.07]
                      select-none
                    "
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Corner Label */}
                  <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-[2px] text-[#6F7DA8] transition-colors duration-300 group-hover:text-[#6FA8FF]">
                      CES / {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col justify-between p-4 sm:p-6 lg:p-7">

                  <div>
                    {/* Meta */}
                    <div className="flex items-center justify-between gap-2 text-[9px] sm:text-[10px] font-mono font-medium tracking-[1.5px]">
                      <span className="text-[#6FA8FF]">
                        {item.tag}
                      </span>

                      <span className="text-[#6F7DA8]">
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-3
                        sm:mt-4
                        text-[22px]
                        sm:text-[26px]
                        lg:text-[29px]
                        font-medium
                        leading-tight
                        tracking-[-0.5px]
                        text-[#E8EEFF]
                        group-hover:text-[#C9D8FF]
                        transition-colors
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-2
                        sm:mt-3
                        max-w-xl
                        text-[12px]
                        sm:text-sm
                        leading-[1.65]
                        text-[#8F9CC2]
                        line-clamp-3
                      "
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Link */}
                  <Link
                    href={item.href}
                    className="
                      mt-5
                      sm:mt-7
                      inline-flex
                      items-center
                      text-[12px]
                      sm:text-sm
                      font-medium
                      text-[#9AA9D6]
                      hover:text-[#E8EEFF]
                      transition-colors
                    "
                  >
                    View event

                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
                </div>

                {/* Cursor spotlight */}
                <div className={glowOverlay} />

              </article>
            ))}

            {/* View More */}
            <Link
              href="/events"
              onMouseMove={mouseGlow}
              className="
                group
                relative
                flex
                shrink-0
                snap-start
                w-[70vw]
                sm:w-[280px]
                lg:w-[320px]
                min-h-[390px]
                sm:min-h-[440px]
                items-center
                justify-center
                [perspective:1400px]
                transition-transform
                duration-300
                hover:-translate-y-1.5
              "
            >
              <div
                className="
                  stack-layer
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border border-dashed border-white/[0.10]
                  bg-white/[0.01]
                  transition-all
                  duration-300
                  group-hover:border-[#6FA8FF]/40
                  group-hover:bg-white/[0.02]
                  group-hover:shadow-[0_24px_60px_-24px_rgba(111,168,255,0.25)]
                "
              >
              <div className="text-center">

                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-[#8F9CC2] transition-all duration-300 group-hover:border-[#6FA8FF]/40 group-hover:text-[#6FA8FF]">
                  <ChevronIcon direction="right" />
                </div>

                <p className="text-sm font-medium text-[#E8EEFF]">
                  View more events
                </p>

                <p className="mt-1 text-xs text-[#6F7DA8]">
                  Explore the full CES archive
                </p>

              </div>
              </div>

              {/* Cursor spotlight */}
              <div className={glowOverlay} />
            </Link>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
          {highlights.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to event ${index + 1}`}
              onClick={() => scrollToCard(index)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  activeIndex === index
                    ? "w-6 bg-[#6FA8FF]"
                    : "w-1.5 bg-[#596587] hover:bg-[#8F9CC2]"
                }
              `}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <Link
          href="/events"
          className="mt-6 flex sm:hidden items-center justify-center text-[12px] font-medium text-[#8F9CC2]"
        >
          View all events
          <span className="ml-2">→</span>
        </Link>

      </div>
    </section>
  );
}