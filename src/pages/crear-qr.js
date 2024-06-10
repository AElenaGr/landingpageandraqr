import * as React from "react"
import { useState, useRef } from "react"
import Layout from "../components/layout"
import Collapse2 from "../components/crearqr-componentes/collapse2"
import MyComponent from "../components/crearqr-componentes/componente1"
import TandemButton from "../components/button"
import { StaticImage } from "gatsby-plugin-image"
import QRCode from "qrcode.react"
import { toPng, toJpeg, toSvg } from "html-to-image"
import download from "downloadjs"
import { FaQuestionCircle } from "react-icons/fa"
import Modal from "../components/modal"
import Tabs from "../components/tabs"

function Crearqr() {
  const [inputValue, setInputValue] = useState("")
  const [qrColor, setQrColor] = useState("black")
  const [qrSize, setQrSize] = useState(100)
  const [activeTab, setActiveTab] = useState("url")
  const [showModal, setShowModal] = useState(false)
  const qrRef = useRef(null)
  const handleInputChange = event => {
    setInputValue(event.target.value)
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
    }
  }
  const handleDownload2 = async () => {
    if (qrRef.current) {
      const dataUrl = await toJpeg(qrRef.current)
      download(dataUrl, "qr-code.jpeg")
    }
  }
  const handleDownload3 = async () => {
    if (qrRef.current) {
      const dataUrl = await toSvg(qrRef.current)
      download(dataUrl, "qr-code.svg")
    }
  }
  const handleHelpClick = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const containerStyle = {
    backgroundColor: "#FAEBD7",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "50%",
    height: "50%",
    margin: "auto",
    marginTop: "1em",
    justifyContent: "center",
  }
  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "2px solid #ccc",
    fontSize: "16px",
    width: "50%",
    marginBottom: "10px",
  }
  const helpIconStyle = {
    marginLeft: "10px",
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
          <input
            type="text"
            placeholder="Introduce la URL"
            value={inputValue}
            onChange={handleInputChange}
            style={inputStyle}
          />
        )
      case "geolocation":
        return (
          <input
            type="text"
            placeholder="Introduce la geolocalización (lat,long)"
            value={inputValue}
            onChange={handleInputChange}
            style={inputStyle}
          />
        )
      case "text":
        return (
          <textarea
            placeholder="Introduce el texto"
            value={inputValue}
            onChange={handleInputChange}
            style={inputStyle}
          />
        )
      default:
        return null
    }
  }
  return (
    <Layout>
      <div className="generqr" style={containerStyle}>
        <div style={titleContainerStyle}>
          <h1 className="generadorqrtitulo">GENERADOR DE QR</h1>
          <FaQuestionCircle style={helpIconStyle} onClick={handleHelpClick} />
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
            <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
          </div>
          <br />
          <br />
          <p>Descargar QR:</p>
          <p>{inputValue}</p>
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
      </div>

      <Modal show={showModal} handleClose={handleCloseModal}>
        <div className="instruccionesqr">
        <h2>Instrucciones</h2>
        <p>
          Introduce el texto, URL o geolocalización en el campo de entrada según
          la pestaña seleccionada.
        </p>
        <p>
          Selecciona el color y tamaño del QR utilizando las opciones
          disponibles.
        </p>
        <p>
          Haz clic en los botones de descarga para obtener el QR en el formato
          deseado (PNG, JPG, SVG).
        </p>
        </div>
      </Modal>
      <a href="/" role='button' className='button'>Volver a inicio</a>
    </Layout>
  )
}
export default Crearqr
