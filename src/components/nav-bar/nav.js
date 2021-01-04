import React, { Component } from 'react';
import './nav.css'
import { Link as LinkNav} from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';

import Logo from '../../images/nav-bar/logo.jpg'

export default class NavBar extends Component {
  render() {
    return(
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
      <a className="navbar-brand" href="#"><img src={Logo} width="50px" height="60px" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item active">
            <a className="nav-link"> <LinkNav to="/"> Главная <span className="sr-only">(current)</span> </LinkNav> </a>
          </li>

          <li>
          <Link
              className="nav-link"
              activeClass="active"
              to="service_header"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
            >
              <ul class="dropdown">
              <button class="mainmenubtn">Услуги</button>
                <li class="dropdown-child">
                  <LinkNav to="/springСleaning"><span className="li-nav">Генеральная уборка</span></LinkNav>
                  <LinkNav to="/cleaningAfterRepair"><span className="li-nav">Уборка после ремонта</span></LinkNav>
                  <LinkNav to="/washingWindows"><span className="li-nav">Качественное мытье окон и витражей</span></LinkNav>
                  <LinkNav to="/housekeeper"><span className="li-nav">Домработница по вызову</span></LinkNav>
                  <LinkNav to="/sale"><span className="li-nav">Скидки</span></LinkNav>
                  <LinkNav to="/office"><span className="li-nav">Офисам</span></LinkNav>
                  <LinkNav to="/shops"><span className="li-nav">Магазинам и торговым центрам</span></LinkNav>
                  <LinkNav to="/hotel"><span className="li-nav">Уборка отелей</span></LinkNav>
                  <LinkNav to="/cleaningIndustrial"><span className="li-nav">Уборка промышленных и производственных площадей</span></LinkNav>
                  {/* <a href="/springСleaning">Генеральная уборка</a>
                  <a href="/cleaningAfterRepair">Уборка после ремонта</a>
                  <a href="/washingWindows">Качественное мытье окон и витражей</a>
                  <a href="/housekeeper">Домработница по вызову</a>
                  <a href="/sale">Скидки</a>
                  <a href="/office">Офисам</a>
                  <a href="/shops">Магазинам и торговым центрам</a>
                  <a href="/hotel">Уборка отелей</a>
                  <a href="/cleaningIndustrial">Уборка промышленных и производственных площадей</a> */}
                </li>
              </ul>
          </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link">Новости</a>
          </li>

          <li className="nav-item">
          <Link
              className="nav-link"
              activeClass="active"
              to="slide"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
          >Наши клиенты
          </Link>
          </li>

          <li className="nav-item">
            <LinkNav to="/"><span className="nav-link">О нас</span></LinkNav>
          </li>
          
          <li className="nav-item">
            <LinkNav to="/"><span className="nav-link">Контакты</span></LinkNav>
          </li>
          
          <li className="nav-item">
            <LinkNav to="/"><span className="nav-link">Вакансии</span></LinkNav>
          </li>
          
        </ul>
      </div>
    </nav>
    );
  }
}