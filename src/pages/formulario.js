import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./EmployeeLoginForm.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LoginForm from "../components/login"

const EmployeeLoginForm = () => {
  return (
    <Layout>
      <div className="login-form-container">
        <div className="login-form">
          <StaticImage
            src="../images/Logo_de_Patrimonio_Nacional.svg.png"
            loading="eager"
            width={250}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          <LoginForm></LoginForm>
        </div>
      </div>

      
    </Layout>
  )
}
export default EmployeeLoginForm
export const Head = () => <Seo title="Acceso de Empleados" />
