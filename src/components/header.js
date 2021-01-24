import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      position: `absolute`,
      width:`100%`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1920,
        padding: `1.45rem 1.0875rem`,
      }}
    >
  <Link className="header_link" to="/">Головна</Link>
  <Link className="header_link" to="/">Історія</Link>
  <Link className="header_link" to="/">Визначні місця</Link>
  <Link className="header_link" to="/blog/">Блог</Link>
    </div>
    
  </header>
)

export default Header