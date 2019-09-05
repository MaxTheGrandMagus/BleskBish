import React from 'react';
import { Link,} from 'react-router-dom';

import img1 from '../../images/advantages/002-quality.png'
import img2 from '../../images/advantages/003-eco.png'
import img3 from '../../images/advantages/004-cost.png'

export default  class Office extends React.Component {
  render(){
    return(
      <>
        <div className="image-office"></div>

        <div className="Style-office-corp">

          <div class="vertical-menu-6">
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

              <div className="b-table-6">
                <div className="b-table-6-child">
                  <img height="100px" src={img1}></img>
                  <span font-size="20px">100%</span>
                  <span>Satisfaction</span>
                </div>
                <div className="b-table-6-child">
                  <img height="100px" src={img2}></img>
                  <span>Eco-Friendly</span>
                  <spna>Cleaning</spna>
                  <spna>Products</spna>
                </div>
                <div className="b-table-6-child">
                  <img height="100px" src={img3}></img>
                  <span>Cost</span>
                  <span>Effective</span>
                </div>
            </div>
          </div>

          <div className="basic-corp">
            <h5><Link to="/">Главная страница</Link> >>Для офиса</h5>
            <h3 className="h3-corp-1">Профессиональная уборка офисов </h3>
            <p className="p-corp-1">Офис, который сверкает чистотой и свежестью — это, во-первых, лицо компании в глазах потенциальных клиентов и посетителей, а во-вторых — это залог здоровья, работоспособности и отличного настроения сотрудников. Уборка офисных помещений компанией «БЛЕСК» выполняется с использованием современного профессионального оборудования и натуральных моющих средств, которые не вызывают аллергии и дискомфорта даже у самых чувствительных людей. В уборку офисов может быть включен самый разнообразный набор услуг, от поверхностной клининговой уборки до генеральной уборки офиса или уборки после ремонта или строительных работ. Сотрудники нашей компании производят уборку офисов по индивидуальному для каждого заказчика, графику, в удобное для него время дня или ночи. Уборка вашего офиса специалистами нашей компании не вызовет никаких сложностей в вашей работе. Вы удивитесь, насколько может быть незаметной для Вас уборка офиса, если доверить ее компании «БЛЕСК».</p>
            <p className="p-corp-1-1">Наша компания поможет вам:</p>
            <ul>
              <li className="li-corp-1">Справиться с проблемами по содержанию и уборке офиса, не привлекая к этому своих сотрудников и не отвлекая их от основной работы; </li>
              <li className="li-corp-1">Достичь и поддерживать на высоком уровне определенный стандарт качества, который по каким либо причинам невозможно удерживать при работе нанятого персонала; </li>
              <li className="li-corp-1 mrg-btn">Сократить возможные затраты и избежать риска, которые могут появиться при найме неквалифицированного персонала для уборки вашего офиса.</li>
            </ul>
            <h3 className="p-corp-1-1">Стоимость профессиональной уборки офисов (уборка производственных, складских, торговых и др. коммерческих помещений)</h3>
            <div className="table-corp-1">
              <span className="span-allworks-corp-1">Ежедневная комплексная уборка помещений</span>   <span> м²</span>   <span>от 15 сом</span>
              <span className="span-allworks-corp-1">Генеральная комплексная уборка помещений</span>   <span>м²</span>   <span>от 35 сом</span>
              <span className="span-allworks-corp-1">Генеральная комплексная уборка помещений после ремонта и строительства</span>   <span>м²</span>   <span>от 25 сом</span>
              </div>
            <h5><Link to="/">Главная страница</Link> >>Для офиса</h5>  
          </div>

        </div>
      </>
    );
  };
};