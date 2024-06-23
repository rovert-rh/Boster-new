import { useState } from 'react';
import backgroundImage1 from '../../assets/viewer.jpg';
import backgroundImage2 from '../../assets/streamer.jpg';
import { Link } from 'react-router-dom';

export const Views_log = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-black">
      {/* Sección 1 - Inicio de sesión */}
      <section className={`relative w-full md:w-1/3 mx-4 mb-4 md:mb-0 bg-white rounded-lg border-4 border-violet-600 shadow-lg overflow-hidden transition-all duration-300 ${hovered1 ? 'opacity-90 scale-105' : 'opacity-100 scale-100'}`} style={{ height: '75vh' }} onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)}>
        <img src={backgroundImage1} alt="Viewer" className="w-full h-full object-cover rounded-t-lg" />
        <div className={`backdrop-blur-sm bg-black/60 absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered1 ? 'opacity-0' : 'opacity-100'}`}>
          <span className=" font-semibold text-white text-4xl absolute top-1/2 transform -translate-y-1/2 opacity-100">Viewer</span>
        </div>
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered1 ? 'opacity-100' : 'opacity-0'}`}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              Registro
            </span>
          </button>
        </div>
      </section>

      {/* Sección 2 - Registro */}
      <section className={`relative w-full md:w-1/3 mx-4 bg-white rounded-lg border-4 border-violet-600 shadow-lg overflow-hidden transition-all duration-300 ${hovered2 ? 'opacity-90 scale-105' : 'opacity-100 scale-100'}`} style={{ height: '75vh' }} onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}>
        <img src={backgroundImage2} alt="Streamer" className="w-full h-full object-cover rounded-t-lg" />
        <div className={`backdrop-blur-sm bg-black/60 absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered2 ? 'opacity-0' : 'opacity-100'}`}>
          <span className="font-semibold text-white text-4xl absolute top-1/2 transform -translate-y-1/2 opacity-100">Streamer</span>
        </div>
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered2 ? 'opacity-100' : 'opacity-0'}`}>
         <Link to="/register">
         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              Registro
            </span>
          </button>
         </Link>
          
        </div>
      </section>
    </div>
  );
};

export default Views_log;
