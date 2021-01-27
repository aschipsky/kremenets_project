import React from "react"
import EmblaCarousel from "../components/EmblaCarousel";
import Banner from "../components/banner"
import bannerImg from "../images/kremenetssmoll.png"
import musem1Img from "../images/musem1.png"
import musem2Img from "../images/musem2.png"
import musem3Img from "../images/musem3.png"
import period1Img from "../images/period1.png"
import period2Img from "../images/period2.png"
import period3Img from "../images/period3.png"
import period4Img from "../images/period4.png"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'


const SLIDE_COUNT = 9;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const IndexPage = () => (
  
  <Layout>
      <Banner/>
      <section><h5 className="tour-title">Уся історія Кременеччини</h5></section>


      <sections className="position-relative skewed">
        <div id="rectangle">
          <img className="img" src={bannerImg} alt="kremenets"/>
          <p className="text">Кременець – одне з найдавніших міст України.  Також місто великої історії. У якому є багато історичних пам’яток і архітектур.</p>
        </div>
  </sections>


  <section>
    <div className="content position-relative">
        
          <div className="row">
              <div className="col-md-4">
                <img src={musem1Img} alt="kremenets"/>
              </div>
              <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                        <div className="block_title">
                            <a href="https://kremenets.city/read/longread/55957/scho-mozhna-podivitisya-u-kremeneckomu-muzei-ta-top-12-najcikavishih-eksponativ-iz-kozhnoi-eksponativ" className="places_card-link"></a>
                            <h2>Кременецький краєзнавчий музей</h2>
                            <p>Рекомендуємо відвідати Вам наш мальовничий музей. Де розкажуть багато чого цікавого.</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                        <img src={musem2Img} className="cards" alt="kremenets"/>
                      </div>
                      <div className="col-md-6">
                        <img src={musem3Img} className="cards" alt="kremenets"/>  
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </section>

  <section  id="section1">
    <div className="content">
          <div className="row">
              <div className="col-md-4">
                <div className="block_title-cards">
                  <h2 className="vertical_text">Литовський період</h2>
                  <a href="#/" className="places_card-link"></a>
                </div>
              </div>
              <div className="col-md-8">
                  <div className="row">
                      <div className="col-md-6">
                        <div>
                          <h2 className="places_card-title">Польський період</h2>
                          <img src={period2Img} className="card" alt="kremenets"/>
                          <a href="#/" className="places_card-link"></a>
                        </div>
                      </div>
                      <div className="col-md-6">
                       <div className="block_title-card">
                          <h2>Давньоруський період</h2>
                          <a href="#/" className="places_card-link"></a>
                       </div> 
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <h2 className="places_card-title">Російський період</h2>
                        <img src={period3Img} className="cards_card" alt="kremenets"/>
                        <a href="#/" className="places_card-link"></a>
                      </div>
                    </div>
                  </div>
              </div>
              
          </div>
      </div>
  </section>

  <section id="section2">
    <div>
      <br />
        <h5 className="tour-title">Визначні місця</h5>
      <br />
      <EmblaCarousel slides={slides} />
    </div>
  </section>

  
  </Layout>
)

export default IndexPage