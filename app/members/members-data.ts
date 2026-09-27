/**
 * Members Directory Data Store
 *
 * NOTE: The records below serve strictly as temporary placeholder / seed data
 * structured to match the Figma design layout counts (3 / 11 / 9 / 10).
 * They do NOT represent final production member records.
 *
 * When real member records are finalized, update this file with genuine names,
 * roles, skills, profile photos (placed in /public/members/), and profile links.
 * All UI components consume this data dynamically so no component edits are needed.
 */

export interface Member {
  id: string;
  name: string;
  role: string;
  photo: string | null; // Path relative to public root, e.g. "/members/name.jpg", or null for placeholder
  skills: string[];
  github?: string;
  linkedin?: string;
}

export interface MemberGroup {
  id: string; // URL-safe identifier for aria-controls and panel tracking
  index: string; // Display index, e.g. "01"
  title: string; // Group display title
  members: Member[];
}

export const memberGroups: MemberGroup[] = [
  {
    id: "senior-associates",
    index: "01",
    title: "Senior Associate Members",
    members: [
      {
        id: "senior-1",
        name: "Senior Member 01",
        role: "Senior Associate Member",
        photo: null,
        skills: ["C++", "Python", "React", "Git", "System Design"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "senior-2",
        name: "Senior Member 02",
        role: "Senior Associate Member",
        photo: null,
        skills: ["TypeScript", "Next.js", "Node.js", "Docker"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "senior-3",
        name: "Senior Member 03",
        role: "Senior Associate Member",
        photo: null,
        skills: ["Go", "Kubernetes", "Cloud Computing", "Linux"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    id: "associates",
    index: "02",
    title: "Associate Members",
    members: Array.from({ length: 11 }, (_, i) => ({
      id: `associate-${i + 1}`,
      name: `Associate Member ${String(i + 1).padStart(2, "0")}`,
      role: "Associate Member",
      photo: null,
      skills: ["C++", "Python", "React", "Git"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    })),
  },
  {
    id: "junior-associates",
    index: "03",
    title: "Junior Associate Members",
    members: Array.from({ length: 9 }, (_, i) => ({
      id: `junior-${i + 1}`,
      name: `Junior Member ${String(i + 1).padStart(2, "0")}`,
      role: "Junior Associate Member",
      photo: null,
      skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    })),
  },
  {
    id: "alumni-mentors",
    index: "04",
    title: "Alumni Mentors",
    members: Array.from({ length: 10 }, (_, i) => ({
      id: `mentor-${i + 1}`,
      name: `Alumni Mentor ${String(i + 1).padStart(2, "0")}`,
      role: "Alumni Mentor",
      photo: null,
      skills: ["Software Architecture", "Distributed Systems", "Mentorship"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    })),
  },
];
