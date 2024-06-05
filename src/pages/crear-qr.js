import * as React from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/crearqr-componentes/collapse2";
import MyComponent from "../components/crearqr-componentes/componente1";
import TandemButton from "../components/button";
import { StaticImage } from "gatsby-plugin-image";

function Crearqr() {
  const containerStyle = {
    backgroundColor: "beige",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <Layout>
      <div style={containerStyle}>
        <h1>GENERADOR DE QR</h1>
        <StaticImage
          src="../images/qr-code.png"
          loading="eager"
          width={100}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="QR Code"
          style={{ marginBottom: `var(--space-3)` }}
        />
        <Collapse2 />
        <br />
        <p>Introduce tu texto o url aquí:</p>
        <input type="text" />
        <MyComponent />
        <br />
        <TandemButton enlace="#">Generar QR</TandemButton>
      </div>
    </Layout>
  );
}

export default Crearqr;
