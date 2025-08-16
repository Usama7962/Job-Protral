import React from "react";
import Searchbyjob from "./SearchbyJob.js";
import Recentjobs from "../Landingpage/recentjobs.js";

const job = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className=" w-full lg:w-[85%] flex flex-col lg:flex-row justify-between  my-8">
        <Searchbyjob />
        <Recentjobs showFilters={true} showToggleButton={false} border="rounded" containerClass="flex justify-center" padding=" py-6" width="w-full lg:w-[70%] "/>
      </div>
    </div>
  );
};

export default job;
