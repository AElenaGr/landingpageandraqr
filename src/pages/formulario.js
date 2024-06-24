import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./EmployeeLoginForm.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Login from "../components/LoginForm"

const EmployeeLoginForm = () => {
  return (
    <Layout>
      <div className="login-form-container">
        <form className="login-form">
          <StaticImage
            src="../images/Logo_de_Patrimonio_Nacional.svg.png"
            loading="eager"
            width={250}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          {/* <h2>Acceso de Empleados</h2>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Ingresar</button> */}

          <Login></Login>
          
          {/* <Link to="/p-registro" className="register-link">Registrarse</Link> */}
        </form>
      </div>
      <a href="/" role="button" className="button">
        Volver a inicio
      </a>
    </Layout>
  )
}

export default EmployeeLoginForm
export const Head = () => <Seo title="Acceso de Empleados" />
