import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/layout";
import MyComponent from "../components/select";
import QRCode from "qrcode.react";
import { toPng, toJpeg, toSvg } from "html-to-image";
import download from "downloadjs";
import CompaQr from "../components/compa";
import Modal2 from "../components/modal";
import Tabs from "../components/tabs";
import MapaConMarcador from "../components/mapa";
import SaveDb from "../components/savedb"; // Importar SaveDb
import "../components/css/crearqr.css";

function Crearqr() {
  const [latLng, setLatLng] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [qrColor, setQrColor] = useState("black");
  const [qrSize, setQrSize] = useState(100);
  const [activeTab, setActiveTab] = useState("url");
  const [showModal, setShowModal] = useState(false);
  const qrRef = useRef(null);
  const [descargado, setDescargado] = useState(false);
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (latLng) {
      setLatitude(latLng.lat.toFixed(6));
      setLongitude(latLng.lng.toFixed(6));
    }
  }, [latLng]);

  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleLatitudeChange = (event) => setLatitude(event.target.value);
  const handleLongitudeChange = (event) => setLongitude(event.target.value);
  const handleColorChange = (color) => setQrColor(color);
  const handleSizeChange = (size) => setQrSize(parseInt(size, 10));

  const handleDownload = async (format) => {
    if (qrRef.current) {
      const dataUrl =
        format === "png"
          ? await toPng(qrRef.current)
          : format === "jpeg"
          ? await toJpeg(qrRef.current)
          : await toSvg(qrRef.current);
      download(dataUrl, `qr-code.${format}`);
      setDescargado(true);
    }
  };

  const handleHelpClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const getQrValue = () => {
    switch (activeTab) {
      case "url":
        return inputValue;
      case "geolocation":
        return `geo:${latitude},${longitude}`;
      case "text":
        return inputValue;
      default:
        return "";
    }
  };

  return (
    <Layout>
      <div className="crearqr-container">
        <h1 className="tituloqr">Generador de QR</h1>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "url" && (
          <div className="input-container">
            <p>Introduce la URL:</p>
            <input
              type="text"
              placeholder="www.ejemplo.com"
              value={inputValue}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        )}
        {activeTab === "geolocation" && (
          <div className="input-container">
            <p>Introduce la geolocalización (latitud y longitud):</p>
            <input
              type="text"
              placeholder="Latitud: 34.056687"
              value={latitude}
              onChange={handleLatitudeChange}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Longitud: -117.195732"
              value={longitude}
              onChange={handleLongitudeChange}
              className="input-field"
            />
            <MapaConMarcador setLatLng={setLatLng} />
            {latLng ? (
              <p>Latitud: {latitude}, Longitud: {longitude}</p>
            ) : (
              <p>Haz clic en el mapa para obtener las coordenadas</p>
            )}
          </div>
        )}
        {activeTab === "text" && (
          <div className="input-container">
            <p>Introduce el texto:</p>
            <textarea
              placeholder="Introduce el texto"
              value={inputValue}
              onChange={handleInputChange}
              className="input-field textarea"
            />
          </div>
        )}
        <div className="controls-container">
          <MyComponent
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            colorOptions={[
              "black",
              "blue",
              "red",
              "green",
              "yellow",
              "purple",
              "orange",
              "pink",
              "magenta",
            ]}
            className="color-picker"
          />
          <div className="size-picker">
            <p>Selecciona el tamaño:</p>
            <input
              type="number"
              value={qrSize}
              onChange={(e) => handleSizeChange(e.target.value)}
              min="50"
              max="500"
            />
          </div>
        </div>
        <div className="qr-container">
          <div ref={qrRef} className="qr-code">
            <QRCode value={getQrValue()} size={qrSize} fgColor={qrColor} />
          </div>
          <p className="qr-value">{getQrValue()}</p>
        </div>
        <div className="button-container">
          <button onClick={() => handleDownload("png")} className="button">
            PNG
          </button>
          <button onClick={() => handleDownload("jpeg")} className="button">
            JPG
          </button>
          <button onClick={() => handleDownload("svg")} className="button">
            SVG
          </button>
        </div>
        <SaveDb data={getQrValue()} nref="Referencia" desc="Descripción del QR" />
        {error && <p className="error-message">{error}</p>}
        {qrCode && (
          <div className="success-message">
            <p>Código QR guardado correctamente.</p>
            <p>URL del código QR guardado: {qrCode}</p>
          </div>
        )}
      </div>
      <Modal2 show={showModal} handleClose={handleCloseModal}>
        <h2>Instrucciones</h2>
        <p>
          Esta página sirve para crear un código QR introduciendo datos como URL, geolocalización o texto en los campos correspondientes. Selecciona el color y tamaño del QR utilizando las opciones disponibles y haz clic en los botones de descarga para obtener el QR en el formato deseado (PNG, JPG, SVG). También puedes guardar el QR utilizando el botón "Guardar QR".
        </p>
      </Modal2>
      <CompaQr />
    </Layout>
  );
}

export default Crearqr;
