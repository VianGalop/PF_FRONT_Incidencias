import React from 'react'
import { Navbarra } from './Navbarra'

export const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "":"ml-64"} w-full`}>
           <Navbarra  sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}
