import React from 'react'
import { tipoInci } from '../Api/axios.js';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

const NuevoTipoInc = () => {
    const navigate = useNavigate()
    const RegisterMutation = useMutation({
      mutationFn:tipoInci,
      onSuccess: () => navigate('/admin'),
      onError: () => alert('Error del registro')
      });

    const tipoSubmit = (e) => {
        e.preventDefault()
        RegisterMutation.mutate({
          nombreTipo: e.target.value, 
      });
  }
    return (
      <div  className="w-full h-full flex flex-col items-center justify-center mb-4 ">
        <div className=" w-[500px] h-full flex flex-col border-[1px] rounded mx-auto mb-0">
          <form  className='m-2' onSubmit={tipoSubmit}>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">NOMBRE TIPO INCIDENCIA</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your name...' name='tipo' className="w-full focus:outline-none rounded-[12px]"></input>
              </span>            
            </div>
            <div className='flex flex-row  py-4 ml-20 pl-10 my-2 mx-auto'>
              <button type="submit"  className="inline-block rounded-md bg-blue-600 px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out">Guardar</button>
          </div>    
          </form>
        </div>
      </div>
    );
  };
  
  export default NuevoTipoInc;