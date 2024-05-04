import React from "react";
import { IAllFilters } from "@/interface";

type Props = {
  allFilters: IAllFilters;
  setAllFilters: React.Dispatch<React.SetStateAction<IAllFilters>>;
};

const Filters = ({ allFilters, setAllFilters }: Props) => {
  return (
    <div>
      <select
        className="p-2 focus:outline-none"
        value={allFilters?.role}
        onChange={(e) => setAllFilters({ ...allFilters, role: e.target.value })}
      >
        <option value="">Role</option>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="ios">IOS</option>
        <option value="android">Android</option>
        <option value="tech lead">Tech Lead</option>
      </select>

      <select
        className="p-2 focus:outline-none"
        value={allFilters?.experience}
        onChange={(e) =>
          setAllFilters({ ...allFilters, experience: Number(e.target.value) })
        }
      >
        <option value="">Experience</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input
        type="text"
        placeholder="Search Company Name"
        value={allFilters?.search}
        onChange={(e) =>
          setAllFilters({ ...allFilters, search: e.target.value })
        }
        className="ml-4 focus:outline-none"
      />

      <button
        className="ml-4 text-[14px] p-1 rounded-lg"
        onClick={() =>
          setAllFilters({
            ...allFilters,
            experience: 0,
            minSalary: 0,
            role: "",
            search: "",
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
