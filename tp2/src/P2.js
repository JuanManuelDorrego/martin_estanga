import React, { useState } from 'react';

const Main2 = () => {
  const [nombre, setNombre] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({ nombre: '',  correoElectronico: '', contrasena: '' });

  const validarNombre = (valor) => {
    if (valor.trim() === '') {
      return 'Ingrese un nombre.';
    }
    return '';
  };


  
  const validacionContrasena = (valor) => {
    if (valor.length < 6) {
      return 'La contraseña es muy corta.';
    }
    return '';
  };

  const validarCorreoElectronico = (valor) => {
    if (valor.trim() === '') {
      return 'Ingrese un gmail.';
    }
    return '';
  };


  
  const manejarCambio = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'nombre':
        setNombre(value); 
        setErrores((prevErrores) => ({
          ...prevErrores,
          nombre: validarNombre(value) 
        }));
        break;

      case 'correoElectronico':
        setCorreoElectronico(value);
        setErrores((prevErrores) => ({
          ...prevErrores,
          correoElectronico: validarCorreoElectronico(value) 
        }));
        break;

      case 'contrasena':
        setContrasena(value); 
        setErrores((prevErrores) => ({
          ...prevErrores,
          contrasena: validacionContrasena(value) 
        }));
        break;

      default:
        break;
    }
  };

  const manejarSubmit = (e) => {
    e.preventDefault(); 
    const erroresNombre = validarNombre(nombre);
    const erroresCorreo = validarCorreoElectronico(correoElectronico);
    const erroresContrasena = validacionContrasena(contrasena); 

    if (!erroresNombre && !erroresCorreo && !erroresContrasena) {
      alert('Formulario enviado correctamente'); 
    } else {
      setErrores({
        nombre: erroresNombre, 
        correoElectronico: erroresCorreo,
        contrasena: erroresContrasena
      });
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <div>
        <h1>Sign In</h1>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={manejarCambio}
        />

        {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
      </div>

      <div>
        <label>Correo Electrónico:</label>
        <input type="email" name="correoElectronico" value={correoElectronico} onChange={manejarCambio}/>

        {errores.correoElectronico && (
          <p style={{ color: 'red' }}>{errores.correoElectronico}</p>
        )}
      </div>

      <div>
        
        <label>Contraseña:</label>
        <input
          type="password"
          name="contrasena"
          value={contrasena}
          onChange={manejarCambio}
        />
        {errores.contrasena && (
          <p style={{ color: 'red' }}>{errores.contrasena}</p> 
        )}

      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Main2;

