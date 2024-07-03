// src/components/login.js

import React, { useState } from 'react'
import { navigate } from 'gatsby'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()
      if (data.message === 'Login exitoso') {
        localStorage.setItem('tandem_nombre', data.user.nombre);
        localStorage.setItem('tandem_email', data.user.email);
        localStorage.setItem('tandem_id', data.user.id);

        // Guardar el usuario en el almacenamiento local
        localStorage.setItem('loggedInUser', JSON.stringify(data.user))

        // Redirigir a la página de crear QR
        navigate('/crear-qr')
      } else {
        setMessage('Credenciales incorrectas')
      }
    } catch (error) {
      console.error('Error en el login', error)
      setMessage('Error en el login')
    }
  }

  return (
    <div>
      <h3>Acceso empleados</h3>
      <label htmlFor='email'>Email:</label>
      <input
        type="email"
        placeholder="Email"
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='contrasena'>Contraseña:</label>
      <input
        type="password"
        placeholder="Contraseña"
        id='contrasena'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className='buform'>Entrar</button>
      
      <p>{message}</p>
      
      <a href="/contrasenia" role='button' className='aform'>¿Olvidaste tu contraseña?</a>
      <br></br>
      <a href="/p-registro" role='button' className='aform' >Registrarse</a>
    </div>
  )
}

export default Login
