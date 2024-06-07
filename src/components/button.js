// TandemButton.js
import React from "react"

function TandemButton({ enlace, children }) {
  return (
    <a
      href={enlace}
      role="button"
      className="btn btn-primary button centered-button"
      style={{
        fontSize: "1.2em",
        margin: "0.7em",
        textAlign: "center",
        padding: "0.5em 1em",
      }}
    >
      {children}
    </a>
  )
}

export default TandemButton
