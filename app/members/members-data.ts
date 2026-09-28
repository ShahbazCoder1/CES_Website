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
  photoPosition?: string; // Optional CSS object-position for head/face alignment
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
        name: "Gautam Raj",
        role: "Senior Associate Member",
        photo: "/Members/gautam-raj.png",
        photoPosition: "center 15%",
        skills: ["C++", "Python", "React", "Git", "System Design"],
        github: "https://github.com/Gautam2938",
        linkedin: "https://www.linkedin.com/in/gautam-raj-/",
      },
      {
        id: "senior-2",
        name: "Sohan Banerjee",
        role: "Senior Associate Member",
        photo: "/Members/sohan-banerjee.png",
        skills: ["Python", "Java", "Django", "MongoDB", "C", "MySQL"],
        github: "https://github.com/Sohan1201",
        linkedin: "https://www.linkedin.com/in/sohan-banerjee-b26124303/",
      },
      {
        id: "senior-3",
        name: "Paushali Karmakar",
        role: "Senior Associate Member",
        photo: "/Members/paushali-karmakar.jpeg",
        skills: ["Go", "Kubernetes", "Cloud Computing", "Linux"],
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/paushali-karmakar-6288a2308/",
      },
      {
        id: "senior-4",
        name: "Amol Kumar",
        role: "Senior Associate Member",
        photo: "/Members/Amol-Kumar.png",
        photoPosition: "center top",
        skills: ["C", "Python", "Java", "PostgreSQL", "TensorFlow"],
        github: "https://github.com/Amol9934",
        linkedin: "https://www.linkedin.com/in/amol-kumar-3522a6330/",
      },
    ],
  },
  {
    id: "associates",
    index: "02",
    title: "Associate Members",
    members: [
      {
        id: "associate-1",
        name: "Kelvin Linus",
        role: "Associate Member",
        photo: "/Members/kelvin-linus.png",
        skills: ["Next.js", "JavaScript", "MERN Stack", "C"],
        github: "https://github.com/KelvinLinus07",
        linkedin: "https://www.linkedin.com/in/kelvin-linus-704578312/",
      },
      {
        id: "associate-2",
        name: "Ayush Sharma",
        role: "Associate Member",
        photo: "/Members/ayush-sharma.jpg",
        skills: ["React", "Python", "React", "LangChain", "PostgreSQL"],
        github: "https://github.com/AYUSH4951",
        linkedin: "https://www.linkedin.com/in/ayush-sharma-4a2849323",
      },
      {
        id: "associate-3",
        name: "Payal Vyas",
        role: "Associate Member",
        photo: "/Members/payal-vyas.jpg",
        photoPosition: "center 20%",
        skills: ["SQL", "Python"],
        github: "https://github.com/Payal05vyas",
        linkedin: "https://www.linkedin.com/in/payal-vyas-900801315",
      },
      {
        id: "associate-4",
        name: "Debashish Sinha",
        role: "Associate Member",
        photo: "/Members/debashish-sinha.jpg",
        skills: ["Golang", "Python", "CI/CD", "Node.js"],
        github: "https://github.com/Debashich",
        linkedin: "https://www.linkedin.com/in/debashich/",
      },
      {
        id: "associate-5",
        name: "Banashree Barman",
        role: "Associate Member",
        photo: "/Members/banashree-barman.jpeg",
        photoPosition: "center 10%",
        skills: ["C"],
        github: "https://github.com/BoniBTech",
        linkedin: "https://www.linkedin.com/in/banashree-barman-2863a0359?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      },
      {
        id: "associate-6",
        name: "Avigyan Guha",
        role: "Associate Member",
        photo: "/Members/avigyan-guha.jpg",
        photoPosition: "center top",
        skills: ["TypeScript", "Tailwind CSS", "React", "Figma"],
        github: "https://github.com/avigyanguha",
        linkedin: "https://www.linkedin.com/in/avigyan-guha",
      },
      {
        id: "associate-7",
        name: "Sandip Basak",
        role: "Associate Member",
        photo: "/Members/sandip-basak.jpg",
        skills: ["C++", "Python", "Open CV", "SQL"],
        github: "https://github.com/Sandip-creator52",
        linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      },
      {
        id: "associate-8",
        name: "Shreyashi Dutta",
        role: "Associate Member",
        photo: "/Members/shreyashi-dutta.jpg",
        skills: ["Java", "MERN Stack"],
        github: "https://github.com/Shreyasi53",
        linkedin: "https://www.linkedin.com/in/shreyasi-duttaaa/",
      },
      {
        id: "associate-9",
        name: "Surajit Roy",
        role: "Associate Member",
        photo: "/Members/surajit-roy.jpg",
        photoPosition: "center 15%",
        skills: ["C", "Java", "HTML/CSS", "JavaScript"],
        github: "https://github.com/Surajit1410",
        linkedin: "https://www.linkedin.com/in/surajit-roy-36697432a",
      },
      {
        id: "associate-10",
        name: "Payel Nunia",
        role: "Associate Member",
        photo: "/Members/payel-nunia.jpg",
        photoPosition: "center 15%",
        skills: ["C", "Python", "SQL"],
        github: "https://github.com/Spayel1502",
        linkedin: "https://www.linkedin.com/in/payel-nunia-b09087326",
      },
      {
        id: "associate-11",
        name: "Md. Shahbaz Hashmi Ansari",
        role: "Associate Member",
        photo: "/Members/md-shahbaz-hashmi-ansari.png",
        photoPosition: "center",
        skills: ["IOT", "Python", "Robotics", "Bhai lang", "Java"],
        github: "https://github.com/ShahbazCoder1",
        linkedin: "https://www.linkedin.com/in/shahbaz-hashmi-ansari",
      },
    ],
  },
  {
    id: "junior-associates",
    index: "03",
    title: "Junior Associate Members",
    members: [
      {
        id: "junior-1",
        name: "Shubham Jha",
        role: "Junior Associate Member",
        photo: "/Members/shubham-jha.jpeg",
        photoPosition: "center 15%",
        skills: ["Python", "JavaScript", "HTML/CSS", "Git"],
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
      {
        id: "junior-2",
        name: "Aditi Das",
        role: "Junior Associate Member",
        photo: "/Members/aditi-das.jpg",
        photoPosition: "center top",
        skills: ["C", "DSA"],
        github: "https://github.com/aditidas15",
        linkedin: "https://www.linkedin.com/in/aditi-das-6743b9379?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
      {
        id: "junior-3",
        name: "Piyasi Das",
        role: "Junior Associate Member",
        photo: "/Members/piyasi-das.jpg",
        photoPosition: "center 30%",
        skills: ["Python", "C", "DSA"],
        github: "https://github.com/piyasi123",
        linkedin: "https://www.linkedin.com/in/piyasi-das-991108380",
      },
      {
        id: "junior-4",
        name: "Shambhavi Singh",
        role: "Junior Associate Member",
        photo: "/Members/shambhavi-singh.jpg",
        photoPosition: "center 15%",
        skills: ["Python", "JavaScript", "HTML/CSS", "DQL"],
        github: "https://github.com/shambhavis382-ux",
        linkedin: "https://www.linkedin.com/in/shambhavi-singh-6130aa381?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
      {
        id: "junior-5",
        name: "Debasmita Modak",
        role: "Junior Associate Member",
        photo: "/Members/debasmita-modak.jpeg",
        photoPosition: "center 35%",
        skills: ["Python", "Java", "MySQL/SQL", "C", "HTML/CSS"],
        github: "https://github.com/meawdak",
        linkedin: "https://www.linkedin.com/in/debasmita-modak28",
      },
      {
        id: "junior-6",
        name: "Devbart Sharma",
        role: "Junior Associate Member",
        photo: "/Members/devbart-sharma.jpeg",
        photoPosition: "center 15%",
        skills: ["Python", "JavaScript", "HTML/CSS", "C/C++"],
        github: "https://github.com/devbartsharma10-svg",
        linkedin: "https://www.linkedin.com/in/devbart-sharma-326804421?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
      {
        id: "junior-7",
        name: "Mohana Sarkar",
        role: "Junior Associate Member",
        photo: "/Members/mohana-sarkar.jpg",
        skills: ["Python-Flask API", "C"],
        github: "https://github.com/MohanaSarkar",
        linkedin: "https://www.linkedin.com/in/mohana-sarkar-b7802337a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
      {
        id: "junior-8",
        name: "Banti Agarwal",
        role: "Junior Associate Member",
        photo: "/Members/Banti-Agarwal.png",
        skills: ["Python", "C", "HTML"],
        github: "https://github.com/bantiagarwal777",
        linkedin: "https://www.linkedin.com/in/banti-agarwal-ab6086385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
      {
        id: "junior-9",
        name: "Ravishankar Jha",
        role: "Junior Associate Member",
        photo: "/Members/ravishankar-jha.jpg",
        photoPosition: "center 15%",
        skills: ["Python", "CSS", "HTML", "C"],
        github: "https://github.com/CODER-XP",
        linkedin: "https://www.linkedin.com/in/ravishankar-jha-32904437a",
      },
    ],
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
