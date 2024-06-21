import React, { useState } from 'react'
import { Navbarra } from './Navbarra'
import { SidebarAdmin } from './SidebarAdmin'

export const DashboardAdmin = ({children}) => {
const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <>    
        <div className='w-full block h-full'>
          <Navbarra  sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
          <SidebarAdmin sidebarToggle={sidebarToggle}/>           
        </div>
        <div className='w-full flex flex-col '>
              {children}
        </div>
    </>    
  )
}
