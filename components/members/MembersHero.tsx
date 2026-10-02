export default function MembersHero() {
  return (
    <section
      className="relative z-10 w-full pt-28 sm:pt-36 lg:pt-40 pb-8 sm:pb-12"
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

      {/* Main Hero Header Area */}
      <div className="max-w-3xl">
        <p
          className="hero-reveal mb-3 font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-ces-gold"
          style={{ animationDelay: "50ms" }}
        >
          Our Community
        </p>

        <h1
          className="hero-reveal text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-ces-text-primary"
          style={{ animationDelay: "100ms" }}
        >
          Meet the People
          <br />
          Behind CES
        </h1>

        <p
          className="hero-reveal mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-ces-text-secondary"
          style={{ animationDelay: "220ms" }}
        >
          The faces behind the work.
          <br />
          Different skills. Different perspectives. One community.
        </p>
      </div>
    </section>
  );
}
