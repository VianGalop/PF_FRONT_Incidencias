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
    localStorage.setItem('tk_Auth', JSON.stringify(res.data)) //envia token
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
    const token = localStorage.getItem('token') //recupera token
    const res = await axiosInstance.get('/usuarios/misdatos',{ Headers:{'Authorization':`${token}`}
    }); // {nombre, apellidos, telefono, correo, password}
    return res.data
};
