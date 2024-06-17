import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/layout.css"
import TandemButton from "../components/button"
import Header from "../components/header"
import CollapseContacto from "../components/collapsecontacto"
import CarousselApp from "../components/caroussel"
import AlertButton2 from "../components/buttoninstitucional"



const IndexPage = () => (
  <Layout>
    
    <div className={styles.layoute}>
      <div className={styles.logo}></div>
      <h1 className={styles.titulo}>
        GENERADOR QR
        
      </h1>

      <div className={styles.textCenter}>
        <CarousselApp />
      </div>

      <div className={styles.botones}>
        <div className={styles.buttonContainer}>
          <TandemButton enlace="formulario">Acceso Empleados</TandemButton>
          <TandemButton enlace="page-2">Acceso QR</TandemButton>
          <AlertButton2 enlace="page-3">Información institucional</AlertButton2>
        </div>
      </div>
    </div>
    <CollapseContacto />
    
  </Layout>
)

export const Head = () => <Seo title="Inicio" />
export default IndexPage