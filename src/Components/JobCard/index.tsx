import React from "react";
import Image from "next/image";
import { IJobDetails } from "@/interface";

type Props = {
  data: IJobDetails;
};

const JobCard = ({ data }: Props) => {
  return (
    <div className="border px-4 py-6 rounded-xl lg:px-6">
      <div className="flex gap-x-4">
        <Image
          src={data?.logoUrl}
          alt={data?.companyName}
          width={50}
          height={50}
          className="w-[60px] h-[60px] rounded-md"
        />
        <div className="capitalize flex flex-col gap-y-1">
          <h6 className="text-gray-500 font-semibold text-[14px]">
            {data?.companyName}
          </h6>
          <h6>{data?.jobRole}</h6>
          <h6 className="text-[14px]">{data?.location}</h6>
        </div>
      </div>
      <h6 className="mt-2 text-gray-600 text-[15px]">
        Estimated Salary: ₹{data?.minJdSalary} - {data?.maxJdSalary} LPA ✅
      </h6>
      <h6 className="font-medium text-[17px] mt-4">About Company</h6>
      <h6 className="font-bold text-[17px]">About Us</h6>
      <h6 className="font-normal text-[15px] leading-[30px]">
        {data?.jobDetailsFromCompany}
      </h6>
      <button className="border w-full p-2 bg-[#55eec3] rounded-md mt-3">
        ⚡ Easy Apply
      </button>
      <button className="border w-full p-2 bg-[#4943da] text-white mt-2 rounded-md">
        Unlock referral asks
      </button>
    </div>
  );
};

export default JobCard;
