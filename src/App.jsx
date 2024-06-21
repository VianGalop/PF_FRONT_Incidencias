import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Registro from './Pages/RegistroUsuario'
import MisDatos from './Pages/MisDatos'
import EditarUsuario from './Pages/EditarUsuario'
import NuevaIncidencia from './Pages/NuevaIncidencia'
import EditarIncidencia from './Pages/EditarIncidencia'
import RequiredAuth from './utils/RequiredAuth.jsx'
import InicioUsuario from './Pages/InicioUsuario.jsx'
import { BorrarUsuario } from './Pages/BorrarUsuario.jsx'
import InicioAdmin from './Pages/InicioAdmin.jsx'
import ListaUsuarios from './Pages/ListaUsuarios.jsx'
import Incidencias from './Pages/Incidencias.jsx'
import NuevoTipoInc from './Pages/NuevoTipoInc.jsx'
import TipoIncidencias from './Pages/TipoIncidencias.jsx'
/* import { ProtectedRoute } from './Pages/ProtectedRoute.jsx' */

function App() {
  
  return (
    <>
        <BrowserRouter>   
          <Routes>
              <Route index element={<Login />}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/usuarios/registro' element={<Registro/>}/>        

              <Route element={<RequiredAuth />}>
                <Route path='/usuarios' element={<InicioUsuario />} />
                <Route path='/usuarios/misdatos' element={<MisDatos/>}/>
                <Route path='/usuarios/misdatos/actualizar' element={<EditarUsuario/>}/>
                <Route path='/usuarios/borrar' element={<BorrarUsuario/>}/>
                <Route path='/incidencias' element={<NuevaIncidencia/>}/>
                <Route path='/incidencias/actualizar/:idInci' element={<EditarIncidencia/>}/>
                <Route path='/admin' element={<InicioAdmin />} />
                <Route path='/usuarios/admin/listado' element={<ListaUsuarios/>}/>
                <Route path='/visualizar/incidencias' element={<Incidencias/>}/>     
                <Route path='/tipoIncidencias/nuevoTipo' element={<NuevoTipoInc/>}/>   
                <Route path='/tipoIncidencias/visualizar' element={<TipoIncidencias/>}/>                  
                {/* <Route path='/actualizarEstadoIncidencia/:idInc' element={<EditarEstadoInc/>}/>  */}
              </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
