import React from 'react';

const Match = () => {
  return (
    <div className="flex h-screen bg-black">
      {/* Columna de Preguntas */}
      <div className="w-1/2 p-10 mt-10 text-white">
        <h1 className="text-4xl mb-8">Preguntas</h1>
        {/* Aquí puedes agregar tus preguntas */}
      </div>

      {/* Columna de Usuarios */}
      <div className="w-1/2 p-10 mt-10 text-white">
        <h1 className="text-4xl mb-8">Usuarios</h1>
        {/* Aquí puedes mostrar los usuarios */}
      </div>
    </div>
  );
};

export default Match;
