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
       <div className="row">
        <div className="col-md-6"> 
          <div className="footer_title">
            © {new Date().getFullYear()}, Creator
            {` `}
            <a href="https://github.com/aschipsky">GitHub</a>
          </div>
        </div> 
              <div className="col-md-6">
                <nav className="footer_nav">
                    <ul className="footer_menu">
                        <li className="footer_menu-item">
                            <a href="https://www.facebook.com/kremenets.your.city/" target="blank" className="footer_manu-link">
                              <img src={facebookImg} alt="facebook"/>
                            </a>
                        </li>
                        <li className="footer_menu-item">
                            <a href="https://www.instagram.com/kremenets.city/" target="blank" className="footer_manu-link">
                              <img src={instagramImg} alt="instagram"/>
                            </a>
                        </li>
                        <li className="footer_menu-item">
                            <a href="https://www.youtube.com/channel/UCNwvqeBNr30fXGotrCvCkbA" target="blank" className="footer_manu-link">
                              <img src={telegramImg} alt="telegram"/>
                            </a>
                        </li>
                    </ul>
                </nav>
              </div>
        </div>      
       </footer>
      </div>
    </>
  )
}

export default Layout