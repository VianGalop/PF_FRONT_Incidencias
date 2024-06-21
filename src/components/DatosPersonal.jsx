import React from 'react'
import { useNavigate } from 'react-router-dom';

export const DatosPersonal = ({userData}) => {

    if(!userData){
        return <p className='text-blue-600 text-center'>Cargando Datos...</p>
    }

    /* const edith = ()=>{
        const navigate = useNavigate()
        navigate('/usuarios/actualizar')        
    }  */

  return (
    <div  className="w-full h-full flex flex-col items-center justify-center mb-4 ">
        <div className=" w-[500px] h-full flex flex-col border-[1px] rounded mx-auto mb-0">
                <div className="flex flex-col py-4 ml-20">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">NOMBRE</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]"> {userData.nombre? userData.nombre:''} </span>            
                </div>
            
                <div className="flex flex-col py-4 ml-20 ">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">APELLIDOS</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">{userData.apellidos? userData.apellidos:''}
                    </span>            
                </div>
                <div className="flex flex-col py-4 ml-20 ">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">TELEFONO</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                    {userData.telefono? userData.telefono:''}
                    </span>            
                </div>
                <div className="flex flex-col py-4 ml-20 ">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">EMAIL</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                    {userData.correo? userData.correo:''}
                    </span>            
                </div>
                <div className="flex flex-col py-4 ml-20 ">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">PASSWORD</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                    {userData.password? '********':''}
                    </span>            
                </div>        
        </div>
    </div>
  )
}
