import React from 'react'
import {Outlet} from "react-router-dom"
const Success = () => {
  return (
    <div>Success
      <Outlet/>
    </div>
  )
}

export default Success