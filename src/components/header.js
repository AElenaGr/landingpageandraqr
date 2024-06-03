import * as React from "react";
import { Link } from "gatsby";
import "./layout.css"; // Asegúrate de que tu CSS esté importado
import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      flexDirection: `column` // Cambia la dirección del flex para alinear elementos en columna
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        width: `100%`,
      }}
    >

{/* ARRIBA DEL TODO  */}


{/* <StaticImage
          src="../images/logopn.png"
          loading="eager"
          width={250}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        /> */}


      {/* <img src="../src/images/logpn.png" alt="PN" style={{ height: `50px` }} /> Ajusta el tamaño según sea necesario */}


    </div>
  </header>
);

export default Header;
