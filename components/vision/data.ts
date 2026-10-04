export interface LeaderMessage {
  id: string;
  role: string;
  name: string;
  designation: string;
  videoId?: string;
  photo?: string;
}

export const visionContent = {
  kicker: "Our Vision",
  headline: "Inspiring engineers who build with purpose, creativity, and code.",
};

export const leaderMessages: LeaderMessage[] = [
  {
    id: "principal",
    role: "Principal",
    name: "Dr. Joydeep Dutta",
    designation: "Principal",
    videoId: "p33gWUCOvV4",
  },
  {
    id: "hod",
    role: "Head of Department",
    name: "Dr. Anupam Mukherjee",
    designation: "Professor & Head, Department of Computer Science & Engineering",
    videoId: "bpLzStjr4TU",
  },
];
