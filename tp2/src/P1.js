import React, { useState, useEffect } from 'react';

function Main1() {
  const [page, setPage] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      setPage((prevPage) => (prevPage + 1) % 4);
    } 
    else if (event.key === 'ArrowRight') {
      setPage((prevPage) => (prevPage - 1 + 4) % 4);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

 
  const cargarImagen = () => {
    switch (page) {
      case 0:
        return <img src='/imagen1.jpg'/>; 
      case 1:
        return <img src='/images2.jfif'/>;
      case 2:
        return <img src='/imagen3.jfif'/>;
      case 3:
        return <img src='/imagen4.webp'/>; 
      default:
        return <p>Error</p>;
    }
  };

  return (
    <div>
      {cargarImagen()}
    </div>
  );
}

export default Main1;