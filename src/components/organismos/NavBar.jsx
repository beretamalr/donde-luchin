import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const mensajeReserva = "Hola.. Quiero consultar por el precio de las habitaciones de su residencia..";
  const urlWhatsApp = `https://wa.me/56945914914?text=${encodeURIComponent(mensajeReserva)}`;

  return (
    <nav className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white p-4 sticky top-0 z-50 shadow-md border-b dark:border-slate-800 transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏡</span>
          <h1 className="text-xl font-black tracking-tight">
            Donde <span className="text-amber-600">Luchín</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          
          {/* AHORA ES VISIBLE EN MÓVIL PERO CON TEXTO MÁS CORTO */}
          <a 
            href="https://wa.me/56945914914?text=*COTIZACIÓN%20EMPRESA*"
            className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold border dark:border-slate-700 hover:bg-slate-200 transition-all"
          >
            Empresas
          </a>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm border dark:border-slate-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <a 
            href={urlWhatsApp} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold shadow-lg hover:bg-green-700 transition-colors"
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;