import React, { useEffect, useState } from 'react'
import { Dashboard } from '../components/Dashboard';
import { Tablas } from '../components/Tablas';
import { useNavigate } from 'react-router-dom';
import { getIncidencias } from '../Api/axios.js';

const NuevaIncidencia = () => {
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
              navigate('/usuarios')
              console.error('Error al traer los datos:', error);
            }
        };
        fetchIncidencia()      
      },[])

    return (
      <Dashboard >
          <Tablas message={message}  data={info}/>          
      </Dashboard>
    );
  };
  
  export default NuevaIncidencia;