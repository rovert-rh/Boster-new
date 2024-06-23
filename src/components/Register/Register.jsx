import React from 'react';
import backgroundImage1 from '../../assets/FondoLogin.jpg'; 
import backgroundImage2 from '../../assets/image-registration.png';

const Register = () => {
  return (
    <section className="relative flex flex-col md:flex-row h-screen bg-cover bg-center bg-repeat" style={{backgroundImage: `url(${backgroundImage1})`}}>
      {/* Card con la foto */}
      <div className="hidden md:flex md:w-1/2 mt-20">
        <div className="w-3/4 m-auto">
          <img src={backgroundImage2} alt="Foto" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
      {/* Card del formulario de registro */}
      <div className="absolute inset-y-0 right-0 flex justify-center items-center w-full md:w-1/2 mt-40">
        <div className="max-w-lg bg-black/70 rounded-lg p-8 border-2 border-cyan-200 mb-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">¡Bienvenido!</h2>
          <form>
            <div className="mb-6">
              <input type="text" id="name" name="name" placeholder="Nombre" className="border border-cyan-200 rounded-md w-full py-3 px-4 text-lg text-white bg-transparent/50 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-400 hover:border-teal-400" />
            </div>
            <div className="mb-6">
              <input type="text" id="lastname" name="lastname" placeholder="Apellido" className="border border-cyan-200 rounded-md w-full py-3 px-4 text-lg text-white bg-transparent/50 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-400 hover:border-teal-400" />
            </div>
            <div className="mb-6">
              <input type="email" id="email" name="email" placeholder="Correo Electrónico" className="border border-cyan-200 rounded-md w-full py-3 px-4 text-lg text-white bg-transparent/50 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-400 hover:border-teal-400" />
            </div>
            <div className="mb-6">
              <input type="text" id="username" name="username" placeholder="Nombre de Usuario" className="border border-cyan-200 rounded-md w-full py-3 px-4 text-lg text-white bg-transparent/50 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-400 hover:border-teal-400" />
            </div>
            <div className="mb-6">
              <input type="password" id="password" name="password" placeholder="Contraseña" className="border border-cyan-200 rounded-md w-full py-3 px-4 text-lg text-white bg-transparent/50 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-400 hover:border-teal-400" />
            </div>
            <div className="mb-6">
              <label htmlFor="terms" className="text-white text-base mb-1 block">
                <input type="checkbox" id="terms" name="terms" className="mr-2 leading-tight" />
                Acepto los términos y condiciones
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button className="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  Registrarse
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
