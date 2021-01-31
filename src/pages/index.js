import React, {useState} from "react"
import EmblaCarousel from "../components/EmblaCarousel";
import Modal from 'react-bootstrap/Modal'
import Banner from "../components/banner"
import bannerImg from "../images/kremenetssmoll.png"
import musem1Img from "../images/musem1.png"
import musem2Img from "../images/musem2.png"
import musem3Img from "../images/musem3.png"
import period2Img from "../images/period2.png"
import period3Img from "../images/period3.png"
import periodphotoImg from "../images/periodphoto.jpg"
import periodphoto2Img from "../images/periodphoto2.jpg"
import periodphoto3Img from "../images/periodphoto3.jpg"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'

const SLIDE_COUNT = 8;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const IndexPage = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);

  const handleShow4 = () => setShow4(true);
  const handleClose4 = () => setShow4(false);

  return  (
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
                <div className="block_title-cards" onClick={handleShow}>
                  <h2 className="vertical_text">Литовський період</h2>
                </div>
              </div>
              <div className="col-md-8">
                  <div className="row">
                      <div className="col-md-6">
                        <div onClick={handleShow2}>
                          <h2 className="places_card-title">Польський період</h2>
                          <img src={period2Img} className="card" alt="kremenets"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                       <div className="block_title-card" onClick={handleShow3}>
                          <h2>Давньоруський період</h2>
                       </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div onClick={handleShow4}>
                        <h2 className="places_card-title">Російський період</h2>
                        <img src={period3Img} className="cards_card" alt="kremenets"/>
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

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Литовський період</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={periodphoto2Img}/>Після загибелі Галицько-Волинської держави місто переходило з рук у руки, 1382 остаточно відійшло до литовських князів. У 2-й пол. 14 ст. замість дерев'яноземляних укріплень збудовано кам'яний замок. На початку 15 ст. тут деякий час перебував зі своїм двором великий князь литовський Вітовт, сидів у в'язниці його суперник великий князь литовський Свидригайло, який 1438 надав Кременцю маґдебурзьке право. У цей час в місті почали селитися євреї. Численність єврейського населення Кременця збільшилася до 240 осіб (48 дворів) в 1552 році до 500 у 1578 році і 854 (15 % загального населення) у 1629 році. Наприкінці 15 ст. внаслідок нападів татар місто знелюдніло, у 2-й третині 16 ст., під час перебування в руках віленського біскупа Януша (1529-15¬35) та королеви Бони (1536—1556) відродилося й перетворилося на один із провідних економічних центрів регіону. Король польський і великий князь литовський Сигізмунд I Старий передає 4 квітня 1536 року Кременецький замок із селами своїй дружині Боні Сфорца, яка володіє замком у 1536—1556 роках, і на честь якої, за однією з версій, названа замкова гора. Бона суттєво укріпила замок, який на той час мав три вежі і досить високі стіни з гарматами. В середині замку було розташовано казарми для гарнізону, різні господарські споруди, порохівниці тощо.</Modal.Body>
      </Modal>
      
    <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Польський період</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={periodphotoImg}/>1569 в результаті Люблінської унії Кременець відійшов до Польщі, а разом із нею до Речі Посполитої. У 1-й пол. 17 ст. місто стало важливим осередком культурного й релігійного життя Південної Волині. Кременчани взяли участь у визвольній війні українського народу (1648—1654). Восени 1648 козаки та місцеві повстанці здобули й зруйнували замок. Восени 1648 року козацький полковник Максим Кривоніс підійшов з військом до Кременецького замку і взяв його у облогу. В жовтні, після шеститижневої облоги із тривалими запеклими боями твердиню було здобуто, польський гарнізон взято у полон, а замок повністю зруйновано, єврейське населення дуже постраждало від знущань козаків. З того часу Кременецька твердиня вже не була відбудована. За Вічним миром 1686 Кременець залишився в Речі Посполитій. 1692 в усіх установах впровадили польську мову, а на початку 18 ст. православні храми перетворили на уніатські. У 2-й пол. 18 ст. в Кременці діяли уніатський (базиліанський) і 4 католицькі (францисканський, єзуїтський, реформатський і тринітарський) монастирі та кілька уніатських церков. <p>Матеріали взято із:http://wiki.fizmat.tnpu.edu.ua/index.php/%D0%9A%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B5%D1%86%D1%8C</p></Modal.Body>
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Давньоруський період</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/*<img src={periodphoto1Img}/>*/}За деякими джерелами, Кременецька фортеця була збудована ще за дохристиянських часів у VIII—IX століттях і існує гіпотеза, що після утворення в IX столітті Київської держави, Кременець ввійшов до її складу. Крім того, перші згадки про Кременець є у польських енциклопедичних словниках під 1064 роком. У 2007 році в центрі старовинного міста археологи розкопали залишки давньої будівлі, датованої Х століттям. З Кременецькою фортецею пов'язана одна легенда про дівчину Ірву, згадно з якою авари штурмували місцеву фортецю, яку обороняли дуліби[1]. Перша писемна згадка — 1227, коли тогочасний володар замку Мстислав Удатний вщент розбив під містом угорські війська короля Андрія ІІ. На початку 1241 Кременець вистояв перед ордами Батия, 1254 витримав облогу хана Куремси. 1259 на вимогу хана Бурундая оборонні споруди розібрали.</Modal.Body>
      </Modal>

      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Російський період</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={periodphoto3Img}/>За 3-м поділом Речі Посполитої (1795) Кременець відійшов до Російської імперії. Спочатку місто включили в Подільську, а 1796 — Волинську губернії. 1805 тут відкрилася Вища Волинська гімназія, 1819 реорганізована у Волинський ліцей (діяв до 1833). Місто стало авторитетним центром освіти й науки й отримало образну назву «Волинські Афіни». 1830-ті внаслідок запровадження у державних установах російської мови, заміни Литовського Статуту російським законодавством, закриття ліцею та францисканського й базиліанського монастирів Кременець остаточно втратив риси повітового центру Речі Посполитої і перетворився на провінційне місто Російської імперії. Ліцей мав велику бібліотеку (понад 50000 томів), у тому числі 1500 інкунабул (першодруків, надрукованих до 1500 р.). На базі бібліотеки ліцею у 1834 р. був створений Київський університет. В 1897 році єврейська громада Кременця налічувала 6539 осіб (37 % населення). Промислове піднесення останніх десятиліть 19 ст. мало позначилося на житті Кременця. Найбільше підприємство 1899 — сірникова фабрика, де працювало 25 робітників. Завдяки відкриттю покладів бурого вугілля, на розробку якого покладали великі надії, наприкінці 19 ст. проклали залізницю (введена в експлуатацію 1896). Із освітніх закладів на початку 20 ст. діяли Волинська духовна семінарія (1838—1902), жіноче єпархіальне (1836—1921), чоловіче духовне (1885—1921), комерційне (1904—1921), двокласне міське училища, приватна жіноча гімназія, 6 початкових шкіл</Modal.Body>
      </Modal>
  
  </Layout>
  )
}

export default IndexPage