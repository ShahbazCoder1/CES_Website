import type { Metadata } from "next";
import MembersHero from "@/components/members/MembersHero";
import MembersDirectory from "@/components/members/MembersDirectory";

export const metadata: Metadata = {
  title: "Members | Computer Engineers' Society",
  description:
    "Meet the builders, problem-solvers, mentors, and creators shaping the Computer Engineers Society at Siliguri Institute of Technology.",
};

export default function MembersPage() {
  return (
    <div className="relative min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-12 left-1/2 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-[#7a8cff]/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-[10%] h-[400px] w-[400px] rounded-full bg-[#c9a24a]/[0.04] blur-[160px]" />

      <MembersHero />
      <MembersDirectory />
    </div>
  );
}
