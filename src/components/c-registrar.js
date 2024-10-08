import React, { useState } from "react";
import './css/registro.css';

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [delegacion, setDelegacion] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleNombre = (e) => setNombre(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDepartamento = (e) => setDepartamento(e.target.value);
  const handleDelegacion = (e) => setDelegacion(e.target.value);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleRegistro = async () => {
    try {
      const response = await fetch(
        "https://andra.tandempatrimonionacional.eu/api-qr-tandem/v1/register-user.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nombre,
            departamento: departamento,
            delegacion: delegacion,
            email: email,
            password: password,
          }),
        }
      );
      const data = await response.json();
      // console.log(data);
      setMessage(data.message);
      // setMessage('Registro exitoso');/////////////////
      // setResServidor=(true)
  } catch (error) {
      console.error('Error registrando usuario', error);
      setMessage('Error en el registro');
  }
  };

  return (
    <div className="registro-form">
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        placeholder="Introduce tu nombre"
        id="nombre"
        value={nombre}
        onChange={handleNombre}
      />
      {/* <label htmlFor="departamento">Departamento:</label>
      <input
        type="text"
        placeholder="Introduce tu departamento"
        id="departamento"
        value={departamento}
        onChange={handleDepartamento}
      /> */}
      <label htmlFor="delegacion">Delegación:</label>
      <select id="delegacion" value={delegacion} onChange={handleDelegacion}>
        <option value="">Selecciona tu delegación</option>
        <option value="Aranjuez">Aranjuez - Madrid</option>
        <option value="El Pardo">El Pardo - Madrid </option>
        <option value="San Ildefonso - Segovia">San Ildefonso - Segovia</option>
        <option value="San Jerónimo de Yuste - Cáceres">San Jerónimo de Yuste - Cáceres</option>
        <option value="San Lorenzo de El Escorial - Madrid"> San Lorenzo de El Escorial - Madrid</option>
        {/* Añade más opciones según sea necesario */}
      </select>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        placeholder="Introduce tu email"
        id="email"
        value={email}
        onChange={handleEmail}
      />
      <label htmlFor="password">Contraseña:</label>
      <div style={{ position: "relative" }}>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Introduce tu Contraseña"
          id="password"
          value={password}
          onChange={handlePassword}
          style={{ paddingRight: "30px" }}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "5px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {passwordVisible ? "🙈" : "👁️"}
        </button>
      </div>
      <button onClick={handleRegistro}>Registro</button>
       {/* SACAR MENSAJE EN PANTALLA */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Registro;
