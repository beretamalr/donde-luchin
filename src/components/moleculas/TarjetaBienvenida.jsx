// src/components/moleculas/TarjetaBienvenida.jsx
import React from 'react';
import Titulo from '../atomos/Titulo';

const TarjetaBienvenida = () => {
  const estiloTarjeta = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: '20px auto'
  };

  return (
    <div style={estiloTarjeta}>
      <Titulo texto="Residencial Donde Luchín" nivel={1} />
      <p>Tu hogar lejos de casa en un ambiente familiar.</p>
      <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Ver Disponibilidad
      </button> 
    </div>
  );
};

export default TarjetaBienvenida;