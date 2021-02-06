import React from "react"
import bannerImg from "../images/banner.jpg"

import Img from "gatsby-image"

const Banner = ({siteMetadata}) => (
  <div className="banner"
    style={{
        margin: `0 auto`,
        maxWidth: 1920,
    }}
  >
    <div className="banner-title-block">
      <div className="banner-title-items">
      <h1>Кременець.</h1>
      <h2>Місто з історією</h2>
      <p>Мета - популяризації туристичного потенціалу краю.</p>
      </div>
    </div>
    <img src={bannerImg} alt="kremenets" alt="Кременець-місто з історією"/>
  </div>
)

export default Banner