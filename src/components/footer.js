import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"

const Footer = () => {
  return (
    <footer>
  <div className="footer-left">
    <span>© {new Date().getFullYear()} &middot; </span>
    <a href="https://www.patrimonionacional.es/">Patrimonio Nacional</a>
  </div>
  <div className="footer-right">
    <div className="footer-links">
      <a className="a" href="#">
        Aviso Legal
      </a>
      <a className="a" href="#">
        Accesibilidad
      </a>
      <a className="a" href="#">
        Política de Privacidad
      </a>
      <a className="a" href="#">
        Política de cookies
      </a>
    </div>
    <div className="footer-icons">
      <a href="https://www.instagram.com/patrimnacional/?hl=es">
        <StaticImage
          src="../images/ig.png"
          loading="eager"
          width={96} // Ajusta el ancho del ícono según lo necesites
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Patrimonio Nacional Logo"
          style={{ marginBottom: `var(--space-3)` }}
        />
      </a>
      <a href="https://www.patrimonionacional.es/">
        <StaticImage
          src="../images/pn1.png"
          loading="eager"
          width={96} // Ajusta el ancho del ícono según lo necesites
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Patrimonio Nacional Logo"
          style={{ marginBottom: `var(--space-3)` }}
        />
      </a>
      <a href="#">
        {/* <img src="path/to/icon3.png" alt="Icono 3" style={{ width: "96px", marginBottom: "var(--space-3)" }} /> Ajusta el ancho del ícono según lo necesites */}
      </a>
    </div>
  </div>
</footer>

  )
}

export default Footer
