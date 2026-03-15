import React, { useEffect } from 'react';
import Navbar from './components/organismos/NavBar';
import TarjetaHabitacion from './components/moleculas/TarjetaHabitacion';
import FormularioContacto from './components/organismos/FormularioContacto';
import Ubicacion from './components/organismos/Ubicacion';

function App() {
  useEffect(() => { document.title = "Residencial Donde Luchín - Nacimiento"; }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      <header className="py-12 text-center px-4">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">Residencial <span className="text-amber-600">Donde Luchín</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">Comodidad y descanso en Nacimiento</p>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <TarjetaHabitacion nombre="Individual" precio="$28.000" imagen="habitacionindividual.jpeg" caracteristicas={["Baño Compartido", "Wi-Fi Alta Velocidad"]} />
          <TarjetaHabitacion nombre="Doble" precio="$32.000" imagen="habitaciondoble.jpg" caracteristicas={["Baño Privado", "Dos camas individuales","Flexibilidad de camas", "Wi-Fi Alta Velocidad"]} />
          <TarjetaHabitacion nombre="Cuádruple" precio="$32.000" imagen="habitacioncuadruple.jpeg" caracteristicas={["Baño Compartido", "Televisión", "Ideal para familias", "Wi-Fi Alta Velocidad"]} />
          <TarjetaHabitacion nombre="Matrimonial" precio="$32.000" imagen="habitacionmatrimonio.jpeg" caracteristicas={["Baño Privado", "Cama Matrimonial","Cama de agregado para Niños(a)", "Wi-Fi Alta Velocidad"]} />
        </div>
        <FormularioContacto />
        <Ubicacion />
      </main>

      <footer className="py-12 text-center text-slate-400 dark:text-slate-600 border-t dark:border-slate-800">
        <p>© 2026 Residencial Donde Luchín - Hernán Merino 120, Nacimiento</p>
      </footer>
    </div>
  );
}

export default App;