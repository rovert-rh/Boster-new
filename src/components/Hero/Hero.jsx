import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import imagenDerecha from "../../assets/IA.png";

const Hero = () => {

    return (
        <div className="bg-center h-screen relative">
            {/* Contenedor principal */}
            <div className="bg-cover bg-no-repeat lg:bg-transparent z-1 top-0 left-0 w-screen h-full flex items-center justify-center md:justify-between bg-[url('../src/assets/home.png')] bg-center">
                {/* Fondo con desenfoque */}
                <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm backdrop-filter bg-blur-md">
                    {/* Contenido del fondo */}
                    <div className="bg-contain bg-no-repeat lg:bg-transparent w-screen h-full flex items-center justify-center md:justify-between">
                        <div className='grid-home-inicio text-center mx-auto md:text-center'>
                            <div className="home-inicio text-white">
                                <p className="text-xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">
                                    Conectando mundos,<br /> creando magia.
                                </p>
                                <br />
                                <p className="text-xl font-extralight">Donde las pasiones se convierten en profesiones.</p>
                                <Link to="/viewRegister">
                                <button className=" mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
          Comienza el viaje!!
          </span>
        </button></Link>
                            </div>
                        </div>
                        <img src={imagenDerecha} alt="Imagen Derecha" className="hidden mx-auto md:block w-4/12 rounded-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
