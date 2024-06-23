import React from 'react';
import { Link } from 'react-router-dom';
import fotogino from '../../assets/fotogino.jpg';
import fotojanice from '../../assets/fotojanice.jpg';
import fotorobert from '../../assets/fotorobert.jpg';
import fotokevin from '../../assets/fotokevin.jpg';
import logoPhoto from '../../assets/logo_izquierda.png';
import quiensSomosPhoto from'../../assets/quienesSomos.png';
import { IoMdArrowDropright } from "react-icons/io";
import game from '../../assets/game.png';
import LogosGrid from '../../modules/LogosGrid';
import Equipo from '../../modules/Equipo';

const Body = () => {
  return (
    <>
    <section className="bg-center bg-[url('/src/assets/Background.png')] m-0">
    <div className="pt-5">
          <h1 className="font-bold text-center text-6xl text-white">Nuestra Misión</h1>
          <p className="my-6 mx-8 text-center text-white text-2xl">
            Facilitar conexiones significativas a través de streamers, creando experiencias
            compartidas que unen a creadores de contenido de toda LATAM.
          </p>
        </div>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
      <div className="p-6">
      <div className="flex justify-center items-center h-full">
  <img src={logoPhoto} className="max-w-96 max-h-full mx-auto" alt="Logo" />
</div>
      </div>
      <div className="p-6 flex items-center justify-center">
      <div className="text-white">
  <ul className="text-2xl">
    <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
    <li className="flex items-center transition-transform hover:scale-105">
      <IoMdArrowDropright className="mr-2" />
      Promover la amistad
    </li>
    <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
    <li className="flex items-center transition-transform hover:scale-105">
      <IoMdArrowDropright className="mr-2" />
      Colaboración e integración
    </li>
    <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
    <li className="flex items-center transition-transform hover:scale-105">
      <IoMdArrowDropright className="mr-2" />
      Construcción de comunidades sólidas y duraderas
    </li>
    <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
  </ul>
</div>
    </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4 ">
    <div className="p-6 flex items-center justify-center">
      <div className="text-white">
        <h2 className="font-bold text-center text-5xl py-4">¿Quiénes somos?</h2>
        <div className="my-6 text-center">
  <p className="mb-4 text-justify">Somos una startup apasionados en la creación de contenido por medio del streaming. Nos esforzamos por crear experiencias para la creación de contenido entre streamers que desean cumplir su sueño de stremear y encontrar gente alrededor de toda LATAM con sus mismas metas) de juego compartidas que trascienden las fronteras geográficas, permitiendo a jugadores de todo el mundo conectarse, colaborar y formar amistades sólidas.</p>
  <div className="flex justify-center">
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
      Únete al equipo
      </span>
    </button>
  </div>
</div>
      </div>
    </div>
      <div className="p-6">
        <div className="text-center">
          <img src={game} className="mx-auto" alt="Logo" />
        </div>
      </div>
      
    </section>
      
    <section className="text-center text-white">
    <h2 className="text-6xl font-bold mb-10">Partnerships</h2>
    <LogosGrid />
    </section>

    <section id="section-equipo" className="container mx-auto">
      <Equipo />
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4 ">
    <div className="p-6 flex items-center justify-center">
      <div className="text-white">
        <h2 className="font-bold text-center text-5xl py-4">Create your Custom Title for your perfect section</h2>
        <div className="my-6 text-center">
          <p className="mb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est amet a ornare tempus, risus. Integer in nunc tempus nunc, risus, vel vitae ut. Ut sodales fusce purus risus, turpis faucibus. Ipsum adipiscing nunc.</p>
          <div className="flex justify-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                Únete al equipo
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6">
      
    </div>
</section>

    </section>
  </>
  
  )
}

export default Body;
