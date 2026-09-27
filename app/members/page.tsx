import type { Metadata } from "next";
import MembersHero from "./MembersHero";
import MembersDirectory from "./MembersDirectory";

export const metadata: Metadata = {
  title: "Members | Computer Engineers' Society",
  description:
    "Meet the builders, problem-solvers, mentors, and creators shaping the Computer Engineers Society at Siliguri Institute of Technology.",
};

export default function MembersPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <MembersHero />
      <MembersDirectory />
    </div>
  );
}
