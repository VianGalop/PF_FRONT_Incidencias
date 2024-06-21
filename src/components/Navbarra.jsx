import { useContext } from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'
import Login from '../Pages/Login'
import AuthContext from '../context/authContext.jsx'
import { useNavigate } from 'react-router-dom'

export const Navbarra = ({sidebarToggle, setSidebarToggle}) => {

    const logout = () => {
        const {setAuth} = useContext(AuthContext)
        const navigate = useNavigate();
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        localStorage.removeItem('tk_Auth')
        navigate('/login');
    }
  return (
   <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
        <div className='flex items-center text-xl'>
            <FaBars className='text-white me-4 cursor-pointer' onClick={ () => setSidebarToggle(!sidebarToggle)}/>
            <span className='text-white font-semibold'>Residencial Mexicana</span>
        </div>
        <div className='flex items-center gap-x-5'>
            <div className='relative md:w-65'>
                <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                    <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button> 
                </span>
                <input type='text' className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block'/>               
            </div>
            <div className='text-white'><FaBell className='w-6 h-6'/></div>
            <div className='relative'>
                <button className='text-white group'>
                    <FaUserCircle className='w-6 h-6 mt-1'/>
                    <div className='border-2 z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                        <ul className='py-2 text-sm text-gray-950'>
                        <button onClick={logout}>LogOut</button>
                        </ul>
                    </div>
                </button>
            </div>
        </div>
   </nav>
  )
}
