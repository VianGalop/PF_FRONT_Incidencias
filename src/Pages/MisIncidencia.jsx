import React, { useEffect, useState } from "react";
import { Dashboard } from "../components/Dashboard.jsx";
import { Tablas } from "../components/Tablas.jsx";
import { Link, useNavigate } from "react-router-dom";
import { getIncidencias } from "../Api/axios.js";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { NavItems } from "../components/NavItems.jsx";

const MisIncidencia = () => {

  const [dataInci, setDataInci] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const linkNueva =() =>{
    navigate("/incidencias/crear");
  }

  useEffect(() => {

    const fetchIncidencia = async () => {
      try {
        const resInci = await getIncidencias();
        setDataInci(resInci)         
        if (resInci.length === 0) {
            setMessage("No se encontro informacion");
        }
        console.log('resInci', resInci)
        console.log('info', dataInci)
      } catch (error) {
        navigate("/usuarios");
        console.error("Error al traer los datos:", error);
      }
    };

   /*   const deleteIncidencia = (idInc)=>{
      try {
        console.log('borrado');
      } catch (error) {
        console.log('error borrado');
      }
     } */

    fetchIncidencia();
  }, [setDataInci]);

  return (
    <Dashboard>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-10 mt-10">Mis Incidencias</h1>        
        <div className="flex py-4 pl-10 my-2 text-center flex-row container mt-10 mb-10">
          <div className='relative w-[500px] mx-auto'>
              {/* <span className='relative md:absolute inset-y-0 left-0 flex items-center  pl-2'>
                  <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button> 
              </span>
              <input type='text' className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block bg-gray-600 text-white' name='search'/>          */}      
          </div>  
          <div className='flex flex-row  py-4 ml-20 pl-10 my-2 mx-auto'>
            <button type="button"  className="inline-block rounded-md bg-green-600 px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out" onClick={ linkNueva }>{<FaPlusCircle className ='inline-block w-4 h-4'/>} Nueva </button>
          </div> 
        </div>
        {message ? (
          <p className="text-red-600 mx-auto text-center mt-10 text-[30px]">
            No hay informacion
          </p>
        ) : (
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
              {dataInci.length > 0 ? dataInci.map((inc, i) => {
                    <tr>
                      <td  className="border px-4 py-2"  key={i}  id={inc.id_inci} > {i}  </td>
                      <td className="border px-4 py-2">{inc.asunto}</td>
                      <td className="border px-4 py-2">{inc.descripcion} </td>
                      <td className="border px-4 py-2">{inc.ubicacion}</td>
                      <td className="border px-4 py-2">{inc.comentario}</td>
                      <td className="border px-4 py-2">{inc.estadp}</td>
                      <td className="border px-4 py-2">{inc.fecha}</td>
                      <td className="border px-4 py-2">
                        <Link to={`/situacion/actualiza/${inc.id_inci}`}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                        >
                          Editar
                        </Link>
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">
                          Revisar
                        </button>
                        {/* <button
                         onClick={() => deleteIncidencia(inc.id_inci)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        >
                          Eliminar
                        </button> */}
                      </td>
                    </tr>;
                  }): (console.log('no se puede iterar'))
              }
            </tbody> 
          </table>
        )}
      </div>
    </Dashboard>
  );
};

export default MisIncidencia;
