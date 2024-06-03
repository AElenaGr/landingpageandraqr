import * as React from "react"

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
    text: "Política de cookies",
    url: "https://www.patrimonionacional.es/politica-de-cookies",
  },
  {
    text: "Aviso legal",
    url: "https://www.patrimonionacional.es/aviso-legal",
  },
]

const Links = () => (
  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={link.url}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </div>
)

export default Links
