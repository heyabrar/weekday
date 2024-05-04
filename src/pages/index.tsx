import Image from "next/image";
import JobListing from "@/Components/JobListing";

export default function Home() {
  return (
    <div className="w-[95%] lg:w-[85%] mx-auto">
      <JobListing />
    </div>
  );
}
