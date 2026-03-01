// src/components/atomos/Titulo.jsx
import React from 'react';

const Titulo = ({ texto, nivel = 1 }) => {
  const Tag = `h${nivel}`;
  
  const estilos = {
    color: '#2c3e50',
    fontFamily: 'sans-serif',
    margin: '10px 0'
  };

  return <Tag style={estilos}>{texto}</Tag>;
};

export default Titulo;