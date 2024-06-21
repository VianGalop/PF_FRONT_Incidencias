import React, { useEffect, useState } from 'react'
import { DashboardAdmin } from '../components/DashboardAdmin';
import { Tablas } from '../components/Tablas';
import { useNavigate } from 'react-router-dom';
import { getIncidencias } from '../Api/axios';

const Incidencias = () => {
  const [info, setInfo] = useState(null)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
      useEffect(() =>{
        const fetchIncidencia = async () => {
            try {
              const resInci = await getIncidencias();
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
      <DashboardAdmin >
        <Tablas  message={message} data={info}/>
      </DashboardAdmin>
     
    );
  };
  
  export default Incidencias;