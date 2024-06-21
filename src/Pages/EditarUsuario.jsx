import  {  useEffect, useState } from 'react'
import { misDatos, updateUser } from '../Api/axios';
import { Dashboard } from '../components/Dashboard';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const EditarUsuario = () => { 
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [message, setMessage] = useState('')

    
    const navigate = useNavigate()

   
      const ActualizarUser = useMutation({
        mutationFn:updateUser,
        onSuccess: (ok) => {
           console.log(ok);
            setMessage('Actualizacion completada')
            navigate('/usuarios')
        },
        onError: (error) => {
          console.log(error);
          setMessage('Verifique los campos')
          alert('Error de actualizacion')
        }
        });

    
      const updatedSubmit = (e) => {
          e.preventDefault()
          ActualizarUser.mutate({
            nombre: name, 
            apellidos: lastname, 
            telefono: phone,
            correo: email, 
            password: pass
        });
      }

    useEffect(() => {
        const fetchEdit = async () => {
          try {
            const infoUser = await misDatos();
            console.log('front', infoUser);
            setName(infoUser.usuario.nombre)
            setLastname(infoUser.usuario.apellidos)
            setPhone(infoUser.usuario.telefono)
            setEmail(infoUser.usuario.correo)
            setPass(infoUser.usuario.password)
          } catch (error) {
            console.error('Error al traer los datos:', error);
          }
        };      

        fetchEdit();
      }, []);

    return (
       <Dashboard >
        <div  className="w-full h-full flex flex-col items-center justify-center mb-4 ">
        <div className=" w-[500px] h-full flex flex-col border-[1px] rounded mx-auto mb-0">
          <form onSubmit={updatedSubmit}>
                <div className="flex flex-col py-4 ml-20">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">NOMBRE</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]"> 
                    <input type="text" placeholder='Enter your name...' name='name' value={name} className="w-full focus:outline-none rounded-[12px]" onChange={e => setName(e.target.value)}>                    
                    </input>
                    </span>            
                </div> 
            
                <div className="flex flex-col py-4 ml-20 ">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">APELLIDOS</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                    <input type="text" placeholder='Enter your name...' name='apellidos' value={lastname} className="w-full focus:outline-none rounded-[12px]"  onChange={e => setLastname(e.target.value)}></input>
                    </span>            
                </div>
                <div className="flex flex-col py-4 ml-20 ">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">TELEFONO</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                    <input type="tel" placeholder='Enter your phone...' name='telefono' value= {phone}   className="w-full focus:outline-none rounded-[12px]"  onChange={e => setPhone(e.target.value)}></input>
                   
                    </span>            
                </div>
                <div className="flex flex-col py-4 ml-20 ">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">EMAIL</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">                    
                    <input type="email" placeholder='Enter your email...' name='correo' value={email}   className="w-full focus:outline-none rounded-[12px]"  onChange={e => setEmail(e.target.value)}></input>
                    </span>            
                </div>
                <div className="flex flex-col py-4 ml-20 ">
                    <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">PASSWORD</label>
                    <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                    <input type="password" placeholder='Enter your new password...' name='password' value={pass} className="w-full focus:outline-none rounded-[12px]"  onChange={e => setPass(e.target.value)}></input>
                    </span>            
                </div>
                <div className='flex flex-row  py-4 ml-20 pl-10 my-2 mx-auto'>
            <button type="submit"  className="inline-block rounded-md bg-orange-600 px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out">Actualizar</button>
            </div>  
            </form>                      
          </div>
      </div>
      </Dashboard >
    )
}
  
  export default EditarUsuario;