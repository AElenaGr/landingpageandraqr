import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import Layout from '../components/layout.js';
import EliminarQR from '../components/eliminar-qr.js';
import '../components/css/qrcodelist.css';

const QrCodeList = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQrCodes = async () => {
      try {
        const response = await fetch('https://andra.tandempatrimonionacional.eu/api-qr-tandem/v1/list-qr.php'); // Cambia esto a la URL correcta de tu API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQrCodes(data.qr_codes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQrCodes();
  }, []);

  const addNewQrCode = (newQrCode) => {
    setQrCodes([...qrCodes, newQrCode]);
  };

  const removeQrCode = (qrId) => {
    setQrCodes(qrCodes.filter((qrCode) => qrCode.qr_id !== qrId));
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <Layout>
      <div className="tablaqr">
        <h2>Listado de Códigos QR</h2>
        <table>
          <thead>
            <tr>
              <th>QR</th>
              <th>ID</th>
              <th>Data</th>
              <th>Nombre Referencia</th>
              <th>Descripción</th>
              <th>Fecha Creación</th>
              <th>ID Usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {qrCodes.map((qrCode) => (
              <tr key={qrCode.qr_id}>
                <td>
                  <QRCode
                    value={qrCode.qr_data}
                    size={100}
                    fgColor={qrCode.qr_color || '#000000'} // Usa el color proporcionado o un color por defecto
                  />
                </td>
                <td>{qrCode.qr_id}</td>
                <td>{qrCode.qr_data}</td>
                <td>{qrCode.qr_nombre_ref}</td>
                <td>{qrCode.qr_description}</td>
                <td>{qrCode.qr_created_at}</td>
                <td>{qrCode.user_id}</td>
                <td>
                  <EliminarQR qrId={qrCode.qr_id} onRemove={removeQrCode} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default QrCodeList;
