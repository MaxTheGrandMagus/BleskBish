import React, { Component } from 'react';
import './nav.css'
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
            <a className="nav-link"> <Link to="/">Главная <span className="sr-only">(current)</span> </Link> </a>
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
            >Услуги
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
        </ul>
      </div>
    </nav>
    );
  }
}