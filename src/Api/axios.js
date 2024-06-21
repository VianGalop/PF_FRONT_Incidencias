import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/incidencias', // Reemplaza con la URL de tu servidor
  withCredentials:true,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const sendLogin = async (newData) => {
  try {
    const res = await axiosInstance.post('/login', newData); // {email, password}
    return res
   /*  localStorage.setItem('tk_Auth', JSON.stringify(res.data)) //envia token */
  } catch (error) {
    console.error('Error al enviar datos:', error); // Manejo de errores
  }
   
};
  
export const sendRegistro = async (sendData) => {
  try{
    const res = await axiosInstance.post('/usuarios/registro', sendData); // {nombre, apellidos, telefono, correo, password}
    console.log('la res',res);
    return res.data
  }catch(error){
    console.error('Error al enviar datos:', error); // Manejo de errores
    throw error;
  }  
};


export const misDatos = async () => {
  try {
    const token = localStorage.getItem('tk_Auth') //recupera token
    const res = await axiosInstance.get('/usuarios/misdatos',{ headers:{ Authorization:`Bearer ${token}`}}); // {nombre, apellidos, telefono, correo, password}
    console.log("Axios", res.data);
    return res.data
  } catch (error) {
    console.error('Error al traer los datos:', error); // Manejo de errores
    throw error;
  }
    
};

export const updateUser = async (sendData) => {
  try{
    const token = localStorage.getItem('tk_Auth') //recupera token
    const res = await axiosInstance.patch('/usuarios/actualizar', sendData, { headers:{ Authorization:`Bearer ${token}`} } ); 
    console.log('la res',res);
    return res.data
  }catch(error){
    console.error('Error al enviar datos:', error); // Manejo de errores
    return error.data;
  }  
};

export const deleteUser = async () => {
  const tokenD = localStorage.getItem('tk_Auth') //recupera token
  const res = await axiosInstance.delete('/usuarios/borrar',{ headers:{ Authorization: `Bearer ${tokenD}`}});
  console.log('delete', res);
  return res.data
};
/* ------------ */
export const getUsuarios = async () => {
  try {
    const token = localStorage.getItem('tk_Auth') //recupera token
    const res = await axiosInstance.get('/usuarios/admin/listado',{ headers:{ Authorization:`Bearer ${token}`}
    });   
  return res.data
  } catch (error) {
    console.error('Error al enviar datosen getusuarios:', error); // Manejo de errores
    return error.data;
  }
  
};


export const getIncidencias = async () => {
  try {
    const tokInc = localStorage.getItem('tk_Auth') 
    const res = await axiosInstance.get('/situacion/buscar/usuario', {headers:{Authorization:`Bearer ${tokInc}`}});
    console.log('inci', res.data);
    return res.data
  } catch (error) {
    console.error('Error al enviar datos en getIncidencias:', error); // Manejo de errores
  }
 
};

export const sendIncidencia = async (sendData) => {
  try{
    const res = await axiosInstance.post('/situacion/crear', sendData); // {nombre, apellidos, telefono, correo, password}
    console.log('la res',res);
    return res.data
  }catch(error){
    console.error('Error al enviar datos:', error); // Manejo de errores
    throw error;
  }  
};

export const updateInci = async (sendData) => {
  try{
    const token = localStorage.getItem('tk_Auth') //recupera token
    const res = await axiosInstance.patch('/situacion/actualizar/:idInci', sendData, { headers:{ Authorization:`Bearer ${token}`} } ); 
    console.log('la res',res);
    return res.data
  }catch(error){
    console.error('Error al enviar datos:', error); // Manejo de errores
    return error.data;
  }  
};

export const deleteInc = async () => {
  const tokenD = localStorage.getItem('tk_Auth') //recupera token
  const res = await axiosInstance.delete('/situacion/borrar/:idInci',{ headers:{ Authorization: `Bearer ${tokenD}`}});
  console.log('delete', res);
  return res.data
};

export const tipoInci = async (sendData) => {
  try{
    const token = localStorage.getItem('tk_Auth') //recupera token
    const res = await axiosInstance.post('/tipoIncidencias/nuevoTipo', sendData, { headers:{ Authorization:`Bearer ${token}`} }); 
    console.log('la res',res);
    return res.data
  }catch(error){
    console.error('Error al enviar datos:', error); // Manejo de errores
    throw error;
  }  
};

export const getTipoIncidencias = async () => {
  try {
    const tokInc = localStorage.getItem('tk_Auth') 
    const res = await axiosInstance.get('/tipoIncidencias/visualizar', {headers:{Authorization:`Bearer ${tokInc}`}});
    console.log('inci', res.data);
    return res.data
  } catch (error) {
    console.error('Error al enviar datos en getTipoIncidencias:', error); // Manejo de errores
  }
 
};