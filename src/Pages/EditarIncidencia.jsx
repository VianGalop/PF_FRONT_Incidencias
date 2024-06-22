import React, { useEffect, useState } from 'react'
import { UpdatedIncidencia, todosTiposInc } from '../Api/axios.js';
import { Dashboard } from '../components/Dashboard';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const EditarIncidencia = () => {
  const [tiposInc, setTiposInc] = useState('')
  const [asunto, setAsunto] = useState('')
  const [descrip, setDescrip] = useState('')
  const [ubi, setUbi]  = useState('')
  const [comentario, setComentario] = useState('')
  const [unTipo, setUnTipo] = useState('')
  const [img, setImg] = useState('')

    useEffect(()=>{
        const Tipos = async () => {
            try {
              const resInci = await todosTiposInc();
              console.log('Datos recibidos:', resInci);
              if (Array.isArray(resInci)) {
                setTiposInc(resInci);
                console.log('Datos guardados en el estado:', tiposInc);  // Verificar el estado después de guardar
              } else {
                console.error('Error: los datos recibidos no son un array');
              } 
            } catch (error) {
              console.error("Error al traer los datos:", error);
            }
          };
          Tipos()
    },[])

    useEffect(() => {
        console.log('Estado tiposInc actualizado:', tiposInc);  // Verificar el estado cuando se actualiza
      }, [tiposInc]);

      const navigate = useNavigate()
      const RegisterMutation = useMutation({
        mutationFn:UpdatedIncidencia ,
        onSuccess: () => navigate('/incidencias'),
        onError: () => alert('Error al modificar el registro de incidencia')
        });
  
      const Actualizar = (e) => {
          e.preventDefault()
          let [asunto, descripcion, ubicacion, comentario, tipoInc] = e.target
          RegisterMutation.mutate({
            asunto: asunto.value,
            descripcion: descripcion.value,
            ubicacion: ubicacion.value,
            comentario: comentario.value,
            tipoInc:tipoInc.value? tipoInc.value : 2
        }); 

        
    return (
      <Dashboard>
    <div  className="w-full h-full flex flex-col items-center justify-center mb-4 ">
        <div className=" w-[500px] h-full flex flex-col border-[1px] rounded mx-auto mb-0">
          <form  className='m-2' onSubmit={Actualizar}>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">ASUNTO</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your asunto...' name='asunto' value={asunto} className="w-full focus:outline-none rounded-[12px]" onChange={e => setAsunto(e.target.value)}></input>
              </span>            
            </div>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">DESCRIPCION</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your descripcion...' name='descripcion'  value={descrip}className="w-full focus:outline-none rounded-[12px]"  onChange={e => setDescrip(e.target.value)}></input>
              </span>            
            </div>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">UBICACION</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your ubicacion...' name='ubicacion' value={ubi} className="w-full focus:outline-none rounded-[12px]" onChange={e => setUbi(e.target.value)}></input>
              </span>            
            </div>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">COMENTARIO</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your comentario...' name='comentario' value={comentario}className="w-full focus:outline-none rounded-[12px]" onChange={e => setComentario(e.target.value)}></input>
              </span>            
            </div>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">TIPO INCIDENCIA</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <select name='tipoInc' className="w-full focus:outline-none rounded-[12px]" onChange={e => setUnTipo(e.target.value)}>
                    <option placeholder='selecciones' value={unTipo}disabled>Seleccione</option>
                    {tiposInc  ? 
                        (tiposInc.map((valor, i) => {
                            <option key={i} value={valor.id_tipo} > {valor.nombre_tipo_incidencia} </option> 
                        })
                    ):(
                        <option value=" ">No hay datos</option> 
                    )}
                </select>
              </span>            
            </div>
            <div className='flex flex-row  py-4 ml-20 pl-10 my-2 mx-auto'>
              <button type="submit"  className="inline-block rounded-md bg-orange-600 px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out">Actualiziar</button>
            </div>    
          </form>
        </div>
      </div>
    </Dashboard>
    );
  };
}
  export default EditarIncidencia;