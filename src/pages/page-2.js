import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../components/css/inicio.css"; // Asegúrate de importar el nuevo CSS
import TandemButton from "../components/button";

function Inicio() {
  return (
    <Layout>
      <div className="qrinicio">
        <h1>GENERADOR DE QR</h1>
        <StaticImage
          src="../images/qr-code.png"
          loading="eager"
          width={250}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="QR Code"
          style={{ marginBottom: `20px` }}
        />
        <TandemButton enlace="/crear-qr">Crear QR</TandemButton>
        <a href="/" role="button" className="button">Volver a inicio</a>
      </div>
    </Layout>
  );
}

export default Inicio;
