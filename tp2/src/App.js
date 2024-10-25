import React, { useState, useEffect } from 'react';
import './App.css';
import ReturnHTML2 from './P2.js';
import ReturnHTML4 from './P4.js';
import ReturnHTML3 from './P3.js';
import ReturnHTML1 from './P1.js';
import ReturnHTML5 from './P5.js';

function App() {
  const [page, setPage] = useState(0);
  const cargarPagina = () => {
    switch (page) {
      case 0:
        return <ReturnHTML1 />;
      case 1:
        return <ReturnHTML2 />;
      case 2:
        return <ReturnHTML3 />;
      case 3:
        return <ReturnHTML4 />;
      case 4:
        return <ReturnHTML5 />;
    }
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => setPage((prevPage) => (prevPage + 1 + 5) % 5)}>Anterior</button> 
        <button onClick={() => setPage((prevPage) => (prevPage - 1 + 5) % 5)}>Siguiente</button> 
      </header>
      {cargarPagina()}
    </div>
  );
}

export default App;
