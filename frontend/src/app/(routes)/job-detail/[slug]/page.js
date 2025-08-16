import React from "react";
import { jobs } from "../../../../constant/landing.text";
import Index from '../../../jobsdetails'



export default function JobDetailPage({ params }) {
  const { slug } = params;
  const job = jobs.find((job) => job.slug === slug);

   const relatedJobs = jobs.filter(
    (j) => j.category === job.category && j.slug !== slug
  );
     console.log("Slug from URL:", slug);
console.log("Found job:", job);
console.log("Related jobs:", relatedJobs);

  return (

  
    <div className="">
      
<Index job={job} relatedJobs={relatedJobs} />
    </div>
  );
}
