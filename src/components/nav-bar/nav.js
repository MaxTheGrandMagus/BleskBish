import React, { Component } from 'react';
import './nav.css'

export default class NavBar extends Component {
  render() {
    return(
    <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
        <a href="#" class="logo">logo</a>
        <ul class="main-nav" id="js-menu">
            <li>
                <a href="#" class="nav-links">Услуги</a>
            </li>
            <li>
                <a href="#" class="nav-links">Цены</a>
            </li>
            <li>
                <a href="#" class="nav-links">Наши работы</a>
            </li>
            <li>
                <a href="#" class="nav-links">Новости</a>
            </li>
            <li>
                <a href="#" class="nav-links">Контакты</a>
            </li>
            <li>
                <a href="#" class="nav-links">О нас</a>
            </li>
            <li>
                <a href="#" class="nav-links">Вакансии</a>
            </li>
        </ul>
    </nav>
    );
  }
}