import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import LoginForm from "../components/LoginForm"
import Buttons from "../components/Buttons"
import Links from "../components/Links"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Header />
    <div className={styles.textCenter}>
      <img src="../images/fuente.png" alt="Fuente" />
    </div>
    <LoginForm />
    <Buttons />
    <Links />
  </Layout>
)

export const Head = () => <Seo title="Generador QR" />

export default IndexPage
