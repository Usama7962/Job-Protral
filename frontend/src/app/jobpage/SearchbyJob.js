"use client"; // MUST be the first line!

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { filters } from "../../constant/jobs.text.js";
import RangeSlider from "../component/range-slider.js"
import {allCategories} from "../../constant/jobs.text.js"
const SearchbyJob = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    jobType: [],
    experienceLevel: [],
    datePosted: [],
  });

  const [selectedLocation, setSelectedLocation] = useState(""); // ✅ location state added

  const handleCheckboxChange = (section, value) => {
    const currentValues = selectedFilters[section];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    setSelectedFilters({
      ...selectedFilters,
      [section]: updatedValues,
    });
  };

  return (
    <div
      className="lg:w-85 w-full flex flex-col px-4 lg:px-0  py-6 space-y-2 rounded"
      style={{ backgroundColor: "var(--primary-sky1)" }}
    >
      <div className="mt-2 rounded-md px-4">
        <h3 className="font-medium text-2xl">Search by Job Title</h3>
        <div className="flex mt-4 gap-2 bg-gray-100 rounded-md p-2">
          <IoIosSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Job Title or Company"
            className="rounded-md text-gray-500"
          />
        </div>
      </div>
      {/* ✅ Fixed Select Input */}
      <div className="px-4">
      <h3 className="font-medium text-2xl">Location</h3>
      <div className="flex bg-gray-100 p-2 rounded-md">
        <CiLocationOn size={24} />
        <select
          className="text-gray-500 w-full"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="" disabled>
            Select a location
          </option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
          <option value="houston">Houston</option>
          <option value="london">London</option>
          <option value="karachi">Karachi</option>
        </select>
      </div>
      </div>
      {/* ✅ Dynamic Filter Sections */}
      <div className="p-4 space-y-6">
        {Object.entries(filters).map(([section, items]) => (
          <div key={section}>
            <h3 className="font-medium text-2xl capitalize">
              {section.replace(/([A-Z])/g, " $1")}
            </h3>
            <div className="space-y-2 mt-2">
              {items.map((item) => (
                <div key={item} className="flex justify-between p-1">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters[section].includes(item)}
                      onChange={() => handleCheckboxChange(section, item)}
                      className="w-4 h-4"
                    />
                    <span>{item}</span>
                  </label>
                  <p className="px-2 text-gray-600 bg-white border rounded-lg">
                    10
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="px-4">
      <h3 className="font-medium text-2xl capitalize">Salary</h3>
      {/* ✅ Salary Range */}
<div className="px-4 ">
<RangeSlider defaultValue={[20, 60]} range className="text-[#309689]"  />
</div>
<div className=" flex justify-between mt-2">
  <h2 className="font-medium text-2xl capitalize">Salary: $0 - $99</h2>
  <button className="text-white rounded-md bg-[#309689] p-1 px-4" style={{ cursor: 'pointer' }}>Apply</button>
</div>
<h3 className="font-medium text-2xl capitalize">tags</h3>
 <div className="flex flex-wrap  gap-3">
      {allCategories.map((category, index) => (
        <p
          key={index}
          className="bg-white text-[#309689] p-1 px-3 rounded-lg text-sm"
        >
          {category}
        </p>
      ))}
    </div>
    </div>
    </div>
  );
};

export default SearchbyJob;
