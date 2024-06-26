import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.message === 'Login exitoso') {
        // Aquí podrías guardar el usuario en el estado global o en localStorage
        console.log(data.user);
        setMessage('Login exitoso');
      } else {
        setMessage('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en el login', error);
      setMessage('Error en el login');
    }
  };

  return (
    <div>
      <h3>Acceso empleados</h3>
      <label htmlFor="nombre">Correo electrónico:</label>
      <input
        type="email"
        placeholder="correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="nombre">Contraseña:</label>
      <input
        type="password"
        placeholder="contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <p>{message}</p>
      <a href="#" role='button' >¿Olvidaste tu contraseña?</a>
      <br></br>
      <a href="/p-registro" role='button' >Registrarse</a>
    </div>
  );
};

export default Login;