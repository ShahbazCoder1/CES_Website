import type { Metadata } from "next";
import Achievements from "@/components/home/Achievements";

export const metadata: Metadata = {
  title: "Achievements | Computer Engineers' Society",
  description:
    "Celebrating research, innovation, collaboration and competitive excellence across the Computer Engineers' Society community at Siliguri Institute of Technology.",
};

export default function Page() {
  return (
    <div className="w-full pt-24 sm:pt-28 min-h-screen">
      <Achievements />
    </div>
  );
}
