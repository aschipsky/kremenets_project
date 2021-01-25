/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import facebookImg from "../images/facebook.png"
import instagramImg from "../images/instagram.png"
import telegramImg from "../images/telegram.png"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1920,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          <nav className="footer_nav">
                    <ul className="footer_menu">
                        <li className="footer_menu-item">
                            <a href="https://www.facebook.com/profile.php?id=100023016965203" target="blank" className="footer_manu-link">
                              <img src={facebookImg} alt="facebook"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="footer_menu">
                        <li className="footer_menu-item">
                            <a href="https://www.instagram.com/andriishchipskii/?hl=ru" target="blank" className="footer_manu-link">
                              <img src={instagramImg} alt="instagram"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="footer_menu">
                        <li className="footer_menu-item">
                            <a href="https://www.youtube.com/channel/UCNwvqeBNr30fXGotrCvCkbA" target="blank" className="footer_manu-link">
                              <img src={telegramImg} alt="telegram"/>
                            </a>
                        </li>
                    </ul>
                </nav>
        </footer>
      </div>
    </>
  )
}

export default Layout