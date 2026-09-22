import type { Metadata } from "next";
import EventsHero from "@/components/events/EventsHero";
import EventsExplorer from "@/components/events/EventsExplorer";
import {
  categories,
  pastEvents,
  upcomingEvents,
} from "@/components/events/data";

export const metadata: Metadata = {
  title: "Events | Computer Engineers' Society",
  description:
    "Explore upcoming and past events by the Computer Engineers' Society at Siliguri Institute of Technology — hackathons, workshops, competitions and more.",
};

const stats = [
  { value: "25+", label: "Events Conducted" },
  { value: "500+", label: "Participants" },
  { value: "15+", label: "Speakers Hosted" },
  { value: "10+", label: "Collaborations" },
];

export default function Page() {
  return (
    <div className="w-full">
      <EventsHero />

      <EventsExplorer
        categories={categories}
        upcoming={upcomingEvents}
        past={pastEvents}
      />

      {/* ============================================================
          STATS
      ============================================================ */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 bg-[#07060e] px-4 py-8 text-center sm:py-10"
            >
              <span className="text-[28px] font-medium leading-none text-[#E8EEFF] sm:text-[36px]">
                {stat.value}
              </span>

              <span className="text-[9px] font-medium uppercase tracking-[2px] text-[#6F7DA8] sm:text-[10px] sm:tracking-[2.5px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
