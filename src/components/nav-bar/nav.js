import React, { Component } from 'react';
import './nav.css'

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
            <a className="nav-link" href="#">Главная <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Услуги</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Новости</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Наши клиенты</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">О нас</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Контакты</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Вакансии</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}