import React from "react";

const Create = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
    <div className="w-[85%] px-2 sm:px-4 md:px-10 py-8 flex flex-col justify-center items-center text-white">
      <div className="flex flex-col md:flex-row bg-black  rounded-lg w-full overflow-hidden">
        <div className="space-y-6 md:space-y-8 p-6 md:p-12 w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Create A Better Future For Yourself</h2>
          <p className="text-gray-300 text-sm md:text-base">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque rhoncus
          </p>
          <button className="bg-[#309689] text-white py-2 rounded-md w-full md:w-30 " style={{ cursor: 'pointer' }}>
            Search jobs
          </button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center ">
          <img
            src="/Imgs (1).svg"
            alt="Create Future"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Create;
