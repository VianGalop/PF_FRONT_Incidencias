import React, { useState } from 'react'
import NavItem from '../components/NavItem';
import profile from '/profile.png'
import { Sidebar } from '../components/Sidebar';
import { Dashboard } from '../components/Dashboard';


const Inicio = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
    return (
      <>
        <div className='flex'>
          <Sidebar sidebarToggle={sidebarToggle}/>
          <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        </div>
        
       {/*  <NavItem  src={profile} text={'MisDatos'} isActive = {false} linkTo='/usuarios/misDatos' ></NavItem>
        <NavItem  src={profile} text={'MisDatos'} isActive = {false} linkTo='/usuarios/misDatos' ></NavItem>
        <NavItem  src={profile} text={'MisDatos'} isActive = {false} linkTo='/usuarios/misDatos' ></NavItem>
        <NavItem  src={profile} text={'MisDatos'} isActive = {false} linkTo='/usuarios/misDatos' ></NavItem>
        <NavItem  src={profile} text={'MisDatos'} isActive = {false} linkTo='/usuarios/misDatos' ></NavItem>
        <NavItem  src={profile} text={'MisDatos'} isActive = {false} linkTo='/usuarios/misDatos' ></NavItem> */}

      </>
    );
  };
  
  export default Inicio;