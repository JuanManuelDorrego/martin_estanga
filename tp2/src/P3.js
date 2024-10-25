import React, { useState } from "react";

const Main4 = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [mensajeUsuario, setmensajeUsuario] = useState("");
  const [mensaje, setmensaje] = useState("");

  const cambiarTexto = (e) => {
    setmensajeUsuario(e.target.value);
  };

  const verificarNumero = () => {
    const usermensajeUsuario = parseInt(mensajeUsuario, 10);
    if (usermensajeUsuario > randomNumber) {
      setmensaje("El número es menor a " + usermensajeUsuario);
    } 
    else if (usermensajeUsuario < randomNumber) {
      setmensaje("El numero es mayor a" + usermensajeUsuario);
    } 
    else {
      setmensaje("¡Adivinaste!");
    }
  };

  return (
    <div>
      <h1>Adivina el numero del 1 al 100</h1>
      <input
        type="number"
        value={mensajeUsuario}  
        onChange={cambiarTexto}  
        placeholder="Ingrese un numero"
      />
      <button onClick={verificarNumero}>Adivinar</button>  
      <h1>Cambiar numero</h1>
      <button onClick={verificarNumero}>Adivinar</button>  
      <p>{mensaje}</p>  
    </div>
  );
};

export default Main4;

