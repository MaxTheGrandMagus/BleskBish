import React from 'react';
import { Link } from 'react-router-dom';
import './sale.css';

import img1 from '../../images/advantages/002-quality.png'
import img2 from '../../images/advantages/003-eco.png'
import img3 from '../../images/advantages/004-cost.png'

export default  class Sale extends React.Component {
  render(){
    return(
      <>
        <div className="image-sale"></div>

        <div className="Style-sale-home">

          <div className="vertical-menu-5">
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

              <div className="b-table-5">
                <div className="b-table-5-child">
                  <img height="100px" src={img1}></img>
                  <span font-size="20px">100%</span>
                  <span>Satisfaction</span>
                </div>
                <div className="b-table-5-child">
                  <img height="100px" src={img2}></img>
                  <span>Eco-Friendly</span>
                  <spna>Cleaning</spna>
                  <spna>Products</spna>
                </div>
                <div className="b-table-5-child">
                  <img height="100px" src={img3}></img>
                  <span>Cost</span>
                  <span>Effective</span>
                </div>
            </div>
          </div>

          <div className="home-content-5">
            <h5> <Link to="/">Главная страница</Link>>>Скидки</h5>
            <h2 className="h3-home">Программы для постоянных клиентов</h2>
            <ul>
              <p className="p-home">1. «Постоянный клиент»</p>

              <li className="p-home-5">Если Вам требуется постоянная уборка для поддержания порядка и чистоты в квартире, то эта программа - для Вас!</li>
              <li className="p-home-5">Ваша постоянная скидка на генеральную уборку 15%!</li>
              <li className="p-home-5">А также - 10% скидка на все наши услуги!</li>
              <li className="p-home-5">Для того, чтобы получить обслуживание по программе "Постоянный клиент ", Вам нужно заказывать у нас генеральную уборку не реже 2 разa в 3 месяца.</li>
              <li className="-phome-5">Уже с третьего заказа Вы получите скидки!!!</li>

              <p className="p-home">2. «VIP-клиент»</p>

              <li className="p-home-5">«VIP-клиент» - программа для тех, кто хотел бы переложить все заботы по уборке квартиры на нас.</li>
              <li className="p-home-5">VIP-клиенты получают скидку 33% на периодическую уборку,</li>
              <li className="p-home-5">1 раз в 3 месяца - проведение генеральной уборки в квартире со скидкой 25%! а также 10% скидки на все наши услуги.</li>
              <li className="p-home-5">Кроме того, для VIP-клиентов предусмотрено:</li>
              <li className="p-home-5">- 2 раза в год -мойка окон изнутри и снаружи бесплатно!</li>
              <li className="p-home-5">- 1 раз в 3 месяца: мойка изнутри - кухонных шкафов (при освобожденных полках), холодильника, духовки, СВЧ, бесплатно!</li>
              <li className="p-home-5">Вы можете стать VIP-клиентом, если Вы заказываете периодическую уборку не реже 4-х раз в месяц.</li>
            </ul>
            <h5> <Link to="/">Главная страница</Link>>>Скидки</h5>
          </div>

        </div>
      </>
    );
  };
};