import React from "react";
import { CiBookmarkPlus, CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { PiToolbox } from "react-icons/pi";
import Link from "next/link.js";


const RelatedJobs = ({ relatedJobs }) => {
  return (
    <div className="w-full ">
        <h3 className="font-bold text-4xl mt-4">Related Jobs</h3>
        <p className="text-gray-600 mt-3">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
      {relatedJobs.map((job) => (
        <div key={job.slug} className=" rounded-lg shadow m-4">
          <div className="flex justify-between items-center p-2 md:p-3">
            <p className="text-[#309689] text-sm md:text-base">{job.postedTime}</p>
            <CiBookmarkPlus className="w-5 h-5 md:w-6 md:h-6" />
          </div>

          <div className="flex items-center gap-3 md:gap-4 p-3 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <img src={job.logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold">{job.title}</h2>
              <p className="text-gray-600 text-sm md:text-base">{job.company}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 md:p-4 gap-4">
            <div className="grid grid-cols-2 md:flex items-center gap-3 md:gap-5 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <PiToolbox className="w-5 h-5 md:w-6 md:h-6 text-[#309689]" />
                <p className="text-gray-600 text-xs md:text-sm">{job.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <IoTimeOutline className="w-5 h-5 md:w-6 md:h-6 text-[#309689]" />
                <p className="text-gray-600 text-xs md:text-sm">{job.type}</p>
              </div>
              <div className="flex items-center gap-2">
                <LuWallet className="w-5 h-5 md:w-6 md:h-6 text-[#309689]" />
                <p className="text-gray-600 text-xs md:text-sm">{job.salary}</p>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="w-5 h-5 md:w-6 md:h-6 text-[#309689]" />
                <p className="text-gray-600 text-xs md:text-sm">{job.location}</p>
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
      ))}
      
    </div>
  );
};
export default RelatedJobs;

