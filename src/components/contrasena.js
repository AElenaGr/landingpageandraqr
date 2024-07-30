import React, { useState } from 'react';
import './contrasena.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('https://andra.tandempatrimonionacional.eu/api-qr-tandem/v1/change-password.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error changing password'); // Handle non-2xx response codes
      }

      const data = await response.json();
      setMessage(data.message || 'Contraseña cambiada con éxito'); // Use server response or default success message
    } catch (error) {
      console.error('Error changing password:', error);
      setMessage('Error al cambiar la contraseña'); // Set a generic error message
    } finally {
      // Optionally, clear the form fields after successful submission
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="containerAcceso">
      <div className="imageFondo">
        <h3>Cambio de Contraseña</h3>
        <form onSubmit={handleSubmit} className="formAcceso">
          <ul className="lista">
            <li className="mail">
              <div className="icono">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
            </li>
            <li className="pass">
              <div className="icono2">
                <input
                  type="password"
                  placeholder="Cambiar contraseña"
                  id="password"
                  value={password}
                  onChange={handleChangePassword}
                />
                <label htmlFor="password" className="label"></label>
              </div>
            </li>
          </ul>
          {message && <p className="message">{message}</p>}
          <button type="submit">Cambiar Contraseña</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;