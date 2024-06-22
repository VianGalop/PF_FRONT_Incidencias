import { useNavigate } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { useMutation } from "@tanstack/react-query";
import { NewIncidencia, todosTiposInc } from "../Api/axios.js";
import { useEffect, useState } from "react";

  const NuevaIncidencia = () => {
    const [tiposInc, setTiposInc] = useState('')

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
        console.log(tiposInc[0]);
      }, [tiposInc]);
    

    const navigate = useNavigate()
    const RegisterMutation = useMutation({
      mutationFn:NewIncidencia ,
      onSuccess: () => navigate('/incidencias/crear'),
      onError: () => alert('Error al registrar la incidencia')
      });

    const NuevaInc = (e) => {
        e.preventDefault()
        let [asunto, descripcion, ubicacion, comentario, tipoInc,imagenes] = e.target
        RegisterMutation.mutate({
          asunto: asunto.value,
          descripcion: descripcion.value,
          ubicacion: ubicacion.value,
          comentario: comentario.value,
          tipoInc:tipoInc.value? tipoInc.value : 2,
          imagenes: imagenes.value
      }); 
  }

  return (
    <Dashboard>
    <div  className="w-full h-full flex flex-col items-center justify-center mb-4 ">
        <div className=" w-[500px] h-full flex flex-col border-[1px] rounded mx-auto mb-0">
          <form  className='m-2' onSubmit={NuevaInc}>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">ASUNTO</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your asunto...' name='asunto' className="w-full focus:outline-none rounded-[12px]"></input>
              </span>            
            </div>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">DESCRIPCION</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your descripcion...' name='descripcion' className="w-full focus:outline-none rounded-[12px]"></input>
              </span>            
            </div>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">UBICACION</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your ubicacion...' name='ubicacion' className="w-full focus:outline-none rounded-[12px]"></input>
              </span>            
            </div>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">COMENTARIO</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="text" placeholder='Enter your comentario...' name='comentario' className="w-full focus:outline-none rounded-[12px]"></input>
              </span>            
            </div>
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">TIPO INCIDENCIA</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <select name='tipoInc' className="w-full focus:outline-none rounded-[12px]">
                    <option placeholder='selecciones' disabled>Seleccione</option>
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
            <div className="flex flex-col py-4 ml-20">
              <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">IMAGENES</label>
              <span className="flex flex-row w-3/4 border-2 h-10 rounded-[12px]">
                <input type="file" name='imagenes' className="w-full focus:outline-none rounded-[12px]"/>
              </span>            
            </div>
            <div className='flex flex-row  py-4 ml-20 pl-10 my-2 mx-auto'>
              <button type="submit"  className="inline-block rounded-md bg-blue-600 px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out">Guardar</button>
            </div>    
          </form>
        </div>
      </div>
    </Dashboard>
  )
}

export default NuevaIncidencia;