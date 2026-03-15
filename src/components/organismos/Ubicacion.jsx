import React from 'react';

const Ubicacion = () => {
  const direccionReal = "Hernán Merino 120, Nacimiento, Biobío";
  // Este es el link del mapa que ya te funcionaba
  const mapUrlDirecto = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.311746210086!2d-72.677598!3d-37.500588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96690f3807b53965%3A0xc666993685f0967!2sHern%C3%A1n%20Merino%20120%2C%20Nacimiento%2C%20B%C3%ADo%20B%C3%ADo!5e0!3m2!1ses-419!2scl!4v1709400000000!5m2!1ses-419!2scl";

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 grid grid-cols-1 lg:grid-cols-2">
        
        {/* Lado del Texto (Restaurado de tu imagen) */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
            📍 ¿Dónde estamos?
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Residencial <strong>Donde Luchín</strong> está ubicada en una zona estratégica de 
            Nacimiento. Ideal para trabajadores y turistas que buscan 
            tranquilidad y un ambiente familiar en la Región del Biobío.
          </p>
          
          <div className="space-y-6 mb-8">
            {/* Bloque de Dirección con el color de tu imagen */}
            <div className="flex items-center gap-4">
              <div className="bg-[#FEF3C7] dark:bg-amber-900/40 p-4 rounded-2xl shadow-sm">
                <span className="text-2xl">🏠</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-xl">Dirección</p>
                <p className="text-slate-600 dark:text-slate-400">{direccionReal}</p>
              </div>
            </div>
            
            {/* Bloque de Contacto con el color de tu imagen */}
            <div className="flex items-center gap-4">
              <div className="bg-[#DCFCE7] dark:bg-green-900/40 p-4 rounded-2xl shadow-sm">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-xl">Contacto Directo</p>
                <p className="text-slate-600 dark:text-slate-400">+56 9 4591 4914</p>
              </div>
            </div>
          </div>

          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccionReal)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white font-bold py-4 rounded-2xl text-center shadow-lg active:scale-95 transition-all"
          >
            Cómo llegar (Google Maps)
          </a>
        </div>

        <div className="h-[450px] lg:h-auto min-h-[400px]">
          <iframe 
            title="Mapa Hernán Merino 120"
            src={mapUrlDirecto}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="dark:opacity-80 dark:contrast-125 transition-all"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Ubicacion;