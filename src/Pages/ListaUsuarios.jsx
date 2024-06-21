import React, { useEffect, useState } from 'react'
import { getUsuarios } from '../Api/axios';
import { DashboardAdmin } from '../components/DashboardAdmin';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState()

  useEffect(() => {
    const getUsers = async() =>{
        try {
            const res = await getUsuarios()
            setUsuarios(res.data)
        } catch (error) {
          console.error(error);
        }
    }
    getUsers()
    
  },[])
    return (
      <DashboardAdmin >
        <article>
          <h2> Lista Usuariarios</h2>
          {
            usuarios?.length ? (
              <ul>
                {usuarios.map((user, i) =>
                  <li key= {i} >{user?.nombre}</li>
                )}
              </ul>
            ): <p> No usuarios</p>
          }
        </article>
      </DashboardAdmin>

    );
  };
  
  export default ListaUsuarios;