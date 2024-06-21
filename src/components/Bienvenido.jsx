import React, { useContext } from 'react'
import AuthContext from '../context/authContext';

export const Bienvenido = () => {
  const { userData} = useContext(AuthContext); 
  return (
    <div className="flex items-center justify-center min-h-screen pb-48 pr-12">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 transition-transform hover:scale-105">
            <h1 className="text-2xl font-semibold">
                {userData && <span className="text-customBlueBoton">Bienvenido(a) {userData? userData.nombre : 'usuario'}</span>} 
            </h1>
        </div>
    </div>
  )
}
