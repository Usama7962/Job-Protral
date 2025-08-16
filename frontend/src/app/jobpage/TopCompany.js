import React from "react";
import {Companies} from "../../constant/Topcompany.js"

const TopCompany = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center"
          style={{ backgroundColor: "var(--primary-sky1)" }}
    >
      <div className="w-[85%] text-center space-y-4 ">
      <h2 className="font-bold text-4xl pt-4">Top Company</h2>
      <p className="text-gray-600">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a
        massa elementum
      </p>
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  py-6">
      {Companies?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-white space-y-2 gap-2 p-4 rounded-xl shadow-sm"
        >
          <img src={item.logo} alt={item.name} className="w-12 h-12" />
          <h2 className="text-lg font-medium">{item.name}</h2>
          <p className="text-gray-600 text-center">{item.description}</p>
          <p className="bg-gray-100 text-[#309689] rounded-full px-3 py-1 text-sm">
            {item.openJobs} open jobs
          </p>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default TopCompany;
