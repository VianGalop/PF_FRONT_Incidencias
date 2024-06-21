import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItems = ({ url, icons, titulo}) => {
  return (
    <>
    <li className='mt-4 rounded hover:shadow hover:bg-blue-500 py-2'>
      <NavLink to={url} className='px-3'>
        {icons}
        <span className=' ml-4'>{titulo} </span>
      </NavLink>
    </li>  
    
    </>
    
  )
}
