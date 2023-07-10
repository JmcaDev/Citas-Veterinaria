// Usar snippet rfce

import { useState, useEffect } from "react";

function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
        <p className="text-lg mt-5 text-center mb-10"> 
          Añade Pacientes y {""} 
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre de la mascota</label>
            <input
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="nombre"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre del propietario</label>
            <input
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="propietario"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              placeholder="Correo electronico del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="email"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Fecha de Alta</label>
            <input
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="alta"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">sintomas de la mascota</label>
            <textarea 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Escribe los sintomas de la mascota"
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:cursor-pointer rounded"
            value="Agregar paciente"
          />
        </form>
    </div>
  )
}

export default Formulario