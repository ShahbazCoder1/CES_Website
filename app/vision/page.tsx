import type { Metadata } from "next";
import LeadershipMessages from "@/components/vision/LeadershipMessages";
import VisionIntro from "@/components/vision/VisionIntro";

export const metadata: Metadata = {
  title: "Vision | Computer Engineers' Society",
  description:
    "The vision of the Computer Engineers' Society at Siliguri Institute of Technology, with messages from the Principal, the Head of the Department, and society leadership.",
};

export default function Page() {
  return (
    <div className="w-full pt-24 sm:pt-28 min-h-screen">
      <VisionIntro />
      <LeadershipMessages />
    </div>
  );
}
