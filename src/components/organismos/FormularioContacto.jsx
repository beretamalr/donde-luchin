import React, { useState } from 'react';

const FormularioContacto = () => {
  const [datos, setDatos] = useState({ 
    nombre: '', 
    habitacion: 'Individual', 
    cantidad: '1', 
    fecha: '', 
    mensaje: '' 
  });

  const enviarAWhatsApp = (e) => {
    e.preventDefault();
    // Formateamos la fecha a DD-MM-AAAA para que sea legible en el chat
    const fechaFormateada = datos.fecha.split('-').reverse().join('-');
    
    const texto = `*CONSULTA RESERVA - DONDE LUCHÍN*%0A` +
                  `*Nombre:* ${datos.nombre}%0A` +
                  `*Habitación:* ${datos.habitacion}%0A` +
                  `*Cantidad:* ${datos.cantidad}%0A` +
                  `*Fecha:* ${fechaFormateada}%0A` +
                  `*Mensaje:* ${datos.mensaje}`;

    window.open(`https://wa.me/56932155593?text=${texto}`, "_blank");
  };

  return (
    <section id="contacto" className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl max-w-2xl mx-auto my-12 border border-slate-100 dark:border-slate-700 transition-all duration-300">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Reserva tu estadía</h2>
      </div>
      
      <form onSubmit={enviarAWhatsApp} className="space-y-4 text-left">
        {/* Nombre del Cliente */}
        <div>
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase ml-1">Nombre</label>
          <input 
            name="nombre" 
            onChange={(e) => setDatos({...datos, nombre: e.target.value})} 
            placeholder="Ej: Juan Pérez" 
            required 
            className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-amber-500" 
          />
        </div>

        {/* Fila: Tipo y Cantidad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase ml-1">Tipo de habitación</label>
            <select 
              name="habitacion" 
              onChange={(e) => setDatos({...datos, habitacion: e.target.value})} 
              className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-amber-500"
            >
              <option value="Individual">Individual (Baño Compartido)</option>
              <option value="Doble">Doble (Baño Privado)</option>
              <option value="Cuádruple">Cuádruple (Baño Compartido + TV)</option>
              <option value="Suite">Suite (Baño Privado)</option>
            </select>
          </div>
          
          <div>
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase ml-1">¿Cuántas?</label>
            <select 
              name="cantidad" 
              onChange={(e) => setDatos({...datos, cantidad: e.target.value})} 
              className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-amber-500"
            >
              <option value="1">1 habitación</option>
              <option value="2">2 habitaciones</option>
              <option value="3">3 habitaciones</option>
              <option value="4">4 habitaciones</option>
              <option value="5 o más">5 o más</option>
            </select>
          </div>
        </div>

        {/* Fecha de entrada */}
        <div>
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase ml-1">Fecha de llegada</label>
          <input 
            name="fecha" 
            type="date" 
            required 
            onChange={(e) => setDatos({...datos, fecha: e.target.value})} 
            className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-amber-500" 
          />
        </div>

        {/* Consulta extra */}
        <div>
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase ml-1">Mensaje o Dudas</label>
          <textarea 
            name="mensaje" 
            onChange={(e) => setDatos({...datos, mensaje: e.target.value})} 
            placeholder="¿Necesitas algo especial? Ejemplo: Estacionamiento para camioneta grande." 
            className="w-full p-3 rounded-xl border dark:border-slate-600 dark:bg-slate-700 dark:text-white h-24 resize-none focus:ring-2 focus:ring-amber-500" 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-700 transition-all active:scale-95"
        >
          SOLICITAR COTIZACIÓN POR WHATSAPP
        </button>
      </form>
    </section>
  );
};

export default FormularioContacto;