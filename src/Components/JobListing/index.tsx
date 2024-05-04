import React, { useEffect, useState, useRef } from "react";
import { getJobListing } from "@/pages/api";
import { IJobDetails } from "@/interface";
import JobCard from "../JobCard";

const JobListing = () => {
  const [jobsList, setJobList] = useState<IJobDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const offsetRef = useRef<number>(0);

  const handleGetJobs = async () => {
    try {
      setIsLoading(true);
      const requestData = { limit: 12, offset: offsetRef.current };
      const response = await getJobListing({ requestData });
      const newJobsList = response?.data?.jdList || [];
      setJobList((prevJobsList) => [...prevJobsList, ...newJobsList]);
      setHasMore(newJobsList.length > 0);
      offsetRef.current += 12;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetJobs();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          handleGetJobs();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    observer.observe(document.querySelector(".end-of-page") as Element);
    return () => {
      observer.disconnect();
    };
  }, [hasMore, isLoading]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-x-8 gap-y-10">
        {jobsList?.map((item) => {
          return <JobCard key={item?.jdUid} data={item} />;
        })}
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !hasMore && <p>No more jobs to load.</p>}
      <div className="end-of-page" style={{ height: "10px" }}></div>
    </div>
  );
};

export default JobListing;
