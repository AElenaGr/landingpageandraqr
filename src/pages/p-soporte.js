import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Soporte from "../components/Soporte"

const SoportePage = () => (
  <Layout>
    <Seo title="Soporte Técnico" />
    <div className="layoute">
      <h1 className="titulo">
        Soporte Técnico
      </h1>
      <Soporte />
    </div>
  </Layout>
)

export default SoportePage
