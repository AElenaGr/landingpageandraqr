import React, { useState } from 'react';

const Soporte = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://andra.tandempatrimonionacional.eu/api-qr-tandem/v1/email-soporte.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          email,
          asunto,
          mensaje
        })
      });
      const data = await response.json();
      setMessage(data.message);
      // Limpia los campos después de enviar el formulario
      setNombre('');
      setEmail('');
      setAsunto('');
      setMensaje('');
    } catch (error) {
      console.error('Error al enviar el mensaje de soporte', error);
      setMessage('Error al enviar el mensaje de soporte');
    }
  };

  return (
    <div>
      <h2>Contacto de Soporte Técnico</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Asunto:</label>
        <input
          type="text"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
          required
        />
        <br />
        <label>Mensaje:</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Soporte;
