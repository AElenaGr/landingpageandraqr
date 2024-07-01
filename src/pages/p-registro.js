import React, { useState } from "react"
import "./EmployeeLoginForm.css"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Registro from "../components/c-registrar"

const Register = () => {
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
          <h2>Registro</h2>

          <Registro></Registro>
        </div>
      </div>
    </Layout>
  )
}

export default Register
