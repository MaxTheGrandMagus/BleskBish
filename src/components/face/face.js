import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/face/face.css';

import imgHome from '../../images/images-home/logo-service-home.jpg';
import imgCorp from '../../images/images-corp/logo-service-corp.jpg';

class Face extends React.Component {
  render(){
    return (
      <>
        <div className="service_header">
          <div className="service_home">
            <center><img className="logo-img-home-corp" src={imgHome} width="70%" height="60%"></img></center>
            <div className="p-forHome">Для дома</div>
            <div className="p-uslug">Клининговые услуги</div>
            <p className="p-home-uslug">Наша компания проведет комплексную уборку любого помещения: квартиры, комнаты, загородного дома или коттеджа. 90% клиентов при обращении к нам становятся постоянным.</p> 
            <ul className="li-home-all">
              <Link to="/springСleaning"><li className="li-home">-Генеральная уборка</li></Link>
              <Link to="/cleaningAfterRepair"><li className="li-home">-Уборка после ремонта</li></Link>
              <Link to="/washingWindows"><li className="li-home">-Качественное мытье окон и витражей</li></Link>
              <Link to="/housekeeper"><li className="li-home">-Домработница по вызову</li></Link>
              <Link to="/sale"><li className="li-home">-СКИДКИ</li></Link>
           </ul>
          </div>
          <div className="line"></div>
            <div className="service_corp">
              <center><img className="logo-img-home-corp" src={imgCorp} width="70%" height="60%"></img></center>
              <div className="p-forHome">Для оргaнизации</div>
              <div className="p-uslug">Клининговые услуги</div>
              <p className="p-corp-uslug">Осуществляем качественные клининговые услуги для торговых, производственных и складских помещений. Все работы проводятся в сжатые сроки и под ключ.</p>
              <ul className="li-corp-all">
                <Link to="/office"><li className="li-corp-basic">-Офисам</li></Link>
                <Link to="/shops"><li className="li-corp-basic">-Магазинам и торговым центрам</li></Link>
                <Link to="/hotel"><li className="li-corp-basic">-Уборка отелей (гостиниц)</li></Link>
                <Link to="/cleaningIndustrial"><li className="li-corp-basic">-Уборка промышленных и производственных площадей</li></Link>
              </ul>  
              </div>
          </div>
      </>
    );
  };
};

export default Face;