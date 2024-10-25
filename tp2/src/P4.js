import React, { useState } from 'react';

const Main4 = () => {
  const [estilos, setEstilos] = useState({
    boton1: { backgroundColor: 'blue', width: '100px' },
    boton2: { fontSize: '16px', color: 'black' },
    boton3: { borderRadius: '0px' },
    boton4: { transform: 'scale(1)' },
    boton5: { border: '2px solid black' },
    boton6: { visibility: 'visible' }
  });

  const click = (boton) => {
    switch (boton) {
      case 'boton1':
        setEstilos({ ...estilos, boton1: { ...estilos.boton1, backgroundColor: 'green' } });
        break;
      case 'boton2':
        setEstilos({ ...estilos, boton2: { ...estilos.boton2, fontSize: '20px' } });
        break;
      case 'boton3':
        setEstilos({ ...estilos, boton3: { ...estilos.boton3, borderRadius: '50px' } });
        break;
      case 'boton4':
        setEstilos({ ...estilos, boton4: { ...estilos.boton4, transform: 'scale(1.2)' } });
        break;
      case 'boton5':
        setEstilos({ ...estilos, boton5: { ...estilos.boton5, border: '5px dashed red' } });
        break;
      case 'boton6':
        setEstilos({ ...estilos, boton6: { ...estilos.boton6, visibility: 'hidden' } });
        break;
      default:
        break;
    }
  };

  const click2 = (boton) => {
    switch (boton) {
      case 'boton1':
        setEstilos({ ...estilos, boton1: { ...estilos.boton1, width: '200px' } });
        break;
      case 'boton2':
        setEstilos({ ...estilos, boton2: { ...estilos.boton2, color: 'red' } });
        break;
      case 'boton3':
        setEstilos({ ...estilos, boton3: { ...estilos.boton3, borderRadius: '0px' } });
        break;
      case 'boton4':
        setEstilos({ ...estilos, boton4: { ...estilos.boton4, transform: 'scale(1)' } });
        break;
      case 'boton5':
        setEstilos({ ...estilos, boton5: { ...estilos.boton5, border: '2px solid black' } });
        break;
      case 'boton6':
        setEstilos({ ...estilos, boton6: { ...estilos.boton6, visibility: 'visible' } });
        break;
      default:
        break;
    }
  };

  return (
    <div className="botones-dinamicos">
      <button
        style={estilos.boton1}
        onClick={() => click('boton1')}
        onDoubleClick={() => click2('boton1')}
      >
        Botón 1
      </button>

      <button
        style={estilos.boton2}
        onClick={() => click('boton2')}
        onDoubleClick={() => click2('boton2')}
      >
        Botón 2
      </button>

      <button
        style={estilos.boton3}
        onClick={() => click('boton3')}
        onDoubleClick={() => click2('boton3')}
      >
        Botón 3
      </button>

      <button
        style={estilos.boton4}
        onClick={() => click('boton4')}
        onDoubleClick={() => click2('boton4')}
      >
        Botón 4
      </button>

      <button
        style={estilos.boton5}
        onClick={() => click('boton5')}
        onDoubleClick={() => click2('boton5')}
      >
        Botón 5
      </button>

      <button
        style={estilos.boton6}
        onClick={() => click('boton6')}
        onDoubleClick={() => click2('boton6')}
      >
        Botón 6
      </button>
    </div>
  );
};

export default Main4;
