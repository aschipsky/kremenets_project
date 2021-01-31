import React from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';

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
  <button className="header_link" onClick={() => scrollTo('#section1')}>Історія</button>
  <button className="header_link" onClick={() => scrollTo('#section2')}>Визначні місця</button>
  <Link className="header_link" to="/blog">Блог</Link>
    </div>
    
  </header>
)

export default Header