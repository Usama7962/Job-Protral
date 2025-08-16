import React from 'react';
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import HeroSection from '../jobpage/herosection';
import DetailPage from '../jobsdetails/detals.js';
import JobDescription from "../jobsdetails/JobDescription.js"

const Index = ({job,relatedJobs}) => {
  return (
    <>
      <Navbar />
      <HeroSection title="Jobs Details" />
      <DetailPage job={job}/>
      <JobDescription relatedJobs={relatedJobs} job={job}/>
      <Footer />
    </>
  );
};

export default Index;
