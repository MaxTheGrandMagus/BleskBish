import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav-bar/nav';
import './cleaningIndustrial.css'

import img1 from '../../images/advantages/002-quality.png'
import img2 from '../../images/advantages/003-eco.png'
import img3 from '../../images/advantages/004-cost.png'

export default  class CleaningIndustrial extends React.Component {
  render(){
    return(
      <>
      <NavBar />
       <div className="image-corp-9"></div>
      <div className="basic-corp-9">
        <div class="vertical-menu-9">
          <h2 className="H32-corp-9">Услуги</h2>
          <h3 className="H32">Для дома</h3>
            <Link to="/springСleaning"><span className="li-corp-9">Генеральная уборка</span></Link>
            <hr></hr>
            <Link to="/cleaningAfterRepair"><span className="li-corp-9">Уборка после ремонта</span></Link>
            <hr></hr>
            <Link to="/washingWindows"><span className="li-corp-9">Качественное мытье окон и витражей</span></Link>
            <hr></hr>
            <Link to="/housekeeper"><span className="li-corp-9">Домработница по вызову</span></Link>
            <hr></hr>
            <Link to="/sale"><span className="li-corp-9">СКИДКИ</span></Link>
            <hr></hr>
           <h3 className="H32">Для бизнеса</h3> 
            <Link to="/office"><span className="li-corp-9">Офисам</span></Link>
            <hr></hr>
            <Link to="/shops"><span className="li-corp-9">Магазинам и торговым центрам</span></Link>
            <hr></hr>
            <Link to="/hotel"><span className="li-corp-9">Уборка отелей</span></Link>
            <hr></hr>
            <Link to="/cleaningIndustrial"><span className="li-corp-9">Уборка промышленных и производственных площадей</span></Link>
            <div className="b-table-9">
              <div className="b-table-9-child">
                <img height="100px" src={img1}></img>
                <span font-size="20px">100%</span>
                <span>Satisfaction</span>
              </div>
              <div className="b-table-9-child">
                <img height="100px" src={img2}></img>
                <span>Eco-Friendly</span>
                <spna>Cleaning</spna>
                <spna>Products</spna>
              </div>
              <div className="b-table-9-child">
                <img height="100px" src={img3}></img>
                <span>Cost</span>
                <span>Effective</span>
              </div>
            </div>
        </div>
        <div className="corp-content-9">
        {/* <h5 className="h5-corp-9"><Link to="/">Главная страница</Link> >>Уборка промышленных и производственных площадей</h5> */}
        <h3 className="h3-corp-9">Уборка промышленных и производственных площадей</h3>
        <p className="p-corp-9">Профессиональная уборка промышленных и производственных площадей, или как ее еще называют, промышленный клининг, заключается в уборке и чистке производственных площадок и сооружений, также сюда можно отнести и промышленный альпинизм. Промышленный клининг имеет свою специфику в отличие от бытовой уборки. На каждом производстве есть определенный набор графиков, технологических процессов, производственных загрязнений и отходов, и, естественно, эти факторы обуславливают особую технологию уборки.</p>
        <p className="p-corp-9">Объектами промышленного клининга могут быть фабрики, заводы, производства, а также относящиеся к ним функциональные сооружения.</p>
        <span className="p-corp-9">
        На сегодняшний день такая Клининговая услуга как уборка промышленных и производственных площадей является самой распространенной. Основной сложностью здесь является огромное архитектурное разнообразие объектов, поэтому к уборке подобного рода помещений специалисты нашей компании подходят индивидуально в каждом конкретном случае и предлагают обширный перечень услуг. 
        <h3>Уборка промышленных и производственных площадей включает следующие виды работ:</h3> 
          <ul>
            <li className="li-allworks-corp-9">Мытье стен и потолков;</li>
            <li className="li-allworks-corp-9">удаление пыли и грязи с витрин;</li>
            <li className="li-allworks-corp-9">Полок прилавков и оборудования;</li>
            <li className="li-allworks-corp-9">А также ручная или машинная влажная уборка напольных поверхностей;</li>
            <li className="li-allworks-corp-9">Уборка эскалаторов;</li>
            <li className="li-allworks-corp-9">Истка зеркал и различных панелей;</li>
            <li className="li-allworks-corp-9">Уорка дверей;</li>
            <li className="li-allworks-corp-9">Полировка декоративных элементов из цветных металлов.</li>
          </ul>
        </span>
        <p className="p-corp-9">Промышленный клининг подразумевает применение инновационных технологий, профессионального специализированного оборудования с высокой производительностью и выносливостью, профессиональные чистящие и моющие средства, которые наиболее эффективно справляются с сильными загрязнениями. Опытные специалисты нашей компании при осуществлении уборки производственных площадей решат главную задачу промышленного клининга - правильный подбор метода очистки объекта и максимально точно подберут необходимые чистящие средства.</p>
        <p className="p-corp-9">Еще одной сложностью услуги промышленного клининга является то, что за рабочий день через производственные и промышленные помещения проходит огромное количество людей, которые оставляют после себя на полу следы от обуви, пятна от жвачки и т.д. Наши работники произведут уборку помещений так, что не останется ни следов пятен, ни пыли и грязи как в самом производственном помещении, так и на лестничных клетках, пролетах, лифтах и холлах.</p>
        <span>
          <h3>Перечень услуг компании по данному направлению:</h3>
          <ul>
            <li className="li-allworks-corp-9">Уборка производственных площадей (объекты пищевой промышленности, металлургические предприятия);</li>
            <li className="li-allworks-corp-9">Чистка технологического оборудования; </li>
            <li className="li-allworks-corp-9">Уборка логистических центров и складских помещений; </li>
            <li className="li-allworks-corp-9">Химическая очистка или замена грязезащитных покрытий и др.</li>
          </ul>
        </span>
        <h3>Стоимость услуг по уборке промышленных и производственных помещений:</h3>
        <div className="allTable-corp-9">
          <span className="exp-corp-9">Комплексная уборка помещений</span> <span>м²</span> <span>40-70 сом.</span>
          <span className="exp-corp-9">Комплексная уборка помещений после ремонта</span> <span>м²</span> <span>50-250 сом (в зависимости от степени загрязнения)</span>
          <span className="exp-corp-9">Регулярная уборка помещений</span> <span>м²</span> <span>30-55 сом</span>
        </div>
      </div>
      </div>
      </>
    );
  };
};