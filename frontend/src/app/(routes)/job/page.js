import React from 'react'
import Job from '../../jobpage/index'
import ProtectedRoute from "../../component/ProtectedRoute.js";




const page = () => {
  return (
    <>
      <ProtectedRoute>
        <Job />
      </ProtectedRoute>
    </>
  )
}

export default page