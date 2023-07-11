// Usar snippet rfce

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

function Formulario({pacientes,setPacientes, paciente, setPaciente}) {

  const generarId = () =>{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return fecha + random
  }

  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)
      return
    }

    setError(false)

    //Objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
    }

    if(paciente.id){
      //Editando un registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( (pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    //Limpiando form
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }

  

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre de la mascota</label>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre del propietario</label>
          <input
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Correo Electronico</label>
          <input
            type="email"
            placeholder="Correo electronico del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Fecha de Alta</label>
          <input
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">sintomas de la mascota</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Escribe los sintomas de la mascota"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:cursor-pointer rounded hover:bg-indigo-800 transition-colors"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  )
}

Formulario.propTypes = {
  paciente : PropTypes.object,
  pacientes : PropTypes.array,
  setPacientes: PropTypes.func,
  setPaciente: PropTypes.func
}

export default Formulario