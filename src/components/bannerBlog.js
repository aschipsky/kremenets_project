import React from "react"
import bannerImg from "../images/banner-blog.png"

const BannerBlog = () => (
  <div  className="banner"
    style={{
        margin: `0 auto`,
        maxWidth: 1920,
    }}
  >
    <img src={bannerImg} alt="kremenets"/>
    <h1>Цікаві історій міста</h1>
  </div>
)

export default BannerBlog