import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav-bar/nav';
import './cleaningAfterRepair.css';

import img1 from '../../images/advantages/002-quality.png';
import img2 from '../../images/advantages/003-eco.png';
import img3 from '../../images/advantages/004-cost.png';

export default  class CleaningAfterRepair extends React.Component {
  render(){
    return(
      <>
      <NavBar />
        <div className="image-home-2"></div>
        <div className="basic-home-2">
         <div class="vertical-menu-2">
          <h2 className="H32-home2-2">Услуги</h2>
          <h3 className="H32-home-2">Для дома</h3>
            <Link to="/springСleaning"><span className="li-home-2">Генеральная уборка</span></Link>
            <hr></hr>
            <Link to="/cleaningAfterRepair"><span className="li-home-2">Уборка после ремонта</span></Link>
            <hr></hr>
            <Link to="/washingWindows"><span className="li-home-2">Качественное мытье окон и витражей</span></Link>
            <hr></hr>
            <Link to="/housekeeper"><span className="li-home-2">Домработница по вызову</span></Link>
            <hr></hr>
            <Link to="/sale"><span className="li-home-2">СКИДКИ</span></Link>
            <hr></hr>
           <h3 className="H32-home-2">Для бизнеса</h3> 
            <Link to="/office"><span className="li-home-2">Офисам</span></Link>
            <hr></hr>
            <Link to="/shops"><span className="li-home-2">Магазинам и торговым центрам</span></Link>
            <hr></hr>
            <Link to="/hotel"><span className="li-home-2">Уборка отелей</span></Link>
            <hr></hr>
            <Link to="/cleaningIndustrial"><span className="li-home-2">Уборка промышленных и производственных площадей</span></Link>
            <div className="b-table-2">
              <div className="b-table-2-child">
                <img height="100px" src={img1}></img>
                <span font-size="20px">100%</span>
                <span>Satisfaction</span>
              </div>
              <div className="b-table-2-child">
                <img height="100px" src={img2}></img>
                <span>Eco-Friendly</span>
                <spna>Cleaning</spna>
                <spna>Products</spna>
              </div>
              <div className="b-table-2-child">
                <img height="100px" src={img3}></img>
                <span>Cost</span>
                <span>Effective</span>
              </div>
            </div>
        </div>
        <div className="home-content-2">
     {/* <h5 className="h5-home-2"><Link to="/">Главная страница</Link> >>Уборка после строительства или ремонта</h5> */}
      <h2 className="h2-header">Уборка после ремонта квартир помещений офисов</h2>
      <p className="p-home">Бригада наших сотрудников выезжает на объект с профессиональным оборудованием, а также специальными средствами, позволяющими справиться практически с любыми загрязнениями в квартире.</p>
      <h3>В послеремонтную уборку входит:</h3>
      <ul type="disc">
      <li className="p-home-2">-мойка внутренней отделки балконов и лоджий! </li>
      <li className="p-home-2">-уборка пола: удаление строительной грязи и пыли, пятен цемента, краски и пр.</li>
      <li className="p-home-2">-удаление пыли со всех поверхностей: корпусная мебель, светильники(хрустальные люстры + 300 сом 1 шт.), подоконники, радиаторы, двери, фурнитура, вся бытовая, аудио и видео-техника </li>
      <li className="p-home-2">-мойка сантехники, удаление загрязнений с плитки</li>
      <li className="p-home-2">-уборка межквартирного тамбура </li>
      <li className="p-home-2">-удаление пыли со стен и потолков</li>
      <li className="p-home-2">-вынос мусора</li>
      <li className="p-home-2">В стоимость входят все моющие средства, инвентарь и оборудование необходимое для уборки.</li>
      </ul>
      <div className="allTable">
      <span className="table"> </span>   <span>Уборка без мебели</span>   <span>Уборка с мебелью</span>
      <span className="table">до 40 кв/м</span>   <span>2380</span>   <span>2780</span>
      <span className="table">40-49 кв/м</span>   <span>2680</span>   <span>3280</span>
      <span className="table">50-59 кв/м</span>   <span>2980</span>   <span>3380</span>
      <span className="table">60-69 кв/м</span>   <span>3280</span>   <span>3680</span>
      <span className="table">70-79 кв/м</span>   <span>3580</span>   <span>3980</span>
      <span className="table">80-89 кв/м</span>   <span>3880</span>   <span>4280</span>
      <span className="table">90-99 кв/м</span>   <span>4180</span>   <span>4580</span>
      <span className="table">100-124 кв/м</span>   <span>4480</span>   <span>4880</span>
      <span className="table">125-149 кв/м</span>   <span>4780</span>   <span>5180</span>
      <span className="table">150-174 кв/м</span>   <span>5080</span>   <span>5480</span>
      <span className="table">175-199 кв/м</span>   <span>5380</span>   <span>5780</span>
      <span className="table">200-249 кв/м</span>   <span>5680</span>   <span>6080</span>
      <span className="table">250-299 кв/м</span>   <span>5980</span>   <span>6380</span>
      <span className="table">от 300 кв/м</span>   <span>20 сом кВ/м</span>   <span>22 сом кв/м</span>
      </div>
      <h3 className="h3-home-2">Внимание! В стоимость заказа не входят расходы на транспорт ( зависят от расстояния).</h3>
      <p>
        Полномасштабные строительные работы, ремонт, реставрация всегда связаны с образованием большого количества пыли, грязи и строительного мусора внутри помещения. Также для этих видов работ характерно появление специфичных загрязнений – пятен цемента, шпаклевки, затирки, краски, остатков скотча и клея, справиться с которыми без специальной химии и оборудования – большая проблема. Поэтому перед подрядчиком стоит непростая задача – сдать заказчику чистое помещение. Уборка после ремонта – трудоемкий процесс. Собственник недвижимости, решивший самостоятельно справиться с пылью и грязью, сталкивается с рядом проблем: пыль, циркулируя в воздухе, снова и снова оседает на только что вымытых поверхностях. Мелкая грязь и песок оставляют царапины на новой дорогой отделке. Загрязнения не поддаются удалению имеющимися под рукой средствами. Комплекс работ по уборке помещения после ремонта можно условно разделить на три этапа. 
        <p></p>На первом этапе необходимо провести удаление пыли. Основной метод борьбы с запыленностью – пылесос для сухой уборки с возможностью установки бумажного пылесборника и дополнительного фильтра-картриджа, так как тлько они способны задержать мелкую строительную пыль. Пылесосы с тканевым или полиэстеровым фильтром здесь абсолютно бесполезны и лишь поднимут пыль в воздух. 
        <p></p>На втором этапе тщательно удаляются следы специфичных загрязнений. Если это пятна цемента, «шлепки» шпаклевки, следы от затирки, то химия должна быть кислотной (на основе соляной или фосфорной кислот), так как традиционные бытовые химические средства на основе лимонной кислоты не предназначены для этих работ. С пятнами олифы и масляной краски справятся щелочные средства. Скотч и некоторые виды красок может убрать только растворитель. Также следует знать, что определенные виды отделочных материалов требуют особого подхода, например, при уборке ламината нельзя использовать большое количество воды и следует применять только нейстральные моющие средства. А на глянцевом керамограните нельзя использовать сильные щелочные или кислотные средства – блеск будет потерян навсегда 
        <p></p>На третьем этапе выполняются заключительные работы по уборке помещения для сдачи объекта «под ключ». Вся встроенная мебель подвергается полировке, окна очищаются до блеска, удаляется грязь со светильников, радиаторов, дверных блоков, поручней, перил. На этом этапе значительные силы тратятся на приведение в порядок 
      </p>
      </div>
      </div>
      </>
    );
  };
};