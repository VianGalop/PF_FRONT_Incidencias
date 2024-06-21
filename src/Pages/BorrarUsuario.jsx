import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import { deleteUser } from '../Api/axios';

export const BorrarUsuario = () => {
  const navigate = useNavigate()
  useEffect(() =>{
    const fetchEliminar = async () => {
        try {
          const eliminar = await deleteUser();
          if(eliminar){
            alert('elimino su cuenta')
            navigate('/login')
          }
        } catch (error) {
            navigate('/usuarios')
          console.error('Error al traer los datos:', error);
        }
    };
    fetchEliminar()      
  },[])

  return (
    <Dashboard >

    </Dashboard>
    )
}
