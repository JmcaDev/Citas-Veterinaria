

function Paciente() {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del propietario: {""}
                <span className="font-normal normal-case">José</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Correo electronico: {""}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
                <span className="font-normal normal-case">10 Diciembre 2023</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
                <span className="font-normal normal-case">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias repudiandae dignissimos nihil sapiente! Vel omnis quam neque rerum maxime consequatur esse possimus quo voluptatem aperiam adipisci, dignissimos laboriosam. Necessitatibus, modi.</span>
            </p>
        </div>
    )
}

export default Paciente