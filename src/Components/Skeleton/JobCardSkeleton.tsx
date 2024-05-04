import React from "react";
import Skeleton from ".";

type Props = {};

const JobCardSkeleton = (props: Props) => {
  return (
    <Skeleton>
      <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:!grid-cols-3 ">
        {[...Array(3)].map((item) => {
          return (
            <div className="border px-4 py-6 rounded-xl lg:px-6" key={item}>
              {/* Company Logo */}
              <div className="flex gap-x-4">
                <div className="w-12 h-12 rounded-md bg-gray-200"></div>{" "}
                {/* Placeholder for logo */}
                <div className="flex flex-col gap-y-1">
                  <div className="w-24 h-4 bg-gray-200"></div>{" "}
                  {/* Placeholder for company name */}
                  <div className="w-24 h-4 bg-gray-200"></div>{" "}
                  {/* Placeholder for job role */}
                  <div className="w-24 h-4 bg-gray-200"></div>{" "}
                  {/* Placeholder for location */}
                </div>
              </div>

              {/* Salary */}
              <div className="mt-2 text-gray-600 text-[15px]">
                Estimated Salary: ₹-- - -- LPA ✅
              </div>

              {/* About Company */}
              <div className="mt-4">
                <div className="font-medium text-[17px] bg-gray-200 h-4 w-40"></div>{" "}
                {/* Placeholder for "About Company" */}
                <div className="font-bold text-[17px] mt-2 bg-gray-200 h-4 w-24"></div>{" "}
                {/* Placeholder for "About Us" */}
                <div className="font-normal text-[15px] leading-[30px] bg-gray-200 h-52 mt-3"></div>{" "}
                {/* Placeholder for job details */}
              </div>

              {/* Buttons */}
              <button className="border w-full p-2 bg-[#55eec3] rounded-md mt-3">
                ⚡ Easy Apply
              </button>
              <button className="border w-full p-2 bg-[#4943da] text-white mt-2 rounded-md">
                Unlock referral asks
              </button>
            </div>
          );
        })}
      </div>
    </Skeleton>
  );
};

export default JobCardSkeleton;
