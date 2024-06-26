import React, { useState } from 'react'
import { Navbarra } from './Navbarra'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = ({children}) => {
const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <>    
        <div className='w-full block h-full'>
          <Navbarra  sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
          <Sidebar sidebarToggle={sidebarToggle}/>           
        </div>
        <div className='w-full flex flex-col '>
              {children}
        </div>
    </>    
  )
}
