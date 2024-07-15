import React, { useState } from 'react';

const EliminarQR = ({qr}) => {
  const [nombreRef, setNombreRef] = useState(qr);
  const [message, setMessage] = useState('');

  const handleEliminarQR = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/delete-qr.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_ref: nombreRef }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error eliminando el código QR', error);
      setMessage('Error en la eliminación');
    }
  };

  return (
    <div>
      <h2>Eliminar Código QR</h2>
      <form onSubmit={handleEliminarQR}>
        <div>
          <label>
            Nombre de Referencia:
            <input
              type="text"
              value={nombreRef}
              onChange={(e) => setNombreRef(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Eliminar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EliminarQR;