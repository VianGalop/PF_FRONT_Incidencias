import React, { useEffect, useState } from 'react'
import { DashboardAdmin } from '../components/DashboardAdmin';
import { useNavigate } from 'react-router-dom';
import { getTipoIncidencias } from '../Api/axios.js';

const TipoIncidencias = () => {
  const [info, setInfo] = useState(null)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
    useEffect(() =>{
      const fetchIncidencia = async () => {
          try {
            const resInci = await getTipoIncidencias();
            if(!resInci){
              setMessage('No se encontro informacion')
            }else{
              setInfo(resInci) 
            }
                        
          } catch (error) {
            navigate('/admin')
            console.error('Error al traer los datos:', error);
          }
      };
      fetchIncidencia()      
    },[])
    return (
      <DashboardAdmin>
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Categorias Incidencias</h1>
            {message ?
                <p className='text-red-600 mx-auto text-center mt-10 text-[30px]'>No hay informacion</p>:
                <table className="table-auto w-full">
                  <thead>
                <tr className=" bg-gray-600 ">
                    <th className="border px-4 py-2 text-white">No</th>
                    <th className="border px-4 py-2  text-white">Nombre</th>
                </tr>
            </thead>
            <tbody>
                {info ? info.map((tipo, i) =>{
                        <tr>
                            <td className="border px-4 py-2  text-blue-300" key= {i} id={tipo.id_inci}>{i}</td>
                            <td className="border px-4 py-2">{tipo.nombre_tipo_incidencia}</td>
                              
                        </tr>
                    }) : (console.log("sin datos"))
                }              
            </tbody>
        </table>
        }   
    </div>
      </DashboardAdmin>
    );
  };
  
  export default TipoIncidencias;