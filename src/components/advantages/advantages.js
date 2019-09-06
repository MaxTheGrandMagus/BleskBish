import React, { Component, Fragment } from 'react';
import './advantages.css';

import orders from '../../images/advantages/001-cleaning.png';
import quality from '../../images/advantages/002-quality.png';
import eco from '../../images/advantages/003-eco.png';
import cost from '../../images/advantages/004-cost.png';
import deadlines from '../../images/advantages/005-deadlines.png';
import equipment from '../../images/advantages/006-equipment.png';
import worktime from '../../images/advantages/007-worktime.png';
import manager from '../../images/advantages/008-manager.png';

class Advantages extends Component {
    render() {
        return(
            <Fragment>
                <div className="string-styles">
                <h1 className="adv-title">Наши преимущества</h1>

                <div className="adv-divs-flex">

                    <div className="adv-divs">

                        <div className="adv-divs-orders">
                            <center><img className="orders" src={orders} width="25%" height="25%"></img></center>
                            <h2 className="h2-style">
                                <span>Заказов</span>
                                <span className="span-line">1500 выполненных</span>
                                <span className="span-about">Мы выполнили за 8 лет 1500 заказов для частных домохозяйств и бизнеса. Мы гордимся своей работой.</span>
                            </h2>
                        </div>

                        <div className="adv-divs-quality">
                            <center><img className="quality" src={quality} width="25%" height="25%"></img></center>
                            <h2 className="h2-style">
                                <span>100%</span>
                                <span className="span-line">Гарантия качества</span>
                                <span className="span-about">При работе с нами клиент получает 100% гарантию на клининговые работы. Мы работаем добросовестно</span>
                            </h2>
                        </div>

                        <div className="adv-divs-eco">
                            <center><img className="eco" src={eco} width="25%" height="25%"></img></center>
                            <h2 className="h2-style">
                                <span>Eco</span>
                                <span className="span-line">Чистящие средства</span>
                                <span className="span-about">Мы думаем об экологии и поэтому используем только экологически чистые средства для клининга</span>
                            </h2>
                        </div>

                        <div className="adv-divs-cost">
                            <center><img className="cost" src={cost} width="25%" height="25%"></img></center>
                            <h2 className="h2-style">
                                <span>Цена</span>
                                <span className="span-line">Низкая стоимость</span>
                                <span className="span-about">Нам удалось оптимизировать все процессы своего бизнеса и предложить клиенту лучшую цену без потери качества.</span>
                            </h2>
                        </div>

                        <div className="adv-divs-deadlines">
                            <center><img className="deadlines" src={deadlines} width="25%" height="25%"></img></center>
                            <h2 className="h2-style">
                                <span>Сроки</span>
                                <span className="span-line">Никогда не срываем</span>
                                <span className="span-about">Мы выполнили за 9 лет 1500 заказов для частных домохозяйств и бизнеса. Мы гордимся своей работой.</span>
                            </h2>
                        </div>

                        <div className="adv-divs-equipment">
                            <center><img className="equipment" src={equipment} width="25%" height="25%"></img></center>
                            <h2 className="h2-style">
                                <span>Своя техника</span>
                                <span className="span-line">Собственный парк</span>
                                <span className="span-about">При работе с нами клиент получает 100% гарантию на клининговые работы. Мы работаем добросовестно</span>
                            </h2>
                        </div>

                        <div className="adv-divs-worktime">
                            <center><img className="worktime" src={worktime} width="25%" height="25%"></img></center>
                            <h2 className="h2-style">
                                <span>24/7</span>
                                <span className="span-line">Работаем круглосуточно</span>
                                <span className="span-about">Мы думаем об экологии и поэтому используем только экологически чистые средства для клининга</span>
                            </h2>
                        </div>

                        <div className="adv-divs-manager">
                            <center><img className="manager" src={manager} width="25%" height="25%"></img></center>
                            <h2 className="h2-style">
                                <span>Бесплатно</span>
                                <span className="span-line">Вызов менеджера</span>
                                <span className="span-about">Нам удалось оптимизировать все процессы своего бизнеса и предложить клиенту лучшую цену без потери качества.</span>
                            </h2>
                        </div>

                    </div>

                </div>
                </div>
            </Fragment>
        );
    }
}

export default Advantages;