import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header"
import Footer from "./footer"
import "./css/layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
    >
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout



