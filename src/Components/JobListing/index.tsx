import React, { useEffect, useState, useRef, useMemo } from "react";
import { getJobListing } from "@/pages/api";
import { IAllFilters, IJobDetails } from "@/interface";
import JobCard from "../JobCard";
import JobCardSkeleton from "../Skeleton/JobCardSkeleton";
import Filters from "../Filters";

const JobListing = () => {
  const offsetRef = useRef<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobsList, setJobList] = useState<IJobDetails[]>([]);
  const [allFilters, setAllFilters] = useState<IAllFilters>({
    role: "",
    experience: 0,
    minSalary: 0,
    search: "",
  });

  const handleGetJobs = async () => {
    try {
      setIsLoading(true);
      const requestData = { limit: 12, offset: offsetRef.current };
      const response = await getJobListing({ requestData });
      const newJobsList: IJobDetails[] = response?.data?.jdList || [];
      setJobList((prevJobsList) => [...prevJobsList, ...newJobsList]);
      setHasMore(newJobsList.length > 0);
      offsetRef.current += 12;
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // the filters will be applied only for the data which has been fetched, because filtering is from frontend
  const handleFilter = useMemo(() => {
    const data = jobsList?.filter((item) => {
      let passesAllFilters = true;
      // Iterate over each filter in allFilters
      for (const filterKey in allFilters) {
        const filterValue = allFilters[filterKey as keyof IAllFilters];
        // Checking if the filter has a value
        if (filterValue) {
          // Apply filter condition based on filter key
          if (filterKey === "search" && typeof filterValue === "string") {
            // Checking if the company name contains the search string
            passesAllFilters =
              passesAllFilters &&
              item.companyName
                .toLowerCase()
                .includes(filterValue?.toLowerCase());
          } else if (filterKey === "role") {
            // Checking if the job role matches the filter value
            passesAllFilters = passesAllFilters && item.jobRole === filterValue;
          } else if (filterKey === "experience") {
            // Checking if the minimum experience matches the filter value
            passesAllFilters = passesAllFilters && item.minExp === filterValue;
          }
        }
      }
      return passesAllFilters;
    });

    return data;
  }, [allFilters, jobsList]);

  useEffect(() => {
    handleGetJobs();
  }, []);

  useEffect(() => {
    if (
      !allFilters.role &&
      allFilters.experience === 0 &&
      allFilters.minSalary === 0 &&
      !allFilters.search
    ) {
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
    }
  }, [allFilters, hasMore, isLoading]);

  return (
    <div className="mt-5">
      <Filters allFilters={allFilters} setAllFilters={setAllFilters} />
      <div className="grid gap-x-8 gap-y-10 md:!grid-cols-2 lg:!grid-cols-3 mt-4">
        {handleFilter.length
          ? handleFilter?.map((item, index) => (
              <JobCard key={item?.jdUid + index} data={item} />
            ))
          : "No Jobs Found"}
      </div>

      {isLoading && (
        <div className="mt-4">
          <JobCardSkeleton />
        </div>
      )}
      {!isLoading && !hasMore && <p>No more jobs to load.</p>}
      <div className="end-of-page" style={{ height: "10px" }}></div>
    </div>
  );
};

export default JobListing;
