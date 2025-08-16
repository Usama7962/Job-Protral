'use client'
import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import HeroSection from '../jobpage/herosection.js'
import ContactInfo from "../contact/ContactInfo.js"
import Map from "../contact/map.js"
import Icon from "../contact/Icon.js"

const contact = () => {
  return (
    <>
    <Navbar/>
    <HeroSection title ="Contact Us" />
    <ContactInfo/>
      <Map />
      <Icon/>
    <Footer/>
    </>
  )
}

export default contact