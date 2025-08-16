import React from 'react'
import KeyResponsibilities from "./KeyResponsibilities"
import JobOverview from "./JobOverview"


const JobDescription = ({relatedJobs,job}) => {
  return (
    <>
    <div className="w-full flex flex-col justify-center items-center">  
    <div className=' w-[90%] flex flex-col-reverse lg:flex-row lg:mx-6'>
    <KeyResponsibilities relatedJobs={relatedJobs} job={job}/>
    <JobOverview/>
    </div>
    </div>
    </>
  )
}

export default JobDescription