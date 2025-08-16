import React from 'react'
import Landingpage from '../../Landingpage/Landingpage.js'
import ProtectedRoute from "../../component/ProtectedRoute.js";


const page = () => {
  return (
    <>
    <ProtectedRoute>
      <Landingpage/>
    </ProtectedRoute>
    </>
  )
}

export default page