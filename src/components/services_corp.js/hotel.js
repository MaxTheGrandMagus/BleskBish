import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav-bar/nav';
import './hotel.css';

import img1 from '../../images/advantages/002-quality.png'
import img2 from '../../images/advantages/003-eco.png'
import img3 from '../../images/advantages/004-cost.png'

export default  class Hotel extends React.Component {
  render(){
    return(
      <>
      <NavBar />
      <div className="image-corp-8"></div>
      <div className="basic-corp-8">
         <div class="vertical-menu-8">
          <h2 className="H32-corp8-8">Услуги</h2>
          <h3 className="H32-corp-8">Для дома</h3>
            <Link to="/springСleaning"><span className="li-corp-8">Генеральная уборка</span></Link>
            <hr></hr>
            <Link to="/cleaningAfterRepair"><span className="li-corp-8">Уборка после ремонта</span></Link>
            <hr></hr>
            <Link to="/washingWindows"><span className="li-corp-8">Качественное мытье окон и витражей</span></Link>
            <hr></hr>
            <Link to="/housekeeper"><span className="li-corp-8">Домработница по вызову</span></Link>
            <hr></hr>
            <Link to="/sale"><span className="li-corp-8">СКИДКИ</span></Link>
            <hr></hr>
           <h3 className="H32-corp-8">Для бизнеса</h3> 
            <Link to="/office"><span className="li-corp-8">Офисам</span></Link>
            <hr></hr>
            <Link to="/shops"><span className="li-corp-8">Магазинам и торговым центрам</span></Link>
            <hr></hr>
            <Link to="/hotel"><span className="li-corp-8">Уборка отелей</span></Link>
            <hr></hr>
            <Link to="/cleaningIndustrial"><span className="li-corp-8">Уборка промышленных и производственных площадей</span></Link>
            <div className="b-table-8">
              <div className="b-table-8-child">
                <img height="100px" src={img1}></img>
                <span font-size="20px">100%</span>
                <span>Satisfaction</span>
              </div>
              <div className="b-table-8-child">
                <img height="100px" src={img2}></img>
                <span>Eco-Friendly</span>
                <spna>Cleaning</spna>
                <spna>Products</spna>
              </div>
              <div className="b-table-8-child">
                <img height="100px" src={img3}></img>
                <span>Cost</span>
                <span>Effective</span>
              </div>
            </div>
        </div>
        <div className="corp-content-8">
        {/* <h5 className="h5-corp-8"><Link to="/">Главная страница</Link> >> Уборка отелей</h5> */}
        <h3 className="h3-corp-8">Уборка отелей </h3>
        <p className="p-corp-8">Для многих из нас отели и гостиницы на некоторое время становятся вторым домом, и при таких обстоятельствах становится естественным желание, чтобы в этом доме было уютно, тепло и чисто, однако создать чистоту в полной мере может отнюдь не каждая компания, специализирующаяся на клининге.
        Современный отель — это сложнейшее инженерное сооружение, в котором кроме номеров, холлов и коридоров имеется еще огромное количество лестниц, лифтов и служебных помещений, также нуждающихся в уборке.
        Качественно выполнить работу по уборке внутренних помещений позволяет наличие специальных знаний и практических навыков у тех работников, которые этим занимаются.
        Уборка отеля подразумевает не только умение работать со всевозможным специальным чистящим и моющим оборудованием, но и учет специфики материалов, которые использованы в напольных и стеновых поверхностях.
        В частности, ковры и ковровые покрытия, применяемые в коридорах и номерах отелей очень разнообразны, и универсального чистящего средства, обеспечивающего роскошный и ухоженный внешний вид каждого из них, не существует. Также часто в интерьере используется мрамор и он требует особого ухода, чтобы после уборки сохранялся блеск благородного камня, но при этом ноги постояльце не скользили по полам.
        Металлические украшения, встречающиеся в лифтах, вестибюле и на лестницах требуют особого внимания при выполнении уборки, т.к. большинство гостей отеля обращают внимание на детали в первую очередь.
        Для Клининоговой компании «БЛЕСК» важен каждый предмет интерьера, для нас не существует мелочей. Мы считаем, что любой отель должен быть не просто чистым, а безупречно чистым, и мы знаем, как реализовать это на практике.</p>
        <h4 className="h4-corp-8"><hr/> Цены на генеральную уборку (мойка окон не входит).<br></br> В стоимость входят все моющие средства и инвентарь необходимый для уборки, кроме пылесоса и стремянки. (см. ниже)</h4>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8-0">Площадь</span>   <span className="li-corp-hover-8-0">Разовый заказ (сом)</span>  <span className="li-corp-hover-8-0">Постоянный клиент (сом)</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">До 40 кв/м</span>  <span className="li-corp-hover-8">2960</span> <span className="li-corp-hover-8">2500</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">40-49 кв/м</span>  <span className="li-corp-hover-8">3360</span>  <span  className="li-corp-hover-8">2850</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">50-59 кв/м</span>  <span className="li-corp-hover-8">3760</span>  <span className="li-corp-hover-8">3200</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">60-69 кв/м</span>  <span className="li-corp-hover-8">4160</span>  <span className="li-corp-hover-8">3530</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">70-79 кв/м</span>  <span className="li-corp-hover-8">4160</span>  <span className="li-corp-hover-8">4160</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">80-89 кв/м</span>  <span className="li-corp-hover-8">4960</span>  <span className="li-corp-hover-8">4200</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">90-99 кв/м</span>  <span className="li-corp-hover-8">5240</span>  <span className="li-corp-hover-8">4450</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">100-124 кв/м</span><span className="li-corp-hover-8">5560</span>  <span className="li-corp-hover-8">4730</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">125-149 кв/м</span><span className="li-corp-hover-8">5960</span>  <span className="li-corp-hover-8">5060</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">150-174 кв/м</span><span className="li-corp-hover-8">6560</span>  <span className="li-corp-hover-8">5570</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">175-199 кв/м</span><span className="li-corp-hover-8">7160</span>  <span className="li-corp-hover-8">6080</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">200-249 кв/м</span><span className="li-corp-hover-8">7760</span>  <span className="li-corp-hover-8">6590</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">250-299 кв/м</span><span className="li-corp-hover-8">8320</span>  <span className="li-corp-hover-8">7070</span></div>
         <div className="l-ho-hov-b-8 allTable"><span className="li-corp-hover-8">от 300 кв/м</span> <span className="li-corp-hover-8">30 сом кв/м</span>  <span className="li-corp-hover-8">25 сом кв/м</span></div>
        <h4 className="h4-corp-8">Что входит в услугу генеральной уборки</h4>
        <h4 className="h4-corp-8">Общие работы</h4>
        <ul>
          <li className="li-allworks-corp">-сухая уборка; </li>
          <li className="li-allworks-corp">-ручная хим.чистка ковров и ковровых покрытий; </li>
          <li className="li-allworks-corp">-влажная уборка полов(включая балкон, лоджию);</li>
          <li className="li-allworks-corp">-мойка плинтусов</li>
          <li className="li-allworks-corp">-протирка подоконников, предметов интерьера, бытовой, аудио и видео-техники</li>
          <li className="li-allworks-corp">-протирка пыли со всех осветительных приборов ( хрустальные люстры+300 cом шт.) </li>
          <li className="li-allworks-corp">-протирка зеркал; </li>
          <li className="li-allworks-corp">-уборка домашних вещей (раскладка в аккуратные стопочки);</li>
          <li className="li-allworks-corp">-мойка дверных блоков, включая фурнитуру; </li>
          <li className="li-allworks-corp">-протирка внутренних поверхностей шкафов (при освобожденных полках) </li>
          <li className="li-allworks-corp">-уборка пылесосом мягкой мебели;</li>
          <li className="li-allworks-corp">-уборка пылесосом штор и гардин;</li>
          <li className="li-allworks-corp">-выведение средних и сильных загрязнений, находящихся на открытых поверхностях </li>
          <p className="p-corp-8">Работа на кухне:</p>
          <li className="li-allworks-corp">-протирка рабочей зоны вытяжки</li>
          <li className="li-allworks-corp">-протирка наружной поверхности кухонной бытовой техники (СВЧ, посуд.машина, электрочайник и пр.) </li>
          <li className="li-allworks-corp">-мойка фронтальной поверхности холодильника </li>
          <li className="li-allworks-corp">-мойка кухонного фартука </li>
          <li className="li-allworks-corp">-мойка фронтальной поверхности кухонных шкафов и мойка шкафов изнутри (при освобожденных полках)</li>
          <li className="li-allworks-corp">-мойка посуды (без ограничений) </li>
          <li className="li-allworks-corp">-вынос мусора ( не больше 2 пакетов)</li>
          <p className="p-corp-8">Работы в санузлах:</p>
          <li className="li-allworks-corp">-мытье сантехники (унитаз, умывальник, ванная, биде) с удалением известкового налета и водного камня</li>
          <li className="li-allworks-corp">-мытье смесителей </li>
          <li className="li-allworks-corp">-протирка зеркал, аксессуаров; шкафчиков</li>
          <li className="li-allworks-corp">-уборка и мытье шкафчиков изнутри; (при освобожденных полках)</li>
          <li className="li-allworks-corp">- мойка кафельной плитки с удалением известкого налета; </li>
          <li className="li-allworks-corp">-мойка стиральной машины снаружи</li>
          <h4 className="h4-corp-8">При необходимости список работ может быть существенно расширен. Обратите внимание на то, что в процессе генеральной уборки в квартире наши специалисты используют исключительно профессиональные, эффективные и экологически безопасные моющие и чистящие средства</h4>
        </ul>
        </div>
      </div>
    </>
    );
  };
};