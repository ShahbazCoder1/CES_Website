import Image from "next/image";

export default function EventsHero() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-4xl scroll-mt-28 flex-col items-center px-4 pb-14 pt-32 text-center sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
      {/* CES Logo */}
      <div className="relative mb-6 h-16 w-16 sm:mb-7 sm:h-20 sm:w-20">
        <Image
          src="/ces-logo-main.png"
          alt="Computer Engineers' Society"
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-[#f5f4fb]">
        Computer Engineers&apos; Society
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-[560px] text-[clamp(0.85rem,1.05vw,1.05rem)] leading-[1.6] text-[#8b85b3]">
        Where passion meets skill and knowledge. Explore our flagship student
        initiatives, dynamic code storms, hackathons, and research-led tech
        bootcamps at Siliguri Institute of Technology.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <a
          href="#upcoming"
          className="rounded-[24px] bg-[#f2f0fb] px-6 py-2.5 text-[14px] font-medium text-[#0a0812] transition-colors hover:bg-[#e2e0eb] sm:px-7 sm:py-3 sm:text-[15px]"
        >
          Explore Events ↓
        </a>

        <a
          href="#next-event"
          className="rounded-[24px] border border-[#6FA8FF]/40 bg-[#6FA8FF]/[0.06] px-6 py-2.5 text-[14px] font-medium text-[#C9D8FF] transition-all hover:border-[#6FA8FF]/70 hover:bg-[#6FA8FF]/15 sm:px-7 sm:py-3 sm:text-[15px]"
        >
          Join Next Event
        </a>
      </div>
    </section>
  );
}
