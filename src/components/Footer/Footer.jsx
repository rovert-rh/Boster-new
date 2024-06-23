import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdLanguage, MdMail, MdGroup, MdBusinessCenter } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[url('/src/assets/Background.png')] text-white mt-0 bg-bottom pt-8 pb-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* FriendStream Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <MdLanguage className="text-2xl mr-2" />
            <h4 className="font-bold">FriendStream</h4>
          </div>
          <ul className="mb-4">
            <li><a href="#" className="hover:underline">México</a></li>
            <li><a href="#" className="hover:underline">Ecuador</a></li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" aria-label="YouTube"><FaYoutube className="text-2xl hover:text-gray-400" /></a>
            <a href="#" aria-label="TikTok"><FaTiktok className="text-2xl hover:text-gray-400" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-2xl hover:text-gray-400" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="text-2xl hover:text-gray-400" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-2xl hover:text-gray-400" /></a>
            <a href="#" aria-label="GitHub"><FaGithub className="text-2xl hover:text-gray-400" /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp className="text-2xl hover:text-gray-400" /></a>
          </div>
        </div>

        {/* Conéctate con FriendStream Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <MdMail className="text-2xl mr-2" />
            <h4 className="font-bold">Conéctate con FriendStream</h4>
          </div>
          <ul>
            <li><a href="#" className="hover:underline">Soporte al cliente</a></li>
            <li><a href="#" className="hover:underline">Política de privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos y condiciones</a></li>
            <li><a href="#" className="hover:underline">Políticas de reembolsos</a></li>
            <li><a href="#" className="hover:underline">Servicios</a></li>
          </ul>
        </div>

        {/* Acerca de la empresa Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <MdGroup className="text-2xl mr-2" />
            <h4 className="font-bold">Acerca de la empresa</h4>
          </div>
          <ul>
            <li><a href="#" className="hover:underline">¿Qué es BosterST?</a></li>
            <li><a href="#" className="hover:underline">El equipo</a></li>
            <li><a href="#" className="hover:underline">Nuestra identidad visual</a></li>
            <li><a href="#" className="hover:underline">Nuestros principios</a></li>
            <li><a href="#" className="hover:underline">Enunciado de misión</a></li>
            <li><a href="#" className="hover:underline">Marca y logotipo</a></li>
          </ul>
        </div>

        {/* Otros proyectos Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <MdBusinessCenter className="text-2xl mr-2" />
            <h4 className="font-bold">Otros proyectos</h4>
          </div>
          <ul className="mb-4">
            <li><a href="#" className="hover:underline">Agencia Dvux</a></li>
          </ul>
          <div className="mt-4">
            <label htmlFor="language-selector" className="block mb-2">Está usando FriendStream en</label>
            <select id="language-selector" className="bg-gray-700 text-white p-2 rounded">
              <option value="es">MXN</option>
              <option value="en">USD</option>

            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
