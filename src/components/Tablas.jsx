import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Tablas = ({message, data}) => {
    
    const [dataInc, setDataInc] = useState(null)

    useEffect(() =>{
        if(data){
            setDataInc(data)
            console.log('useEffect', dataInc);
        }
       
    },[])
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Mis Incidencias</h1>
        {message ?
            <p className='text-red-600 mx-auto text-center mt-10 text-[30px]'>No hay informacion</p>:
        <table className="table-auto w-full">
            <thead>
                <tr className=" bg-gray-600 ">
                    <th className="border px-4 py-2 text-white">No</th>
                    <th className="border px-4 py-2  text-white">Asunto</th>
                    <th className="border px-4 py-2  text-white">Descripcion</th>
                    <th className="border px-4 py-2  text-white">Ubicacion</th>
                    <th className="border px-4 py-2  text-white">Comentario</th>
                    <th className="border px-4 py-2  text-white">Estado</th>
                    <th className="border px-4 py-2  text-white">Fecha</th>
                    <th className="border px-4 py-2  text-white">Accion</th>
                </tr>
            </thead>
            <tbody>
                {dataInc ? dataInc.map((inc, i) =>{
                        <tr>
                            <td className="border px-4 py-2  text-blue-300" key= {i} id={inc.id_inci}>{i}</td>
                            <td className="border px-4 py-2">{inc.asunto}</td>
                            <td className="border px-4 py-2">{inc.descripcion} </td>
                            <td className="border px-4 py-2">{inc.ubicacion}</td>
                            <td className="border px-4 py-2">{inc.comentario}</td>
                            <td className="border px-4 py-2">{inc.estadp}</td>
                            <td className="border px-4 py-2">{inc.fecha}</td>
                            <td className="border px-4 py-2">
                                <Link
                                /*  to={`/situacion/actualiza/${incidencia.uuid}`} */
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                                >
                                    Editar
                                </Link>
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                    >
                                        Revisar
                                    </button>
                                <button
                                /*  onClick={() => deleteIncidencia(incidencia.uuid)} */
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    }) : (console.log("sin datos"))
                }              
            </tbody>
        </table>
        }   
    </div>
  )
}
