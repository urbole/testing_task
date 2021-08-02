import React, { Component } from 'react';
import cartImg from '../assets/ico/cart.png';
import logoImg from '../assets/img/logo.png';
import '../css/header.scss';


const burgerMenu = () => {
  const header = document.body.querySelector('.app-header');
  header.classList.toggle('app-header--menu-open');
};

const cartOpen = () => {
  const main = document.body.querySelector('.app__wrapper');
  main.classList.add('brightness');
  const cart = document.body.querySelector('.cart');
  cart.classList.add('app-header--cart-open');
};
class Header extends Component {
  
  render() {
    return (
      <header className="app-header">
        <button className="app-header__burger-btn" onClick={burgerMenu}>
          <span></span>
          <span></span>
        </button>
        <div className="app-header__logo">
          <img className="head__img" src={logoImg} alt="logo" />
        </div>
        <nav className="app-header__nav">
          <ul className="app-header__nav-items">
            <a href="/" className="app-header__link">Vikings</a>
            <a href="/" className="app-header__link">Ancient Egypt</a>
            <a href="/" className="app-header__link">Celtics</a>
            <a href="/" className="app-header__link">Sale</a>
          </ul>
          <input className="app-header__search" type="search" />
          <button className="app-header__cart-btn-open" onClick={cartOpen}>
            <img className="head__img" src={cartImg} alt="cart" />
            <span id='header-cart-count'>{this.props.sendInfoAboutCartItems.length}</span>
          </button>
        </nav>
      </header>
    )
  }
}

export default Header;