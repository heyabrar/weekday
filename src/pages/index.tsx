import Image from "next/image";
import { Inter } from "next/font/google";
import JobCard from "@/Components/JobCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <JobCard />
    </div>
  );
}
