import React from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/crearqr-componentes/collapse2";
import MyComponent from "../components/crearqr-componentes/componente1";
import TandemButton from "../components/button";
import { StaticImage } from "gatsby-plugin-image";

function Crearqr() {
  return(
<Layout>
  <div className="crearr">
    
  <div className="tex-center">
  <h1 >GENERADOR DE QR </h1> 
  <StaticImage
        src="../images/qr-code.png"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> 
  <Collapse2></Collapse2>
  </div>

  <br></br>
  Introduce tu texto o url aquí:
<input  type="text" />
<MyComponent></MyComponent>   
<br></br>
<TandemButton enlace="#">Generar QR</TandemButton>
</div>
</Layout>
  )
}

export default Crearqr;