import React from 'react';

const TarjetaHabitacion = ({ nombre, precio, imagen, caracteristicas }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row h-full">
      <div className="md:w-2/5 h-48 md:h-auto">
        <img src={imagen} alt={nombre} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{nombre}</h3>
            <span className="text-amber-600 dark:text-amber-400 font-black text-xl">{precio}</span>
          </div>
          <ul className="space-y-2 mb-5">
            {caracteristicas.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="text-amber-500 text-xs">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <a href="#contacto" className="w-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white text-center py-3 rounded-xl text-sm font-bold uppercase shadow-md">
          Consultar Disponibilidad
        </a>
      </div>
    </div>
  );
};

export default TarjetaHabitacion;