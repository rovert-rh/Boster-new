import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo1.png';
import logo3 from '../assets/logo1.png';
import logo4 from '../assets/logo1.png';
import logo5 from '../assets/logo1.png';
import logo6 from '../assets/logo1.png';
import logo7 from '../assets/logo1.png';
import logo8 from '../assets/logo1.png';
import logo9 from '../assets/logo1.png';

const LogosGrid = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {/* Mapea el arreglo de imágenes */}
      {logos.map((logo, index) => (
        <div key={index} className="max-w-xs relative mx-10 transform transition-transform hover:scale-110">
          {/* Imagen */}
          <img src={logo} alt={`Logo ${index + 1}`} className="object-cover rounded" />
          
          {/* Fondo borroso */}
          <div className="absolute inset-0 rounded bg-gray-400 opacity-30"></div>
          
          {/* Borde */}
          <div className="absolute inset-0 border border-purple-600 border-opacity-50 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default LogosGrid;
