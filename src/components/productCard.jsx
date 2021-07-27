import React, { Component } from 'react';
import '../css/productCard.scss';

class ProductCard extends Component {

  state = {
    count: 0,
  }

  downCount = e => {
    this.state.count === 0 ?
      document.getElementById('down-count').setAttribute('disabled', 'disabled')
      : this.setState({ count: this.state.count - 1 })
  }

  upCount = e => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <main className="product">
        <div className="product__pictures">
          <img className="product__img" src={this.props.productInfo.img} alt="product" />
          <div className="product__prev" >
            {
              this.props.productInfo.prev.map((item, index) =>
                <img
                  className="product__prev-img"
                  src={item}
                  key={index}
                  alt="preview product"
                />
              )
            }
          </div>
        </div>
        <div className="product__info">
          <h2 className="product__title">{this.props.productInfo.title}</h2>
          <div className="product__purchase">
            <span>Choose your length</span>
            <select name="" id="">
              <option>{this.props.productInfo.length}</option>
            </select>
            <span className="product__price">{this.props.productInfo.price}</span>
          </div>
          <div className="product__buttons">
            <div className="product__btn-group">
              <button
                id='down-count'
                onClick={this.downCount}
              >
                -
              </button>
              <div>{this.state.count}</div>
              <button
                id='up-count'
                onClick={this.upCount}
              >
                +
              </button>
            </div>
            <button
              className="product__btn-add-cart"
            // onClick={test}
            >
              Add To Cart
            </button>
          </div>
          <div className="product__desc">
            <h4>{this.props.productInfo.descTitle}</h4>
            <p>{this.props.productInfo.desc}</p>
          </div>
        </div>
      </main>
    )
  }
}

export default ProductCard;