import React from 'react'
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Herosection from '../Landingpage/herosection';
import Recentjobs from '../Landingpage/recentjobs'; 
import Browse from './Browse';
import Goodlife from './Goodlife';
import Create from './Create';
import Testimonials from './Testimonials';

const Landingpage = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Recentjobs/>
    <Browse/>
    <Goodlife/>
    <Create/>
    <Testimonials/>
    <Footer/>
    </>
    
  )
}

export default Landingpage