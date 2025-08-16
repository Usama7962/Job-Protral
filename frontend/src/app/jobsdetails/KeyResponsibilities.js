import React from "react";
import { IoCheckmark } from "react-icons/io5";
import {jobDetails} from "../../constant/jobdetails";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Relatedjob from "../jobsdetails/relatedjob.js"

const KeyResponsibilities = ({relatedJobs,job}) => {
  return (
    <div className="w-full text-start pl-0 lg:pl-4  space-y-2">
      {/* Job Description */}
      <h3 className="font-medium text-4xl">{jobDetails?.title}</h3>
      <p className="mt-4 whitespace-pre-line text-gray-700">
        {jobDetails?.description}
      </p>

      {/* Key Responsibilities */}
      <h3 className="font-medium text-4xl pt-4">Key Responsibilities</h3>
      <div className="space-y-3 pt-2">
        {jobDetails.keyResponsibilities.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <IoCheckmark size={25} className="text-[#309689] flex-shrink-0" />
            <p className="text-gray-600">{item}</p>
          </div>
        ))}
      </div>

      {/* Professional Skills */}
      <h3 className="font-medium text-4xl pt-4">Professional Skills</h3>
      <div className="space-y-3 pt-2">
        {jobDetails.professionalSkills.map((skill, index) => (
          <div key={index} className="flex items-start gap-3">
            <IoCheckmark size={25} className="text-green-600 flex-shrink-0" />
            <p className="text-gray-600">{skill}</p>
          </div>
        ))}
      </div>

      {/* Tags */}
      <h3 className="font-medium text-4xl pt-4">Tags:</h3>
      <div className="flex flex-wrap gap-2 my-6">
        {jobDetails.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-[#309689] rounded-xl px-4 py-2 text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex  items-center gap-4 text-3xl my-8">
        <h3 className=" font-medium">Share Job:</h3>
        <FaFacebook />
        <FaXTwitter />
        <FaLinkedin />
      </div>
      <Relatedjob relatedJobs={relatedJobs} job={job}/>
    </div>
  );
};

export default KeyResponsibilities;
