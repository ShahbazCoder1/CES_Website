import { ArrowDown } from "lucide-react";

export default function MembersHero() {
  return (
    <section
      className="relative z-10 flex min-h-[calc(100vh-5rem)] w-full flex-col justify-between pt-[clamp(6.5rem,14vh,9.5rem)] pb-[clamp(2rem,5vh,3.5rem)]"
      aria-label="Members Hero"
    >
      <style>{`
        @keyframes heroEntrance {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-reveal {
          opacity: 0;
          animation: heroEntrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* Main Hero Header Area - Centered vertically within the hero section */}
      <div className="my-auto flex w-full flex-col justify-between gap-8 py-4 md:flex-row md:items-start lg:gap-16">
        {/* Left Column: Heading + Description */}
        <div className="flex-1">
          {/* Heading: Exactly "Meet the People Behind CES" (no period) */}
          <h1
            className="hero-reveal text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.05] tracking-tight text-ces-text-primary"
            style={{ animationDelay: "100ms" }}
          >
            Meet the People
            <br />
            Behind CES
          </h1>

          {/* Sub-paragraph */}
          <p
            className="hero-reveal mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ces-text-secondary"
            style={{ animationDelay: "220ms" }}
          >
            The faces behind the work.
            <br />
            Different skills. Different perspectives. One community.
          </p>
        </div>

        {/* Right Column: BUILD / LEARN / CREATE Pills with individual subtle glows */}
        <div
          className="hero-reveal flex flex-col items-start md:items-end gap-3 pt-2 md:pt-4"
          style={{ animationDelay: "320ms" }}
        >
          <div className="flex flex-wrap items-center gap-2">
            {/* BUILD -> warm CES-gold/yellow glow */}
            <span className="cursor-default select-none rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 font-mono text-[11px] sm:text-xs tracking-wider text-ces-text-secondary backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ces-gold/50 hover:text-ces-gold hover:shadow-[0_0_12px_rgba(201,162,74,0.35)] motion-reduce:transform-none motion-reduce:transition-none">
              BUILD
            </span>
            {/* LEARN -> soft pink/purple glow */}
            <span className="cursor-default select-none rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 font-mono text-[11px] sm:text-xs tracking-wider text-ces-text-secondary backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/50 hover:text-purple-300 hover:shadow-[0_0_12px_rgba(192,132,252,0.35)] motion-reduce:transform-none motion-reduce:transition-none">
              LEARN
            </span>
            {/* CREATE -> soft green/blue glow */}
            <span className="cursor-default select-none rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 font-mono text-[11px] sm:text-xs tracking-wider text-ces-text-secondary backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(52,211,153,0.35)] motion-reduce:transform-none motion-reduce:transition-none">
              CREATE
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row: Scroll to meet the team */}
      <div
        className="hero-reveal mt-8 sm:mt-12 flex items-center"
        style={{ animationDelay: "420ms" }}
      >
        <a
          href="#members-directory"
          className="group inline-flex items-center gap-2 text-sm text-ces-text-muted transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ces-gold/60"
        >
          <span>Scroll to meet the team</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-ces-gold transition-transform group-hover:translate-y-1 motion-reduce:animate-none" />
        </a>
      </div>
    </section>
  );
}
