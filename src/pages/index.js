import React from "react"
import Banner from "../components/banner"
import bannerImg from "../images/kremenetssmoll.png"
import musem1Img from "../images/musem1.png"
import musem2Img from "../images/musem2.png"
import musem3Img from "../images/musem3.png"

import Layout from "../components/layout"

import 'bootstrap/dist/css/bootstrap.min.css'


const IndexPage = () => (
  <Layout>
      <Banner/>
      <section id="history">
        <br />
        <p className="tour-title">Уся історія Кременеччини</p>
        <br />
        <div id="rectangle">
          <img src={bannerImg} alt="kremenets"/>
          <p className="text">Кременець – одне з найдавніших міст України.  Також місто великої історії. У якому є багато історичних пам’яток і архітектур.</p>
        </div>

        

  
  </section>
  <section>
    <div className="content">
          <div className="row">
              <div className="col-md-4">
                <img src={musem1Img} alt="kremenets"/>
              </div>
              <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                        <div className="block_title">
                            <h2>Кременецький краєзнавчий музей</h2>
                            <p>Рекомендуємо відвідати Вам наш мальовничий музей</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <img src={musem2Img} alt="kremenets"/>
                      </div>
                      <div className="col-md-6">
                          <img src={musem3Img} alt="kremenets"/>  
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </section>
  </Layout>
)

export default IndexPage