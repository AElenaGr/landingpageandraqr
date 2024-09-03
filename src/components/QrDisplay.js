// src/components/QrDisplay.js
import React from 'react';

const QrDisplay = ({ qrCode }) => {
  if (!qrCode) {
    return null;
  }

  return (
    <div>
      <h3>Código QR Generado:</h3>
      <img src={qrCode} alt="Código QR generado" />
    </div>
  );
};

export default QrDisplay;