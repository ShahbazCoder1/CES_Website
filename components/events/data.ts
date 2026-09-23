export type EventCategory =
  | "hackathon"
  | "competition"
  | "workshop"
  | "industry-connect"
  | "quiz";

export type EventItem = {
  id: string;
  anchorId?: string;
  title: string;
  category: EventCategory;
  categoryLabel: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string;
  image?: string;
  action: { label: string; href?: string };
  actionMuted?: boolean;
};

export const categoryColors: Record<EventCategory, string> = {
  hackathon: "#A78BFA",
  competition: "#EAB241",
  workshop: "#6FA8FF",
  "industry-connect": "#34D399",
  quiz: "#F472B6",
};

export const categories: { key: string; label: string }[] = [
  { key: "all", label: "All Events" },
  { key: "hackathon", label: "Hackathons" },
  { key: "competition", label: "Coding Competitions" },
  { key: "workshop", label: "Workshops" },
  { key: "industry-connect", label: "Industry Connect" },
  { key: "quiz", label: "Quizzes" },
];

export const upcomingEvents: EventItem[] = [
  {
    id: "roadmap-3",
    anchorId: "next-event",
    title: "Roadmap to Programming 3.0",
    category: "workshop",
    categoryLabel: "Workshop",
    subtitle: "Interactive Coding Bootcamp",
    date: "26 SEP 2026",
    description: "Interactive technical bootcamp for first-year students.",
    action: { label: "Register Now" },
  },
  {
    id: "30-days-challenge",
    title: "30 Days Programming Challenge",
    category: "competition",
    categoryLabel: "Coding Competition",
    subtitle: "Daily Coding Sprint",
    date: "02 OCT 2026",
    location: "Online",
    description: "Daily algorithmic problem-solving sprint.",
    action: { label: "Coming Soon" },
    actionMuted: true,
  },
];

export const pastEvents: EventItem[] = [
  {
    id: "hack-a-verse-2025",
    title: "SIT Hack-A-Verse 2025",
    category: "hackathon",
    categoryLabel: "Hackathon",
    subtitle: "24-hour Hackathon",
    date: "03 APR 2025",
    location: "CSE Seminar Hall",
    description:
      "Our flagship 24-hour hackathon bringing together over 200 students and 50+ teams to tackle challenging real-world problem statements.",
    image: "/sit-hack-a-verse.png",
    action: { label: "View Details" },
  },
  {
    id: "code-bites-5",
    title: "Code Bites 5.0",
    category: "competition",
    categoryLabel: "Competition",
    subtitle: "Signature Coding Challenge",
    date: "21 MAY 2026",
    location: "CS Lab 1 & 2",
    description:
      "Our signature coding challenge bringing together dozens of students to test their problem-solving, logical thinking, and programming skills.",
    image: "/code-bites-5.jpg",
    action: { label: "View Results" },
  },
  {
    id: "campus-2-corporate",
    title: "Campus 2 Corporate",
    category: "industry-connect",
    categoryLabel: "Industry Connect",
    subtitle: "Career Readiness Program",
    date: "18 AUG 2025",
    location: "Auditorium",
    description:
      "A five-day intensive program bridging the gap to corporate life through technical mock interviews, group discussions, and career preparation.",
    image: "/campus-2-corporate.png",
    action: { label: "View Recording" },
  },
  {
    id: "roadmap-1",
    title: "Roadmap to Programming",
    category: "workshop",
    categoryLabel: "Workshop",
    subtitle: "Foundational C Workshop",
    date: "29 SEP 2024",
    description:
      "An engaging interactive workshop providing first-year students with foundational C programming concepts and a clear vision for their coding journey.",
    action: { label: "View Details" },
  },
  {
    id: "quiz-o-mania",
    title: "Quiz-O-Mania",
    category: "quiz",
    categoryLabel: "Quiz Competition",
    subtitle: "Technical Quiz Challenge",
    date: "18 SEP 2024",
    description:
      "A thrilling three-round technical quiz competition bringing together over 35 teams across departments to showcase their technical knowledge.",
    action: { label: "View Details" },
  },
];
