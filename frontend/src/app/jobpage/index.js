import React from 'react'
import Herosection from './herosection'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Job from './job'
import TopCompany from './TopCompany'
 

const index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Job/>
        <TopCompany/>
        <Footer/>
    </div>
  )
}

export default index