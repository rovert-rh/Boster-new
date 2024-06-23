// src/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`flex w-screen justify-between items-center px-1 lg:px-6 fixed top-0 z-10 pt-6 pb-3 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-75' : 'bg-transparent'}`}>
  <div className="pl-4 lg:pl-5 lg:flex lg:basis-4/5">
        <Link to="/">
          <img className="w-3/4 lg:w-2/5" src="/src/assets/logo2.png" alt="" />
        </Link>
      </div>
  <nav className="lg:w-full lg:flex lg:items-center">
    <div className="lg:hidden pr-2 flex justify-end" id="mobile-menu-icon" onClick={toggleMobileMenu}>
          <svg width="54" height="23" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.9375" y="0.963867" width="23.1706" height="2.84239" fill="#41B6A1"></rect>
            <rect x="0.9375" y="5.51172" width="23.1706" height="2.84239" fill="#41B6A1"></rect>
            <rect x="0.9375" y="10.0596" width="23.1706" height="2.84239" fill="#41B6A1"></rect>
          </svg>
        </div>
        <div className={`lg:hidden w-screen h-auto bg-black absolute top-0 left-0 ${isMobileMenuVisible ? '' : 'hidden'}`} id="mobile-menu">
          <div className="lg:hidden pr-2 pt-5 flex justify-end" id="mobile-menu-icon-close" onClick={toggleMobileMenu}>
            <svg width="54" height="23" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.9375" y="0.963867" width="23.1706" height="2.84239" fill="#41B6A1"></rect>
              <rect x="0.9375" y="5.51172" width="23.1706" height="2.84239" fill="#41B6A1"></rect>
              <rect x="0.9375" y="10.0596" width="23.1706" height="2.84239" fill="#41B6A1"></rect>
            </svg>
          </div>
          <ul className="lg:flex lg:items-center lg:space-x-8">
            <li className="flex">
              <a className="text-white mt-5 ml-5 mb-2 flex-grow" href="#inicio">INICIO</a>
            </li>
            <li className="flex">
              <a className="text-white mt-5 ml-5 mb-2 flex-grow" href="#servicios">CONOCENOS</a>
            </li>
            <li className="flex">
              <a className="text-white mt-5 ml-5 mb-2 flex-grow" href="#NUESTRA MISION">PROYECTOS</a>
            </li>
            <li className="flex">
              <a className="text-white mt-5 ml-5 mb-2 flex-grow" href="#EQUIPO">¿QUIÉNES SOMOS?</a>
            </li>
            <li className="flex">
              <a className="text-white mt-5 ml-5 mb-5 flex-grow" href="#contacto">INICIAR SESION</a>
            </li>
          </ul>
        </div>
      
      <div className="lg:flex lg:justify-end lg:text-white max-[1024px]:hidden">
    <ul className="lg:space-x-8 lg:flex lg:items-center lg:cursor-pointer ">
    <li className="lg:hover:border-b-2">
      <a href="/">INICIO</a>
    </li>
    <li className="lg:hover:border-b-2">
      <a href="#servicios">CONOCENOS</a>
    </li>
    <li className="lg:hover:border-b-2">
      <a href="#proyectos">MISION</a>
    </li>
    <li className="lg:hover:border-b-2">
      <a href="#quienes-somos">EQUIPO</a>
    </li>
    <li className="">
    <Link to="/login">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            Iniciar Sesión
          </span>
        </button></Link>
      </li>
  </ul>
</div>
</nav>
    </header>
  );
}

export default Header;
