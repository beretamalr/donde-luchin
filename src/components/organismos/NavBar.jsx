import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // 1. Estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // 2. Efecto para aplicar la clase al elemento raíz (HTML)
  useEffect(() => {
    const root = window.document.documentElement; // Seleccionamos el <html>
    
    if (darkMode) {
      root.classList.add('dark');
      // Opcional: Esto ayuda a que el fondo del navegador cambie también
      root.style.colorScheme = 'dark'; 
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white p-4 sticky top-0 z-50 shadow-md border-b border-slate-100 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo / Título */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏡</span>
          <h1 className="text-xl font-black tracking-tight">
            Donde <span className="text-amber-600">Luchín</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-6">
          {/* BOTÓN DE INTERRUPTOR */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="group relative flex items-center justify-center p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-90 border border-transparent dark:border-slate-700 shadow-inner"
            aria-label="Cambiar modo de luz"
          >
            {/* El icono cambia según el estado */}
            <span className="text-xl transform transition-transform duration-500 rotate-0 dark:rotate-[360deg]">
              {darkMode ? '☀️' : '🌙'}
            </span>
            
            {/* Tooltip pequeño que aparece al pasar el mouse */}
            <span className="absolute -bottom-10 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[10px] px-2 py-1 rounded">
              {darkMode ? 'Luz' : 'Noche'}
            </span>
          </button>

          {/* Botón de Reserva Directa */}
          <a 
            href="https://wa.me/56945914914" 
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-green-900/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
