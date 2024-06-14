import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Registro from './Pages/RegistroUsuario'
import MisDatos from './Pages/MisDatos'
/* import EditarUsuario from './Pages/EditarUsuario'
import ListaUsuarios from './Pages/ListaUsuarios'
import DatosDeUsuario from './Pages/DatosDeUsuario'
import NuevaIncidencia from './Pages/NuevaIncidencia'
import EditarIncidencia from './Pages/EditarIncidencia'
import Incidencias from './Pages/Incidencias'
import BuscarIncUsuario from './Pages/BuscarIncUsuario'
import BuscarIncFecha from './Pages/BuscarInciFecha'
import BuscarIncEstado from './Pages/BuscarInciEstado'
import TipoIncidencias from './Pages/TipoIncidencias'
import NuevoTipoInc from './Pages/NuevoTipoInc'
import EditarEstadoInc from './Pages/EditarEstadoInc' */
import Inicio from './Pages/Inicio'
import { ProtectedRoute } from './Pages/ProtectedRoute.jsx'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/usuarios/registro' element={<Registro/>}></Route>        
                {/* user y admin */}
                <Route path='/inicio' element={<Inicio/>}></Route>
                <Route path='/usuarios/misdatos' element={<MisDatos/>}></Route>
                {/* <Route path='/usuarios/actualizar' element={<EditarUsuario/>}></Route>
                <Route path='/situacion/crear' element={<NuevaIncidencia/>}></Route>
                <Route path='/situacion/actualizar/:idInci' element={<EditarIncidencia/>}></Route>
                {/* <Route path='/situacion/borrar/:idInci' element={</>}></Route> */} 
                {/* <Route path='/situacion/buscar/usuario' element={<BuscarIncUsuario/>}></Route>
                <Route path='/situacion/buscar/fecha' element={<BuscarIncFecha/>}></Route>
                <Route path='/situacion/buscar/estado' element={<BuscarIncEstado/>}></Route>
                <Route path='/tipoIncidencias/visualizar' element={<TipoIncidencias/>}></Route>
                <Route path='/visualizar/incidencias' element={<Incidencias/>}></Route> */}
      
                {/* Admin */}
               {/* <Route path='/usuarios/admin/listado' element={<ListaUsuarios/>}>                
                </Route>
                <Route path='/usuarios/admin/usuario' element={<DatosDeUsuario/>}></Route>
                <Route path='/tipoIncidencias/nuevoTipo' element={<NuevoTipoInc/>}></Route>
                <Rout* path='/actualizarEstadoIncidencia/:idInc' element={<EditarEstadoInc/>}></Rout*/}            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
