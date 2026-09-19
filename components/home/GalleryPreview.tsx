import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "SIT Hack-A-Verse 2025",
    category: "Hackathon BTS",
    desc: "Teams collaborating through the 24-hour coding sprint.",
  },
  {
    id: 2,
    title: "Campus 2 Corporate",
    category: "Industry Connect",
    desc: "Mock interviews and professional preparation sessions.",
  },
  {
    id: 3,
    title: "Code Bites 5.0",
    category: "Competition Highlights",
    desc: "Participants deep in focus during the programming challenge.",
    image: "/code-bites-5-1.jpg"
  },
];

export default function GalleryPreview() {
  return (
    <section className="relative flex min-h-0 lg:min-h-screen flex-col justify-center overflow-hidden border-t border-white/[0.03] bg-transparent py-16 sm:py-20 lg:py-0">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-9 sm:mb-12">
          <p className="mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] text-[var(--ces-text-secondary)]">
            FIELD NOTES
          </p>

          <h2 className="text-[32px] sm:text-4xl lg:text-[46px] font-medium leading-tight tracking-[-1px] text-[var(--ces-text-primary)]">
            Moments at CES
          </h2>

          <p className="mt-3 max-w-lg text-[13px] sm:text-sm font-medium leading-relaxed text-[var(--ces-text-muted)]">
            A look behind the scenes at our hackathons, workshops, and community events.
          </p>
        </div>

        {/* Gallery */}
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-6 md:overflow-visible">

          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="
                group relative
                h-60 sm:h-64
                min-w-[82vw] sm:min-w-[420px]
                md:min-w-0
                snap-start
                overflow-hidden
                rounded-2xl
                border border-white/[0.05]
                bg-white/[0.015]
                transition-all duration-300
                hover:border-white/[0.12]
                hover:bg-white/[0.02]
              "
            >
              {/* Photo */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 82vw"
                  className="z-0 object-cover object-left transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Subtle texture */}
              <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 transition-opacity duration-300 group-hover:opacity-50" />

              {/* Visual placeholder */}
              <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_30%,rgba(111,168,255,0.06),transparent_45%)]" />

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/70 to-transparent" />

              {/* Number */}
              <span className="absolute left-5 top-5 z-10 font-mono text-[10px] tracking-[2px] text-white/[0.15]">
                {String(item.id).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                <span className="text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-[2px] text-[var(--ces-gold)]">
                  {item.category}
                </span>

                <h3 className="mt-2 text-lg sm:text-xl font-medium tracking-[-0.3px] text-[var(--ces-text-primary)]">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs sm:text-[13px] font-medium leading-relaxed text-[var(--ces-text-muted)] line-clamp-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* View Gallery */}
          <Link
            href="/gallery"
            className="
              group relative
              flex
              h-60 sm:h-64
              min-w-[70vw] sm:min-w-[300px]
              md:min-w-0
              shrink-0
              snap-start
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border border-dashed border-white/[0.08]
              bg-white/[0.01]
              transition-all duration-300
              hover:border-[#6FA8FF]/30
              hover:bg-white/[0.02]
            "
          >
            {/* Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 transition-opacity duration-300 group-hover:opacity-50" />

            <div className="relative flex flex-col items-center text-center">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-[#8F9CC2] transition-all duration-300 group-hover:border-[#6FA8FF]/40 group-hover:text-[#E8EEFF]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </div>

              <span className="text-sm font-medium text-[var(--ces-text-secondary)] transition-colors group-hover:text-[var(--ces-text-primary)]">
                Explore full gallery
              </span>

              <span className="mt-1 text-[11px] text-[var(--ces-text-muted)]">
                More moments from CES
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile scroll hint */}
        <div className="mt-5 flex items-center justify-between md:hidden">
          <span className="text-[9px] font-mono uppercase tracking-[2px] text-[#596587]">
            Swipe to explore
          </span>

          <div className="flex items-center gap-1.5 text-[#596587]">
            <span className="h-px w-8 bg-white/[0.08]" />
            <span className="text-xs">→</span>
          </div>
        </div>

      </div>
    </section>
  );
}