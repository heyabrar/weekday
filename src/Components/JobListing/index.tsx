import React, { useEffect, useState } from "react";
import { getJobListing } from "@/pages/api";
import { IJobDetails } from "@/interface";
import JobCard from "../JobCard";

const JobListing = () => {
  const [jobsList, setJobList] = useState<IJobDetails[]>([]);

  const handleGetJobs = async () => {
    try {
      const response = await getJobListing({
        requestData: { limit: 12, offset: 0 },
      });
      setJobList(response?.data?.jdList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetJobs();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-x-8 gap-y-10">
      {jobsList?.map((item) => {
        return <JobCard key={item?.jdUid} data={item} />;
      })}
    </div>
  );
};

export default JobListing;
