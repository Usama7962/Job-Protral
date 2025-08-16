import React from 'react'
import Navbar from '../component/navbar'
import Footer from "../component/footer"
import HeroSection from '../jobpage/herosection'
import Tempus from "../about/tempus.js"
import Howitworks from "../about/Howitworks.js"
import GoodCompany from "../about/GoodCompany.js"
import Faq  from "../about/faq.js"
import TheBest from "../about/TheBest.js"
import NewsandBlog from "../about/NewsandBlog.js"

const about = () => {
  return (
    <>
    <Navbar/>
    <HeroSection title ="About Us"/>
    <Tempus/>
    <Howitworks/>
    <GoodCompany/>
    <Faq/>
    <TheBest/>
    <NewsandBlog/>
    <Footer/>
    </>
  )
}

export default about