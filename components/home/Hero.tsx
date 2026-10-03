import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative z-10
        flex min-h-[calc(100vh-5rem)]
        w-full max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        flex-col justify-between
        py-[clamp(2rem,6vh,4rem)]
      "
    >
      <div
        className="
          flex w-full
          flex-col items-center justify-between
          gap-[clamp(2rem,5vw,5rem)]
          my-auto
          translate-y-[clamp(1rem,4vh,3rem)]
          md:flex-row
        "
      >
        {/* Hero Content - Centers text and layout on mobile, transitions smoothly to left-aligned on desktop */}
        <div className="min-w-0 flex-1 text-center md:text-left flex flex-col items-center md:items-start w-full">

          {/* Main Brand */}
          <p
            className="
              mb-[clamp(0.75rem,1.5vh,1.25rem)]
              max-w-[850px]
              text-[clamp(1.5rem,3.2vw,3.5rem)]
              font-medium
              leading-[1.08]
              tracking-[-0.025em]
              text-[#e8c977]
            "
          >
            Computer Engineers&apos; Society
          </p>

          {/* Welcome Heading */}
          <h1
            className="
              mb-[clamp(1rem,2vh,1.5rem)]
              text-[clamp(2.25rem,4.5vw,4rem)]
              font-semibold
              leading-[1.05]
              tracking-[-0.025em]
              text-[#f5f4fb]
            "
          >
            Welcomes you
          </h1>

          {/* Description */}
          <p
            className="
              mb-[clamp(1.25rem,2.5vh,1.75rem)]
              max-w-[clamp(320px,38vw,500px)]
              text-[clamp(0.85rem,1.05vw,1.1rem)]
              leading-[1.5]
              text-[#8b85b3]
            "
          >
            Official Computer Science & Engineering Department Club of<br />
            <span className="text-[#ffffff]">
              Siliguri Institute of Technology
            </span>
          </p>

          {/* CTA */}
          <button
            type="button"
            className="
              cursor-pointer
              rounded-[24px]
              border-none
              bg-[#f2f0fb]
              px-[clamp(1.25rem,2.2vw,2rem)]
              py-[clamp(0.6rem,1vh,0.8rem)]
              text-[clamp(0.8rem,0.95vw,1rem)]
              font-medium
              text-[#0a0812]
              transition-colors
              hover:bg-[#e2e0eb]
              focus:outline-none
            "
          >
            <Link href="/links" className="w-full h-full flex items-center justify-center">
              Join our community
            </Link>
          </button>
        </div>

        {/* Hero Visual */}
        <div
          className="
            hidden
            md:flex
            relative
            h-[clamp(250px,31vw,370px)]
            w-[clamp(250px,31vw,370px)]
            shrink-0
            items-center
            justify-center
          "
        >
          {/* CES Mascot */}
          <img
            src="/mascot.png"
            alt="CES mascot"
            className="
              h-[155%]
              w-[155%]
              max-w-none
              object-contain
              drop-shadow-[0_0_25px_rgba(232,201,119,0.18)]
            "
            style={{
              filter: "sepia(0.2) saturate(0.9) brightness(0.9)",
            }}
          />
        </div>
      </div>

      {/* Down Chevron */}
      <div
        className="
          flex w-full
          justify-center
          pb-[clamp(0.75rem,2vh,1rem)]
          pt-[clamp(2rem,6vh,3rem)]
        "
      >
        <svg
          className="
            h-[clamp(0.875rem,1.2vw,1rem)]
            w-[clamp(0.875rem,1.2vw,1rem)]
            animate-bounce
            text-white/35
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
