import React from 'react';
import { Link } from 'react-router-dom';
import './springСleaning.css'

export default  class SpringCleaning extends React.Component {
  render(){
    return(
      <>
      <div className="images-text-home"></div>
      <div className="Style-springCleaning-home">
        <div className="vertical-menu">
          <h2>Услуги</h2>
          <h3>Для дома</h3>
            <Link to="/springСleaning"><span className="li-corp">-Генеральная уборка</span></Link>
            <hr></hr>
            <Link to="/cleaningAfterRepair"><span className="li-corp">-Уборка после ремонта</span></Link>
            <hr></hr>
            <Link to="/washingWindows"><span className="li-corp">-Качественное мытье окон и витражей</span></Link>
            <hr></hr>
            <Link to="/housekeeper"><span className="li-corp">-Домработница по вызову</span></Link>
            <hr></hr>
            <Link to="/sale"><span className="li-corp">-СКИДКИ</span></Link>
            <hr></hr>
           <h3>Для бизнеса</h3> 
            <Link to="/office"><span className="li-corp">-Офисам</span></Link>
            <hr></hr>
            <Link to="/shops"><span className="li-corp">-Магазинам и торговым центрам</span></Link>
            <hr></hr>
            <Link to="/hotel"><span className="li-corp">-Уборка отелей (гостиниц)</span></Link>
            <hr></hr>
            <Link to="/cleaningIndustrial"><span className="li-corp">-Уборка промышленных и производственных площадей</span></Link>
        </div>
      <div className="home-content">
        <h5> <Link to="/">Главная страница</Link>>>Генеральная уборка</h5>
        <h3 className="h3-home">Пугает перспектива надвигающейся генеральной уборки в квартире?</h3>
        <p className="p-home">Не стоит впадать в отчаяние: поручите это клининговой компании «БЛЕСК». Будьте уверены, уже сегодня ваш дом будет сиять идеальной чистотой, ведь профессиональный клининг – наша любимая работа.</p>
        <h3 className="h3-home">Поручите генеральную уборку квартиры нашей компании!</h3>
        <p className="p-home">Наш персонал справится с такой задачей, как генеральная уборка в квартире, в самые оперативные сроки, а результат будет неизменно блестящим – ведь когда за дело берутся настоящие профессионалы, дом преображается на глазах.</p>
        <p className="p-home">Что касается цен на наши клиниговые услуги, то они являются доступными практически для каждого. Представьте, что вы имеете возможность поручить трудоемкий и не слишком приятный процесс генеральной уборки вашей квартиры сотрудникам нашей компании, тем самым выкроив время на другие, более полезные и интересные дела.</p>
        <h4 className="h4-home">Дополнительно к генеральной уборке можно заказать <a className="a-windowCleaning" href="#">мойку окон.</a> <hr/> Цены на генеральную уборку (мойка окон не входит).<br></br> В стоимость входят все моющие средства и инвентарь необходимый для уборки, кроме пылесоса и стремянки. (см. ниже)</h4>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1-0">Площадь</span>     <span className="li-home-hover-1-0">Разовый заказ (сом)</span>  <span className="li-home-hover-1-0">Постоянный клиент (сом)</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">До 40 кв/м</span>  <span className="li-home-hover-1">2960</span> <span className="li-home-hover-1">2500</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">40-49 кв/м</span>  <span className="li-home-hover-1">3360</span>  <span  className="li-home-hover-1">2850</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">50-59 кв/м</span>  <span className="li-home-hover-1">3760</span>  <span className="li-home-hover-1">3200</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">60-69 кв/м</span>  <span className="li-home-hover-1">4160</span>  <span className="li-home-hover-1">3530</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">70-79 кв/м</span>  <span className="li-home-hover-1">4160</span>  <span className="li-home-hover-1">4160</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">80-89 кв/м</span>  <span className="li-home-hover-1">4960</span>  <span className="li-home-hover-1">4200</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">90-99 кв/м</span>  <span className="li-home-hover-1">5240</span>  <span className="li-home-hover-1">4450</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">100-124 кв/м</span><span className="li-home-hover-1">5560</span>  <span className="li-home-hover-1">4730</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">125-149 кв/м</span><span className="li-home-hover-1">5960</span>  <span className="li-home-hover-1">5060</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">150-174 кв/м</span><span className="li-home-hover-1">6560</span>  <span className="li-home-hover-1">5570</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">175-199 кв/м</span><span className="li-home-hover-1">7160</span>  <span className="li-home-hover-1">6080</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">200-249 кв/м</span><span className="li-home-hover-1">7760</span>  <span className="li-home-hover-1">6590</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">250-299 кв/м</span><span className="li-home-hover-1">8320</span>  <span className="li-home-hover-1">7070</span></div>
         <div className="l-ho-hov-b-1 allTable"><span className="li-home-hover-1">от 300 кв/м</span> <span className="li-home-hover-1">30 сом кв/м</span>  <span className="li-home-hover-1">25 сом кв/м</span></div>
        <h4 className="h4-home">Что входит в услугу генеральной уборки</h4>
        <h4 className="h4-home">Общие работы</h4>
        <ul>
          <li className="li-allworks-home">-сухая уборка; </li>
          <li className="li-allworks-home">-ручная хим.чистка ковров и ковровых покрытий; </li>
          <li className="li-allworks-home">-влажная уборка полов(включая балкон, лоджию);</li>
          <li className="li-allworks-home">-мойка плинтусов</li>
          <li className="li-allworks-home">-протирка подоконников, предметов интерьера, бытовой, аудио и видео-техники</li>
          <li className="li-allworks-home">-протирка пыли со всех осветительных приборов ( хрустальные люстры+300 cом шт.) </li>
          <li className="li-allworks-home">-протирка зеркал; </li>
          <li className="li-allworks-home">-уборка домашних вещей (раскладка в аккуратные стопочки);</li>
          <li className="li-allworks-home">-мойка дверных блоков, включая фурнитуру; </li>
          <li className="li-allworks-home">-протирка внутренних поверхностей шкафов (при освобожденных полках) </li>
          <li className="li-allworks-home">-уборка пылесосом мягкой мебели;</li>
          <li className="li-allworks-home">-уборка пылесосом штор и гардин;</li>
          <li className="li-allworks-home">-выведение средних и сильных загрязнений, находящихся на открытых поверхностях </li>
          <p className="p-home">Работа на кухне:</p>
          <li className="li-allworks-home">-протирка рабочей зоны вытяжки</li>
          <li className="li-allworks-home">-протирка наружной поверхности кухонной бытовой техники (СВЧ, посуд.машина, электрочайник и пр.) </li>
          <li className="li-allworks-home">-мойка фронтальной поверхности холодильника </li>
          <li className="li-allworks-home">-мойка кухонного фартука </li>
          <li className="li-allworks-home">-мойка фронтальной поверхности кухонных шкафов и мойка шкафов изнутри (при освобожденных полках)</li>
          <li className="li-allworks-home">-мойка посуды (без ограничений) </li>
          <li className="li-allworks-home">-вынос мусора ( не больше 2 пакетов)</li>
          <p className="p-home">Работы в санузлах:</p>
          <li className="li-allworks-home">-мытье сантехники (унитаз, умывальник, ванная, биде) с удалением известкового налета и водного камня</li>
          <li className="li-allworks-home">-мытье смесителей </li>
          <li className="li-allworks-home">-протирка зеркал, аксессуаров; шкафчиков</li>
          <li className="li-allworks-home">-уборка и мытье шкафчиков изнутри; (при освобожденных полках)</li>
          <li className="li-allworks-home">- мойка кафельной плитки с удалением известкого налета; </li>
          <li className="li-allworks-home">-мойка стиральной машины снаружи</li>
          <h4 className="h4-home">При необходимости список работ может быть существенно расширен. Обратите внимание на то, что в процессе генеральной уборки в квартире наши специалисты используют исключительно профессиональные, эффективные и экологически безопасные моющие и чистящие средства</h4>
        </ul>
        </div>
      </div>
        <h5> <Link to="/">Главная страница</Link>>>Генеральная уборка</h5>
      </>
    )
  }
}