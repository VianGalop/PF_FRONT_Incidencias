import React, { useEffect } from 'react'
import back from '../assets/back.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { sendRegistro } from '../Api/axios.js';

const Registro = () => {
      const navigate = useNavigate()
      const RegisterMutation = useMutation({
        mutationFn:sendRegistro,
        onSuccess: () => navigate('/login'),
        onError: () => alert('Error de registro')
        });

      const handleSubmit = (e) => {
          e.preventDefault()
          let [nombre, apellidos, telefono, correo, password] = e.target;
          RegisterMutation.mutate({
            nombre: nombre.value, 
            apellidos: apellidos.value, 
            telefono: telefono.value,
            correo: correo.value, 
            password: password.value
        });
      }
     /*  useEffect(()=>{
        if(!isLogged){
          navigate('/login')
        }
      },[isLogged])
 */
    return (
      <>
         <div className="w-full flex flex-col items-around justify-center mb-4">
        <div className="w-[520px] h-full flex flex-row mx-auto mb-0">    
          <Link to="/login" className=" flex text-blue-600 hover:text-blue-800">  <img src={back} className="w-5"/> Regresar</Link>
        </div>       
      </div>
      <div  className="w-full h-full flex flex-col items-center justify-center mb-4 ">
        <div className=" w-[500px] h-full flex flex-col border-[1px] rounded mx-auto mb-0">
          <div className="flex flex-row mt-6">
            <div className="mt-2 mb-1 ml-10 w-full h-[80px]">
              <label className="text-2xl text-[#000000] ">Registro para nuevos usuarios</label><br></br>
              <p className="text-sm text-[#828282]">Llene todos los campos para registrase y empezar a usar la APP</p>
            </div>                
          </div>
       <form  className='m-2' onSubmit={handleSubmit}>
          <div className="flex flex-col py-4 ml-20">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">NOMBRE</label>
            <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
              <input type="text" placeholder='Enter your name...' name='nombre' className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>
          <div className="flex flex-col py-4 ml-20 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">APELLIDOS</label>
            <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
              <input type="text" placeholder='Enter your name...' name='apellidos' className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>
          <div className="flex flex-col py-4 ml-20 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">TELEFONO</label>
            <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
              <input type="tel" placeholder='Enter your phone...' name='telefono' className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>
          <div className="flex flex-col py-4 ml-20 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">EMAIL</label>
            <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
              <input type="email" placeholder='Enter your email...' name='correo' className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>
          <div className="flex flex-col py-4 ml-20 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">PASSWORD</label>
            <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
              <input type="password" placeholder='Enter your new password...' name='password' className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>
          <div className='flex flex-row  py-4 ml-20 pl-10 my-2 mx-auto'>
            <button type="submit"  className="inline-block rounded-md bg-blue-600 px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out">Registrase</button>
          </div>            
        </form>
        </div>
        <div className='flex flex-row  w-[520px] mx-auto text-center justify-between'>
          <p className='text-[14px] text-[#828282] mt-1 mb-4'>created by Vianey Galicia</p>
          <p className='text-[14px] text-[#828282] mt-1 mb-4'>Alumnos Funval</p>
        </div>
        
      </div>   
      </>
    );
  };
  
  export default Registro;