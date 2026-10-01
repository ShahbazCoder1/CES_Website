import Link from "next/link";

export default function CTA() {
  return (
    <section id="connect" className="min-h-screen flex flex-col justify-center items-center border-t border-white/[0.03] text-center relative overflow-hidden py-12 md:py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 md:space-y-6 w-full relative z-10">
        <p className="text-[11px] md:text-[12px] font-semibold tracking-[2px] text-[#EAB241] uppercase">
          Be Part of CES
        </p>
        
        <h2 className="text-3xl sm:text-5xl font-medium text-[#F7F5F0] tracking-tight leading-tight">
          Learn with us. Build with us.<br />Grow with us.
        </h2>
        
        <p className="max-w-md mx-auto text-[13px] md:text-[14px] text-[#B5B0A3] leading-relaxed px-4">
          Gain access to structural mentorship, code hubs, and deep collaborative technical tracking lines.
        </p>
        
        <div className="pt-3 md:pt-4 flex justify-center w-full">
          <Link
            href="/links"
            className="inline-flex items-center justify-center px-6 py-2.5 md:px-9 md:py-3.5 rounded-full text-[13px] md:text-[14px] font-bold tracking-wide uppercase bg-[#EAB241] text-[#1E1D1A] hover:bg-[#D49E30] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#EAB241]/10 hover:shadow-[#EAB241]/20 whitespace-nowrap"
          >
            Connect with CES
          </Link>
        </div>
      </div>
    </section>
  );
}
