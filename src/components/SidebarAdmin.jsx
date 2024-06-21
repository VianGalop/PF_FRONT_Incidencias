import {FaBullhorn, FaHome} from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { NavItems } from './NavItems'

export const SidebarAdmin = ({sidebarToggle}) => {
    // recoger la data
  return (
    <div className={`${sidebarToggle ? "hidden":"block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
        <div className='my-2 mb-4'>
            <h1 className='text-2 text-white font-bold'>Administrador</h1>
        </div>
        <hr/>
        <ul className='mt-5 text-white font-bold'>
          <NavItems url ='/admin' icons={<FaHome className ='inline-block w-5 h-5'/>} titulo ='Home'/> 
          <NavItems url ='/usuarios/admin/listado' icons={<FaUser className ='inline-block w-5 h-5'/>} titulo ='Usuarios'/>  
          <NavItems url ='/visualizar/incidencias' icons={<FaBullhorn className ='inline-block w-5 h-5'/>} titulo ='Incidencias'/>           
        </ul>
    </div>
  )
}
