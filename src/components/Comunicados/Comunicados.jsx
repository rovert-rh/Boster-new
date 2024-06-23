import React from 'react';
import backgroundImage1 from '../../assets/viewer.jpg';
import backgroundImage2 from '../../assets/streamer.jpg';
import backgroundImage3 from '../../assets/FondoLogin.jpg';

const Comunicados = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-black">
      {/* Título */}
      <h1 className="text-3xl font-bold text-white mb-8">Conectando mundos, creando magia</h1>

      {/* Cards */}
      <div className="flex overflow-x-auto gap-4">
        {/* Card 1 - Inicio de sesión */}
        <section className="relative w-full md:w-1/3 bg-white rounded-lg border-4 border-violet-600 shadow-lg overflow-hidden" style={{ height: '60vh', width: '50vh' }}>
          <img src={backgroundImage1} alt="Viewer" className="w-full h-full object-cover rounded-t-lg" />
          <div className="backdrop-blur-sm bg-black/60 absolute inset-0 flex items-center justify-center">
            <span className="font-semibold text-white text-3xl absolute top-1/2 transform -translate-y-1/2 opacity-100">Patrocinadores
</span>
          </div>
          <div className="absolute bottom-4 inset-x-0 flex items-center justify-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full">
               Quiero Serlo
              </span>
            </button>
          </div>
        </section>

        {/* Card 2 - Registro */}
        <section className="relative w-full md:w-1/3 bg-white rounded-lg border-4 border-violet-600 shadow-lg overflow-hidden " style={{ height: '60vh', width: '50vh' }}>
          <img src={backgroundImage2} alt="Streamer" className="w-full h-full object-cover rounded-t-lg" />
          <div className="backdrop-blur-sm bg-black/60 absolute inset-0 flex items-center justify-center">
            <span className="font-semibold text-white text-4xl absolute top-1/2 transform -translate-y-1/2 opacity-100">Campañas<br/>disponibles</span>
          </div>
          <div className="absolute bottom-4 inset-x-0 flex items-center justify-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full">
              Ver Disponibles
              </span>
            </button>
          </div>
        </section>

        {/* Card 3 - Otra sección */}
        <section className="relative w-full md:w-1/3 bg-white rounded-lg border-4 border-violet-600 shadow-lg overflow-hidden" style={{ height: '60vh', width: '50vh' }}>
          <img src={backgroundImage3} alt="Streamer" className="w-full h-full object-cover rounded-t-lg" />
          <div className="backdrop-blur-sm bg-black/60 absolute inset-0 flex items-center justify-center">
            <span className="font-semibold text-white text-4xl absolute top-1/2 transform -translate-y-1/2 opacity-100">Drops<br/>disponibles</span>
          </div>
          <div className="absolute bottom-4 inset-x-0 flex items-center justify-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full">
                Ver Disponibles
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Comunicados;
