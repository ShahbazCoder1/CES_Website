export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
}

export interface GalleryEvent {
  id: string;
  title: string;
  year: number;
  date: string;
  location?: string;
  description: string;
  photos: GalleryPhoto[];
}

export interface BookCategory {
  id: string;
  title: string;
  letter: string;
  coverPhoto?: string;
  description: string;
  coverColor: string; // Lighter, richer book color
  coverColorDark: string;
  textColor: string;
  yearRange: string;
  events: GalleryEvent[];
}

const placeholder = "/gallery-placeholder.svg";

export const galleryCategories: BookCategory[] = [
  // =========================================================================
  // 1. EVENTS (Muted / Light Blue)
  // =========================================================================
  {
    id: "events",
    title: "Events",
    letter: "E",
    coverPhoto: "/campus-2-corporate.png",
    description:
      "Flagship celebrations, annual welcomes, alumni sessions, and community gatherings across the semesters.",
    coverColor: "#2a4d7d", // Muted / light blue
    coverColorDark: "#1b3354",
    textColor: "#f0f4fc",
    yearRange: "2024–2026",
    events: [
      {
        id: "events-2024",
        title: "Society Induction & Quiz",
        year: 2024,
        date: "October 2024",
        location: "Department Hall",
        description:
          "Welcoming our new student members with an introductory orientation and interactive technical quiz.",
        photos: [
          {
            id: "ev-24-1",
            src: placeholder,
            caption: "New members gathering for the introductory session",
          },
          {
            id: "ev-24-2",
            src: placeholder,
            caption: "Teams taking part in the interactive quiz round",
          },
          {
            id: "ev-24-3",
            src: placeholder,
            caption: "Felicitating the quiz winners at the close of the day",
          },
        ],
      },
      {
        id: "events-2025",
        title: "Campus 2 Corporate Meet",
        year: 2025,
        date: "August 2025",
        location: "Main Auditorium",
        description:
          "A multi-day career readiness program with mock interviews, group discussions, and senior alumni guidance.",
        photos: [
          {
            id: "ev-25-1",
            src: placeholder,
            caption: "Keynote presentation on tech industry expectations",
          },
          {
            id: "ev-25-2",
            src: placeholder,
            caption: "Interactive panel discussion with alumni mentors",
          },
          {
            id: "ev-25-3",
            src: placeholder,
            caption: "One-on-one resume reviews with participants",
          },
          {
            id: "ev-25-4",
            src: placeholder,
            caption: "Student organizers and faculty coordinators",
          },
        ],
      },
      {
        id: "events-2026",
        title: "Annual Tech Assembly",
        year: 2026,
        date: "February 2026",
        location: "Auditorium",
        description:
          "Our main annual community assembly celebrating student achievements and inaugurating new project initiatives.",
        photos: [
          {
            id: "ev-26-1",
            src: placeholder,
            caption: "CES society gathering in the main auditorium",
          },
          {
            id: "ev-26-2",
            src: placeholder,
            caption: "Presenting student excellence awards on stage",
          },
          {
            id: "ev-26-3",
            src: placeholder,
            caption: "Group photo with club members and faculty advisors",
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 2. WORKSHOPS & SESSIONS (Muted / Light Green)
  // =========================================================================
  {
    id: "workshops",
    title: "Workshops & Sessions",
    letter: "W",
    coverPhoto: "/events/45-days-dsa-2/01.jpg",
    description:
      "Hands-on coding bootcamps, systems deep dives, web development labs, and peer-guided learning circles.",
    coverColor: "#285c44", // Muted / light green
    coverColorDark: "#1b3e2e",
    textColor: "#effcf5",
    yearRange: "2024–2026",
    events: [
      {
        id: "ws-2024",
        title: "Programming Foundations Sprint",
        year: 2024,
        date: "September 2024",
        location: "CS Lab 1",
        description:
          "A foundational coding series helping junior students build confidence with problem solving and logic.",
        photos: [
          {
            id: "ws-24-1",
            src: placeholder,
            caption: "Mentors walking students through problem sets",
          },
          {
            id: "ws-24-2",
            src: placeholder,
            caption: "Participants working through code examples together",
          },
          {
            id: "ws-24-3",
            src: placeholder,
            caption: "Whiteboard breakdown of recursion and logic flow",
          },
        ],
      },
      {
        id: "ws-2025",
        title: "DSA Challenge & Review",
        year: 2025,
        date: "September 2025",
        location: "CS Labs 2 & 3",
        description:
          "An intensive multi-week sprint covering core data structures, graph traversals, and algorithmic problem-solving.",
        photos: [
          {
            id: "ws-25-1",
            src: placeholder,
            caption: "Students coding during the daily practice session",
          },
          {
            id: "ws-25-2",
            src: placeholder,
            caption: "Explaining solution approaches on the main board",
          },
          {
            id: "ws-25-3",
            src: placeholder,
            caption: "Felicitation of consistent leaderboard performers",
          },
          {
            id: "ws-25-4",
            src: placeholder,
            caption: "Post-session question and answer discussion",
          },
        ],
      },
      {
        id: "ws-2026",
        title: "Modern Web & Linux Workshop",
        year: 2026,
        date: "March 2026",
        location: "Computing Concourse",
        description:
          "Practical guidance on full-stack web technologies, developer tooling, and modern development workflows.",
        photos: [
          {
            id: "ws-26-1",
            src: placeholder,
            caption: "Hands-on terminal commands and version control demo",
          },
          {
            id: "ws-26-2",
            src: placeholder,
            caption: "Teams testing API endpoints in real-time",
          },
          {
            id: "ws-26-3",
            src: placeholder,
            caption: "Showcase of small student projects built during the lab",
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 3. HACKATHONS (Warm Brown / Orange)
  // =========================================================================
  {
    id: "hackathons",
    title: "Hackathons",
    letter: "H",
    coverPhoto: "/sit-hack-a-verse.png",
    description:
      "Sleepless 24-hour coding sprints, creative project prototyping, and high-energy team building.",
    coverColor: "#804323", // Warm brown / orange
    coverColorDark: "#5c2e17",
    textColor: "#fdf3ee",
    yearRange: "2024–2026",
    events: [
      {
        id: "hack-2024",
        title: "Campus Security Sprint",
        year: 2024,
        date: "November 2024",
        location: "Seminar Hall",
        description:
          "An overnight ideation sprint exploring cyber defense models, secure architecture, and network safeguards.",
        photos: [
          {
            id: "hk-24-1",
            src: placeholder,
            caption: "Teams drafting their architecture diagram",
          },
          {
            id: "hk-24-2",
            src: placeholder,
            caption: "Midnight coding checkpoint and team check-ins",
          },
          {
            id: "hk-24-3",
            src: placeholder,
            caption: "Final morning presentations in front of faculty",
          },
        ],
      },
      {
        id: "hack-2025",
        title: "SIT Hack-A-Verse 2025",
        year: 2025,
        date: "April 2025",
        location: "Main Campus Labs",
        description:
          "Our premier 24-hour hackathon bringing together over 200 builders to build software solutions under time pressure.",
        photos: [
          {
            id: "hk-25-1",
            src: placeholder,
            caption: "Hack-A-Verse opening address to participating teams",
          },
          {
            id: "hk-25-2",
            src: placeholder,
            caption: "Teams deep in code late into the night",
          },
          {
            id: "hk-25-3",
            src: placeholder,
            caption: "Mentors giving feedback on student prototypes",
          },
          {
            id: "hk-25-4",
            src: placeholder,
            caption: "The winning teams celebrating on stage",
          },
        ],
      },
      {
        id: "hack-2026",
        title: "National Hackathon Finals",
        year: 2026,
        date: "January 2026",
        location: "National Nodal Center",
        description:
          "CES student teams representing the college at national hackathon grand finals and earning top distinctions.",
        photos: [
          {
            id: "hk-26-1",
            src: placeholder,
            caption: "CES student innovators at the national venue",
          },
          {
            id: "hk-26-2",
            src: placeholder,
            caption: "Final pitch presentation to national evaluators",
          },
          {
            id: "hk-26-3",
            src: placeholder,
            caption: "Receiving the runner-up trophy and certificate",
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 4. COMPETITIONS (Muted Gold / Olive)
  // =========================================================================
  {
    id: "competitions",
    title: "Competitions",
    letter: "C",
    coverPhoto: "/code-bites-5.jpg",
    description:
      "Signature Code Bites challenges, speed programming duels, and algorithmic showdowns.",
    coverColor: "#6b5a26", // Muted gold / olive
    coverColorDark: "#4a3e19",
    textColor: "#fdfbee",
    yearRange: "2024–2026",
    events: [
      {
        id: "comp-2024",
        title: "Code Bites 4.0",
        year: 2024,
        date: "September 2024",
        location: "Central Computer Lab",
        description:
          "Fast-paced competitive programming contest featuring timed test cases, speed rounds, and live penalty points.",
        photos: [
          {
            id: "cp-24-1",
            src: placeholder,
            caption: "Contestants reading the initial problem set",
          },
          {
            id: "cp-24-2",
            src: placeholder,
            caption: "Participants focused during the final sprint minutes",
          },
          {
            id: "cp-24-3",
            src: placeholder,
            caption: "Presenting certificates to the top three rank holders",
          },
        ],
      },
      {
        id: "comp-2025",
        title: "Algorithmic Duels",
        year: 2025,
        date: "December 2025",
        location: "CS Lab 2",
        description:
          "Head-to-head bracket challenge testing quick algorithmic implementation and debugging under pressure.",
        photos: [
          {
            id: "cp-25-1",
            src: placeholder,
            caption: "Duelists competing in the knockout quarterfinals",
          },
          {
            id: "cp-25-2",
            src: placeholder,
            caption: "Live leaderboard projecting instantaneous scores",
          },
          {
            id: "cp-25-3",
            src: placeholder,
            caption: "Final round finalists shaking hands after the contest",
          },
          {
            id: "cp-25-4",
            src: placeholder,
            caption: "Awarding the champion shield to the tournament winner",
          },
        ],
      },
      {
        id: "comp-2026",
        title: "Code Bites 5.0",
        year: 2026,
        date: "May 2026",
        location: "CS Labs 1 & 2",
        description:
          "Our 5th edition coding tournament welcoming top student programmers for a two-day challenge of logical problem-solving.",
        photos: [
          {
            id: "cp-26-1",
            src: placeholder,
            caption: "Briefing session explaining the contest format",
          },
          {
            id: "cp-26-2",
            src: placeholder,
            caption: "Students coding their solutions in the lab",
          },
          {
            id: "cp-26-3",
            src: placeholder,
            caption: "Group celebration of participants and winners",
          },
        ],
      },
    ],
  },
];
