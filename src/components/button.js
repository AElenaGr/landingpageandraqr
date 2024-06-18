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
        margin: "0.2em",
        textAlign: "center",
        padding: "0.5em 1em",

        background: "linear-gradient(0deg, rgba(173,195,34,1) 0%, rgba(253,187,45,1) 100%)",
        color: "#fff",
        display: "inline-block",
      }}
    >
      {children}
    </a>
  )
}

export default TandemButton


