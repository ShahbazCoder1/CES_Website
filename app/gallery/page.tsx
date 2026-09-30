import type { Metadata } from "next";
import GalleryContainer from "@/components/gallery/GalleryContainer";

export const metadata: Metadata = {
  title: "Gallery | Computer Engineers' Society",
  description:
    "Explore the living archival chronicle of the Computer Engineers' Society at Siliguri Institute of Technology — browse physical ledgers of hackathons, workshops, competitions, and community events across academic years.",
};

export default function GalleryPage() {
  return <GalleryContainer />;
}
