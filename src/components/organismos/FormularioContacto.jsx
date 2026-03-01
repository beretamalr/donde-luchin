import React, { useState } from 'react';

const FormularioContacto = () => {
  const [datos, setDatos] = useState({ 
    nombre: '', 
    habitacion: 'Single', 
    fecha: '', 
    mensaje: '' 
  });

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviarAWhatsApp = (e) => {
    e.preventDefault();
    
    // Convertir fecha de AAAA-MM-DD a DD-MM-AAAA para que te llegue como XX-XX-XXXX
    const fechaFormateada = datos.fecha.split('-').reverse().join('-');

    const texto = `*CONSULTA RESERVA - DONDE LUCHÍN` +
                  `*Nombre:* ${datos.nombre}%0A` +
                  `*Habitación:* ${datos.habitacion}%0A` +
                  `*Fecha:* ${fechaFormateada}%0A` +
                  `*Mensaje:* ${datos.mensaje}`;

    window.open(`https://wa.me/56945914914?text=${texto}`, "_blank");
  };

  return (
    <section id="contacto" className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl max-w-2xl mx-auto my-12 border border-slate-100 dark:border-slate-700 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">Consulta Disponibilidad</h2>
      
      <form onSubmit={enviarAWhatsApp} className="space-y-4 text-left">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 ml-1">Nombre Completo</label>
          <input 
            name="nombre" 
            onChange={manejarCambio}
            placeholder="Ej: Juan Pérez" 
            required 
            className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Tipo de Habitación */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 ml-1">Tipo de habitación que desea</label>
          <select 
            name="habitacion"
            onChange={manejarCambio}
            className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="Single">Habitación Individual</option>
            <option value="Doble">Habitación Doble</option>
            <option value="Suite">Habitación Cuádruple</option>
          </select>
        </div>

        {/* Fecha */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 ml-1">Fecha de llegada</label>
          <input 
            name="fecha" 
            type="date" 
            required 
            onChange={manejarCambio}
            className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 ml-1">Mensaje de consulta</label>
          <textarea 
            name="mensaje" 
            onChange={manejarCambio}
            placeholder="¿Alguna petición especial o duda?" 
            className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white h-24 outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 rounded-2xl hover:bg-green-700 shadow-lg transition-all active:scale-95">
          SOLICITAR DISPONIBILIDAD
        </button>
      </form>
    </section>
  );
};

export default FormularioContacto;