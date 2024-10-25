import React, { useState, useEffect } from 'react';
import ReturnHTML1 from './P1';

const ReturnHTML5 = () => {
  const [textoUsuario, setTextoUsuario] = useState('');
  const [textoGuardado, setTextoGuardado] = useState('');
  const [tiempo, setTiempo] = useState(null);

  const cambiarTexto = (e) => {
    setTextoUsuario(e.target.value);

    if (tiempo) {
      clearTimeout(tiempo);
    }

    setTiempo(
      setTimeout(() => {
        setTextoGuardado(e.target.value);
      }, 5000)
    );
  };

  return (
    <div>
      <h1>Guardar texto despues de 5 segundos</h1>
      <input
        type="text"
        value={textoUsuario}
        onChange={cambiarTexto}
        placeholder="Textp"
      />
      <h1>{textoGuardado}</h1>
    </div>
  );
};

export default ReturnHTML5;

