import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/crearqr-componentes/collapse2";
import MyComponent from "../components/crearqr-componentes/componente1";
import TandemButton from "../components/button";
import { StaticImage } from "gatsby-plugin-image";
import QRCode from 'qrcode.react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import download from 'downloadjs';
function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const qrRef = useRef(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleColorChange = (color) => {
    setQrColor(color);
  };
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };

  // descargarrrrrr //
  const handleDownload = async () => {
    if (qrRef.current) {
      const dataUrl = await toPng(qrRef.current);
      download(dataUrl, 'qr-code.png');
    }
  };

  const handleDownload2 = async () => {
    if (qrRef.current) {
      const dataUrl = await toJpeg(qrRef.current);
      download(dataUrl, 'qr-code.jpeg');
    }
  };

  const handleDownload3 = async () => {
    if (qrRef.current) {
      const dataUrl = await toSvg(qrRef.current);
      download(dataUrl, 'qr-code.svg');
    }
  };

  const containerStyle = {
    backgroundColor: "beige",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta']; // Colores ampliados
  return (
    <Layout>
      <div style={containerStyle}>
        <h1>GENERADOR DE QR</h1>
        
        <Collapse2/>
        <br />
        <p>Introduce tu texto o url aquí:</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <MyComponent
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          colorOptions={colorOptions}
        />
        <br />
        <div ref={qrRef}>
          <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
        </div>
        <br />
        {/* <TandemButton enlace="#">Generar QR</TandemButton> */}
        <br />
        <button className="button" onClick={handleDownload}>Descargar QR png</button>
        <button className="button" onClick={handleDownload2}>Descargar QR jpg</button>
        <button className="button" onClick={handleDownload3}>Descargar QR svg</button>
      </div>
    </Layout>
  );
}
export default Crearqr;