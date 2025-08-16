"use client";
import { CiBookmarkPlus, CiLocationOn } from "react-icons/ci";
import { PiToolbox } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { jobs } from "../../constant/landing.text.js";
import React, { useState } from "react";
import Link from "next/link.js";

const Recentjobs = ({
  className,
  width = "w-full",
  title = "recent jobs available",
  description = "At eu lobortis pretium tincidunt amet lacus ut aenean aliquet",
  showFilters = false,
  showToggleButton = true,
  containerClass = "flex flex-col justify-center items-center",
  padding = "p-4 md:p-6",
  margin = "m-0",
  border= ""

}) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Construction");

  // Get unique categories
  const categories = ["All", ...new Set(jobs.map((job) => job.category))];

  // Filter jobs based on category
  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  const displayedJobs = showAll ? filteredJobs : filteredJobs.slice(0, 2);

  return (
    <div className={`${width} bg-gray-100 ${padding} ${margin} ${border} ${containerClass} ${className || ""}`}>
      <div className="w-full lg:w-[85%]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="w-full">
          {!showFilters ? (
            <>
              <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
              <p className="text-gray-600 text-sm md:text-base">
                {description}
              </p>
            </>
          ) : (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
              <p className="text-sm md:text-base">Showing 6-6 of 10 results</p>

              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setShowAll(true);
                }}
                className="p-2 border border-gray-300 rounded-md"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        {showToggleButton && (
          <div className="flex items-end">
            <button
              className="underline whitespace-nowrap text-[#309689] py-2 px-4 rounded"
              onClick={() => setShowAll(!showAll)}
              style={{ cursor: 'pointer' }}
            >
              {showAll ? "View Less" : "View All"}
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4 md:space-y-6 mt-6 md:mt-10">
        {displayedJobs.map((job) => (
          <div key={job.id} className="rounded-lg shadow-sm bg-white">
            <div>
              <div className="flex justify-between items-center p-2 md:p-3">
                <p className="text-[#309689] text-sm md:text-base">
                  {job.postedTime}
                </p>
                <CiBookmarkPlus className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4">
                <div className="w-10 h-10 md:w-12 md:h-12">
                  <img
                    src={job.logo}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold">{job.title}</h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    {job.company}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 md:p-4 gap-4">
                <div className="grid grid-cols-2 md:flex items-center gap-3 md:gap-5 w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <PiToolbox className="w-5 h-5 md:w-6 md:h-6 text-[#309689]" />
                    <p className="text-gray-600 text-xs md:text-sm">
                      {job.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoTimeOutline className="w-5 h-5 md:w-6 md:h-6 text-[#309689]" />
                    <p className="text-gray-600 text-xs md:text-sm">
                      {job.type}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuWallet className="w-5 h-5 md:w-6 md:h-6 text-[#309689]" />
                    <p className="text-gray-600 text-xs md:text-sm">
                      {job.salary}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiLocationOn className="w-5 h-5 md:w-6 md:h-6 text-[#309689]" />
                    <p className="text-gray-600 text-xs md:text-sm">
                      {job.location}
                    </p>
                  </div>
                </div>
                <Link href={`/job-detail/${job.slug}`}>
                  <div className="w-full md:w-auto">
                    <button className="w-full md:w-auto bg-[#309689] text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-[#309689]/90 transition-colors" style={{ cursor: 'pointer' }}>
                      Job details
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Recentjobs;
