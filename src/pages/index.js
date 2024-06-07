// src/pages/index.js
import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import InstitutionalInfo from '../components/InstitutionalInfo';
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/layout.css"
import TandemButton from "../components/button"
import Header from "../components/header"
// import Inicio from "../components/qr"
import CollapseContacto from "../components/collapsecontacto"
// import ModalApp from "../components/modal"
import CarousselApp from "../components/caroussel"
// import styles from '../components/index.module.css';
// index.js
// import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    {/* <ModalApp /> */}
    <div className={styles.layoute}>
      <div className={styles.logo}></div>
      <h1 className={styles.titulo}>
        GENERADOR QR
        {/* Empleados de Patrimonio Nacional */}
      </h1>

      <div className={styles.textCenter}>
        <CarousselApp />
      </div>

      <div className={styles.botones}>
        <div className={styles.buttonContainer}>
          <TandemButton enlace="page-2">Acceso QR</TandemButton>
          <TandemButton enlace="page-3">Información institucional</TandemButton>
        </div>
      </div>
    </div>
    <CollapseContacto />
  </Layout>
)

export const Head = () => <Seo title="Inicio" />
export default IndexPage
