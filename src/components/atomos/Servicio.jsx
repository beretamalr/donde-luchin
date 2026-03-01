import React from 'react';

const Servicio = ({ icono, titulo }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <span className="text-4xl mb-3">{icono}</span>
      <span className="text-sm font-semibold text-slate-700 text-center leading-tight">
        {titulo}
      </span>
    </div>
  );
};

export default Servicio;