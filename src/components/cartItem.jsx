import React, { Component } from 'react';


class CartItem extends Component {
  testClick = e => {
    console.log(this.props.item);
  }

  render() {
    return (
      <div className="cart__item">
        <img src={this.props.item.img} alt="product" />
        <div className="cart__item-info">
          <h2>{this.props.item.title}</h2>
          <div className="cart__item-purchase">
            <span className="cart__item-price">{this.props.item.price}</span>
          </div>
          <div className="cart__item-btn-group">
            <button
              id='down-count'
              onClick={this.testClick}
            >
              -
            </button>
            <div>{this.props.item.count}</div>
            <button
              id='up-count'
            // onClick={this.upCount}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;