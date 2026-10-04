import { visionContent } from "./data";

export default function VisionIntro() {
  return (
    <section className="relative overflow-hidden">
      <div className="ces-ambient-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-medium uppercase tracking-[3px] text-[#7D89B5] sm:text-xs sm:tracking-[4px]">
            {visionContent.kicker}
          </p>

          <h1 className="mt-3 text-[34px] font-medium leading-[1.08] tracking-[-1.5px] text-[#E8EEFF] sm:text-[46px] lg:text-[54px]">
            {visionContent.headline}
          </h1>

          <div className="accent-stripe mt-5 h-px w-24" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
