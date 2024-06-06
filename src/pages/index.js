// src/pages/index.js
import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import InstitutionalInfo from '../components/InstitutionalInfo';
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import TandemButton from "../components/button"
import Header from "../components/header"
// import Inicio from "../components/qr"
import CollapseContacto from "../components/collapsecontacto"
// import ModalApp from "../components/modal"
import CarousselApp from "../components/caroussel"
// import styles from '../components/index.module.css';

const links = [
  // {
  //   text: "Tutorial",
  //   url: "https://www.gatsbyjs.com/docs/tutorial",
  //   description:
  //     "Un gran lugar para comenzar si eres nuevo en el desarrollo web. Diseñado para guiarte a través de la configuración de tu primer sitio Gatsby.",
  // },
  // {
  //   text: "Ejemplos",
  //   url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
  //   description:
  //     "Una colección de sitios web que van desde muy básicos hasta complejos/completos que ilustran cómo realizar tareas específicas dentro de tus sitios Gatsby.",
  // },
  // {
  //   text: "Biblioteca de Plugins",
  //   url: "https://www.gatsbyjs.com/plugins",
  //   description:
  //     "Aprende a agregar funcionalidad y personalizar tu sitio o aplicación Gatsby con miles de plugins creados por nuestra increíble comunidad de desarrolladores.",
  // },
  // {
  //   text: "Construir y Hospedar",
  //   url: "https://www.gatsbyjs.com/cloud",
  //   description:
  //     "¡Ahora estás listo para mostrarle al mundo! Dale superpoderes a tu sitio Gatsby: Construye y hospeda en Gatsby Cloud. ¡Empieza gratis!",
  // },
]

const samplePageLinks = [
  {
    text: "Página 2",
    url: "page-2",
    badge: false,
    description:
      "Un ejemplo simple de cómo enlazar a otra página dentro de un sitio Gatsby",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Renderizado del lado del servidor", url: "using-ssr" },
  { text: "Generación Estática Diferida", url: "using-dsg" },
]

const moreLinks = [
  { text: "Aviso legal", url: "https://gatsby.dev/discord" },
  {
    text: "Accesibilidad",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Política de cookies",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Política de privacidad",
    url: "https://gatsbyjs.com/showcase/",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  
  <Layout>
    {/* <ModalApp /> */}
    <div className={styles.layoute}>
      <div className={styles.logo}>
        {/* <StaticImage
          src="../images/pn.png"
          loading="eager"
          width={150}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        /> */}
      </div>
      <h1 className={styles.titulo}>
        GENERADOR QR
        {/* Empleados de Patrimonio Nacional */}
      </h1>


      
      <div className={styles.textCenter}>
        <CarousselApp />
      </div>
      <div className={styles.botones}>
        <div className={styles.buttonContainer}>
        <TandemButton enlace="page-2" >Acceso QR</TandemButton>
        <TandemButton enlace="page-3" >Información institucional</TandemButton>
        </div>
      </div>
    </div>
    <CollapseContacto />
  </Layout>
)

export const Head = () => <Seo title="Inicio" />
export default IndexPage
