import { useContext, useEffect, useState } from 'react'
import { Dashboard } from '../components/Dashboard';
import { DatosPersonal } from '../components/DatosPersonal';
import { misDatos } from '../Api/axios.js';
import AuthContext from '../context/authContext';

const MisDatos = () => {
      const [datosUsuario, setDatosUsuario] = useState({});

      useEffect(() => {
        const fetchData = async () => {
          try {
            const infoUser = await misDatos();
            console.log('front', infoUser);
            setDatosUsuario(infoUser.usuario);
            
          } catch (error) {
            console.error('Error al traer los datos:', error);
          }
        };      

        fetchData();
        console.log('set', datosUsuario);
      }, []);

    return (
      <Dashboard >
       <DatosPersonal userData={datosUsuario}/> 
      </Dashboard>        
    );
  };
  
  export default MisDatos;