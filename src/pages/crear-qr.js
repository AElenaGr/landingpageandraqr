import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import "../components/layout.css"
import MyComponent from "../components/select"
import QRCode from "qrcode.react"
import { toPng, toJpeg, toSvg } from "html-to-image"
import download from "downloadjs"
import CompaQr from "../components/compa"
import { FaQuestionCircle } from "react-icons/fa" // Import the help icon
import Modal from "../components/modal" // Import the modal component
import Tabs from "../components/tabs"
import MapaConMarcador from "../components/mapa"
import "leaflet/dist/leaflet.css" // Import Leaflet CSS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestion } from "@fortawesome/free-solid-svg-icons" // Import the specific icon

function Crearqr() {
  const [latLng, setLatLng] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [qrColor, setQrColor] = useState("black")
  const [qrSize, setQrSize] = useState(100)
  const [activeTab, setActiveTab] = useState("url") // State to manage active tab
  const [showModal, setShowModal] = useState(false) // State to manage modal visibility
  const qrRef = useRef(null)
  const [descargado, setDescargado] = useState(false)
  const [qrCode, setQrCode] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (latLng) {
      setLatitude(latLng.lat.toFixed(6))
      setLongitude(latLng.lng.toFixed(6))
    }
  }, [latLng])

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleLatitudeChange = event => {
    const value = event.target.value
    if (/^-?\d*\.?\d*$/.test(value)) {
      setLatitude(value)
    }
  }

  const handleLongitudeChange = event => {
    const value = event.target.value
    if (/^-?\d*\.?\d*$/.test(value)) {
      setLongitude(value)
    }
  }

  const handleColorChange = color => {
    setQrColor(color)
  }

  const handleSizeChange = size => {
    setQrSize(parseInt(size, 10))
  }

  const handleDownload = async () => {
    if (qrRef.current) {
      const dataUrl = await toPng(qrRef.current)
      download(dataUrl, "qr-code.png")
      setDescargado(true)
    }
  }

  const handleDownload2 = async () => {
    if (qrRef.current) {
      const dataUrl = await toJpeg(qrRef.current)
      download(dataUrl, "qr-code.jpeg")
      setDescargado(true)
    }
  }

  const handleDownload3 = async () => {
    if (qrRef.current) {
      const dataUrl = await toSvg(qrRef.current)
      download(dataUrl, "qr-code.svg")
      setDescargado(true)
    }
  }

  const handleHelpClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSaveQr = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        "http://localhost/api-qr-tandem/v1/create-qr.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: getQrValue(),
            nombre_ref: "Referencia",
            description: "Descripción del QR",
            created_by: 1,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Error al guardar el código QR")
      }

      const data = await response.json()
      console.log("Response data:", data) // Log the response data for debugging
      setQrCode(data.qrCodeUrl)
    } catch (err) {
      console.error("Fetch error:", err) // Log the error for debugging
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const containerStyle = {
    padding: "1px",
    textAlign: "center",
    width: "100%", // Reducir el ancho al 80% del contenedor padre
    height: "100%", // Reducir la altura al 80% del contenedor padre
    margin: "auto",
    marginTop: ".5em",
    justifyContent: "center",
  }

  const inputStyle = {
    padding: "5px",
    borderRadius: "7px",
    border: "2px solid #ccc",
    fontSize: "16px",
    width: "50%",
    marginBottom: "10px",
  }

  const textAreaStyle = {
    ...inputStyle,
    resize: "none", // Prevent resizing of the textarea
  }

  const helpIconStyle = {
    marginLeft: "20px",
    cursor: "pointer",
  }

  const titleContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const colorOptions = [
    "black",
    "blue",
    "red",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "magenta",
  ]

  const renderInputField = () => {
    switch (activeTab) {
      case "url":
        return (
          <div>
            <p>Introduce la URL:</p>
            <input
              type="text"
              placeholder="www.ejemplo.com"
              value={inputValue}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
        )
      case "geolocation":
        return (
          <div>
            <p>Introduce la geolocalización (latitud y longitud):</p>
            <input
              type="text"
              placeholder="Latitud: 34.056687"
              value={latitude}
              onChange={handleLatitudeChange}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Longitud: -117.195732"
              value={longitude}
              onChange={handleLongitudeChange}
              style={inputStyle}
            />
            <MapaConMarcador setLatLng={setLatLng} />
            <div className="coordinates">
              {latLng ? (
                <p>
                  Latitud: {latitude}, Longitud: {longitude}
                </p>
              ) : (
                <p>Haz clic en el mapa para obtener las coordenadas</p>
              )}
            </div>
          </div>
        )
      case "text":
        return (
          <div>
            <p>Introduce el texto:</p>
            <textarea
              placeholder="Introduce el texto"
              value={inputValue}
              onChange={handleInputChange}
              style={textAreaStyle}
            />
          </div>
        )
      default:
        return null
    }
  }

  const getQrValue = () => {
    switch (activeTab) {
      case "url":
        return inputValue
      case "geolocation":
        return `geo:${latitude},${longitude}`
      case "text":
        return inputValue
      default:
        return ""
    }
  }

  return (
    <Layout>
      <div style={containerStyle}>
        <div style={titleContainerStyle}>
          <h1 className="tituloqr">GENERADOR DE QR</h1>
          <FontAwesomeIcon
            icon={faQuestion}
            style={helpIconStyle}
            onClick={handleHelpClick}
          />
        </div>
        <br />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <br />
        {renderInputField()}
        <MyComponent
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          colorOptions={colorOptions}
        />
        <br />
        <div className="qr-contenido">
          <div ref={qrRef}>
            <QRCode value={getQrValue()} size={qrSize} fgColor={qrColor} />
          </div>
          <br />
          <br />
          <p className="tituloqr">Descargar: </p>
          <p>{getQrValue()}</p>
        </div>
        <br />
        <div className="buttondownload-container">
          <button onClick={handleDownload} className="button">
            PNG
          </button>
          <button onClick={handleDownload2} className="button">
            JPG
          </button>
          <button onClick={handleDownload3} className="button">
            SVG
          </button>
        </div>
        <button onClick={handleSaveQr} disabled={loading} className="button">
          {loading ? "Guardando..." : "Guardar QR"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {qrCode && (
          <div>
            <p style={{ color: "green" }}>Código QR guardado correctamente.</p>
            <p>URL del código QR guardado: {qrCode}</p>
          </div>
        )}
      </div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Instrucciones</h2>
        <p>
          Esta página sirve para crear un código QR introduciendo datos como
          URL, geolocalización o texto en los campos correspondientes.
          Selecciona el color y tamaño del QR utilizando las opciones
          disponibles y haz clic en los botones de descarga para obtener el QR
          en el formato deseado (PNG, JPG, SVG). También puedes guardar el QR
          utilizando el botón "Guardar QR".
        </p>
      </Modal>
      <CompaQr />
    </Layout>
  )
}

export default Crearqr
