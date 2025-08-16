import React from 'react'
import  {jobCategories} from "../../constant/landing.text.js"
const Browse = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center '
    style={{ backgroundColor: 'var(--primary-sky1)' }}>
    <div
      className="w-full lg:w-[85%] px-2 sm:px-4 md:px-8 py-6 text-center " >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Browse by Category</h2>
      <p className="text-gray-600 mt-4">
        At eu lobortis pretium tincidunt amet lacus ut aenean.
      </p>
      <div className="w-full max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {jobCategories?.map((category, index) => (
            <div
              key={index}
              className="text-center bg-white flex flex-col items-center justify-center rounded-md w-full h-48 sm:h-56 md:h-60 p-4 space-y-4 shadow hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-sm md:text-base font-semibold">{category.title}</h2>
              <p className="text-xs md:text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-sm">
                {category.jobs} jobs
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Browse;