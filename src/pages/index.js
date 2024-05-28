import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import AlertButton from "../components/button1/button1"

const links = []

const samplePageLinks = []

const moreLinks = [
  {
    text: "Política de privacidad",
    url: "https://www.patrimonionacional.es/politica-de-privacidad",
  },
  {
    text: "Accesibilidad",
    url: "https://www.patrimonionacional.es/accesibilidad",
  },
  {
    text: "Politica de cookies",
    url: "https://www.patrimonionacional.es/politica-de-cookies",
  },
  {
    text: "Aviso legal",
    url: "https://www.patrimonionacional.es/aviso-legal",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/logopn2.png"
        loading="eager"
        width={150}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Acceso <b id="empleadosacceso">empleados</b>
      </h1>
    </div>


    <div className="botones">
      <AlertButton message="inicio sesion"> Acceso empleados </AlertButton>

      <br></br>
      <AlertButton message="patrimonio nacional">
        {" "}
        Información institucional{" "}
      </AlertButton>
    </div>


    
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
    
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
