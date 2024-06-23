import React from 'react';
import backgroundImage1 from '../../assets/FondoLogin.jpg'; // Asegúrate de importar la imagen correctamente

const Login = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${backgroundImage1})`}}>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="max-w-xl w-full md:max-w-4xl bg-black/70 rounded-lg p-8 border-2 border-cyan-200 mb-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">¡Bienvenido!</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="text-white text-base mb-1 block">Correo Electrónico :</label>
              <input type="email" id="email" name="email" className="border border-cyan-200 rounded-md w-full py-3 px-4 text-lg text-white bg-transparent/50 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-400 hover:border-teal-400" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-white text-base mb-1 block">Contraseña :</label>
              <input type="password" id="password" name="password" className="border border-cyan-200 bg-transparent/50 rounded-md w-full py-3 px-4 text-lg text-white leading-tight focus:outline-none focus:shadow-outline focus:border-teal-400 hover:border-teal-400" />
              <a href="#" className="text-sm text-gray-400 hover:text-teal-400">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="flex items-center justify-end">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  Iniciar Sesión
                </span>
              </button>
            </div>
          </form>
        </div>
        <h3 className="font-bold text-2xl text-white">Conectando mundo, creando magia</h3>
      </div>
    </section>
  );
}

export default Login;
