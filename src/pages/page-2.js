import React from "react";
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import "../components/layout.css"
import TandemButton from "../components/button";
// import Crearqr from "./crear-qr";


function Inicio(){
  return(
<Layout>
  <div className="qrinicio">
    <h1>GENERADOR DE QR</h1>
  <StaticImage
        src="../images/qr-code.png"
        loading="eager"
        width={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <br></br>
    <TandemButton enlace="/crear-qr" >Crear QR</TandemButton>
  </div>
  
  <div className="qrarchivo">
  <h2>ARCHIVO QR</h2>
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={120}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={120}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={120}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  </div>

  <a href="/" role='button' className='button'>Volver a inicio</a>
</Layout>
  )
}

export default Inicio