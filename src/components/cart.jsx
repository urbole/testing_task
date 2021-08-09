import React, { Component } from 'react';
import '../css/cart.scss';
import CartItem from './cartItem';

class Cart extends Component {

  state = {
    count: 0,
  }

  hideCart = e => {
    const cart = document.body.querySelector('.cart');
    cart.classList.remove('app-header--cart-open');
    const main = document.body.querySelector('.app__wrapper');
    main.classList.remove('brightness');
  }

  testClick = () => {
    let testCount = 0;
    this.props.sendInfoAboutCartItems.map((item) => {
      testCount += item.count;
      console.log('🚀 ~ Cart ~ testCount', testCount);
      console.log('🚀 ~ Cart ~ item.count', item.count);
      console.log('🚀 ~ Cart ~ this.state.count', this.state.count);
      return this.setState({ count: this.state.count + testCount });
    })
    // console.log(this.props.sendInfoAboutCartItems[0].count);
  };

  total = () => {
    let amountItems = [];

    this.props.sendInfoAboutCartItems.map((item, i) => {
      amountItems.push(item.count)
      console.log('🚀 ~ Cart ~ amountItems', amountItems);
    }).reduce((accum, item) => accum + item)
  }


  render() {

    return (
      <article className="cart">
        <header>
          <span>
            Cart ({this.total} items)
          </span>

          <button className="cart__btn-close" onClick={this.hideCart}>X</button>
        </header>
        <div className="cart__items">
          {
            this.props.sendInfoAboutCartItems.length > 0 ?
              this.props.sendInfoAboutCartItems.map((item, index) =>
                <CartItem
                  item={item}
                  key={index}
                />
              )
              :
              <div>Cart is Empty</div>
          }
        </div>
        <footer>
          <div className="cart__wrap-info">
            <span>Subtotal</span>
            {/* <span>{this.props.sendInfoAboutCartItems}</span> */}
          </div>
          <div className="cart__wrap-btns">
            <button
              onClick={this.testClick}
            >View cart</button>
            <button>Proceed to checkout</button>
          </div>
        </footer>
      </article>
    )
  }
}

export default Cart;