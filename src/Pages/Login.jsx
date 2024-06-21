import React, { useContext, useState } from 'react'
import {useMutation} from '@tanstack/react-query'
import google from '/img/google.png'
import facebook from '/img/facebook.png'
import twitter from '/img/twitter.png'
import github from '/img/github.png'
import gmail from '../assets/email.svg'
import pass from '../assets/pass.svg'
import { Link, useNavigate} from 'react-router-dom'
/* import { UserContext, } from '../context/userContext.jsx' */
import { sendLogin } from '../Api/axios.js'
import AuthContext from '../context/authContext.jsx'

const Login = () => {
  const {setAuth} = useContext(AuthContext)
  const [message, setMessage] = useState('')
 /*  const { setIsAuthenticated } = useContext(UserContext) */
  const navigate = useNavigate()
  const loginMutation = useMutation({
    mutationFn:sendLogin,
    onSuccess: (res) => {
      if(res.data){        
        const tk = res.data.datosRes.tk
        const rol = res.data.datosRes.data
        localStorage.setItem('tk_Auth', tk)        
         if(rol === 1){ //liga de admin
            navigate('/admin')
          }
          if(rol  === 2){
            navigate('/usuarios') //liga de usuario
          }
          setAuth({tk, rol})
        }
        setMessage('')
    },
    onError: () => {
      setMessage('No autorizado, verifica tus datos')
    }
    });


    const handleSubmit = (e) => {
        e.preventDefault()
        let [email, password] = e.target;
        loginMutation.mutate({
            correo: email.value, 
            password: password.value
        });
    }
        
    return (
        <div className="container w-full h-screen flex flex-col items-center justify-center ">
        <div className=" w-[400px] h-[500px] flex flex-col border-[3px] rounded-3xl mx-auto ">
          <div className='flex-col pt-8 pb-8 px-8 gap-2'>
            <div className='m-2'>
              <h3 className='text-[18px] font-bold font-sans mb-4 mt-4 text-[#333333]'>Bienvenidos residentes</h3>
              <p className='text-sm mt-2 mb-2 font-sans text-[#333333]'>Inicia sesion y reportar las incidencias que encuentres en la residencia.</p><br></br>
            </div>
            <p className='text-red-600 text-center text-[15px]'>{message? message: ''}</p>
              <form  className='m-2' onSubmit={handleSubmit}>
                <div className=' flex flex-row border-2 h-10 rounded-md mb-4 mt-4'>
                  <img className='w-4 ml-2 mr-2' src={gmail}/>              
                  <input type='email' name='email' placeholder="Email" className='w-full focus:outline-none' required/>
                </div>
                <div className=' flex flex-row border-2 h-10 rounded-md'>
                  <img className='w-4 ml-2 mr-2' src={pass}/>              
                  <input type='password' name='password' placeholder="Password" className='w-full focus:outline-none' required/>
                </div>
                <button type="submit" className='mb-4 mt-4 block w-full rounded-md bg-blue-600 px-6 pb-2 pt-2.5 text-sm font-sans leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out'>Inicia Sesion Ahora</button>
              </form>
              
            <p className='flex-row mx-auto w-full text-center text-[14px] text-[#828282] mt-4 mb-4'>Proximamente iniciaras sesion con tus redes favoritas</p>
            <div className='m-2 flex flex-row gap-5 mx-auto items-center justify-center mt-4 mb-4'>
              <img src={google}/>
              <img src={facebook}/>
              <img src={twitter}/>
              <img src={github}/>            
            </div>
            <p className='flex-row mx-auto w-full text-center text-[14px] text-[#828282] mt-4 mb-4'>¿Aun no eres parte de la comunidad?
            <Link to="/usuarios/registro" className="text-blue-500">  Registrate</Link>
            </p>
          </div>
        </div>
        <div className='flex flex-row  w-[360px] mx-auto text-center justify-between'>
          <p className='text-[14px] text-[#828282] mt-1 mb-4'>created by Vianey Galicia</p>
          <p className='text-[14px] text-[#828282] mt-1 mb-4'>Funval</p>
        </div>
       
      </div>
    );
  };
  
  export default Login;