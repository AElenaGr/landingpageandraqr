// src/pages/index.js

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CarousselApp from "../components/caroussel"
import CollapseContacto from "../components/collapsecontacto"

const IndexPage = () => (
  <Layout>
    <div className="layoute">
      <div className="logo"></div>
      <h1 className="titulo">
        GENERADOR QR
      </h1>

      <div className="textCenter">
        <CarousselApp />
      </div>
    </div>
    <CollapseContacto />
  </Layout>
)

export const Head = () => <Seo title="Inicio" />
export default IndexPage
