import React from "react"
import bannerImg from "../images/banner-blog.png"

const BannerBlog = () => (
  <div  className="banner"
    style={{
        margin: `0 auto`,
        maxWidth: 1920,
    }}
  >
    <div className="banner-title-block">
      <div className="banner-title-items">
      <h1>Історії Кременеччини</h1>
      <p>Мета - популяризації туристичного потенціалу краю.</p>
      </div>
    </div>
    <img src={bannerImg} alt="kremenets"/>
  </div>
)

export default BannerBlog