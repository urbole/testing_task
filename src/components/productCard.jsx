import React, { Component } from 'react';
import '../css/productCard.scss';

class ProductCard extends Component {

  state = {
    count: 0,
    idItem: this.props.sendProductInfo.idItem,
    img: this.props.sendProductInfo.img,
    title: this.props.sendProductInfo.title,
    length: this.props.sendProductInfo.length,
    price: this.props.sendProductInfo.price,
    discountPrice:this.props.sendProductInfo.discountPrice
  }

  downCount = e => this.state.count > 0 ? this.setState({ count: this.state.count - 1 }) : '';
  upCount = e => this.setState({ count: this.state.count + 1 });


  addProduct = () => {
    const data = {
      count: this.state.count,
      idItem: this.state.idItem,
      img: this.state.img,
      title: this.state.title,
      length: this.state.length,
      price: this.state.price,
      discountPrice: this.state.discountPrice
    };

    if (this.state.count > 0) {
      document.getElementById('header-cart-count').classList.add('not-empty')

      this.props.dataFormProductCard(data);
      this.setState({ count: 0 });

    }
  }

  render() {
    return (
      <main className="product">
        <div className="product__pictures">
          <img className="product__img" src={this.props.sendProductInfo.img} alt="product" />
          <div className="product__prev" >
            {
              this.props.sendProductInfo.prev.map((item, index) =>
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
          <h2 className="product__title">{this.props.sendProductInfo.title}</h2>
          <div className="product__purchase">
            <span>Choose your length</span>
            <select name="" id="">
              <option>{this.props.sendProductInfo.length}</option>
            </select>
            <span className="product__price">{this.props.sendProductInfo.discountPrice}</span>
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
              onClick={this.addProduct}
            >
              Add To Cart
            </button>
          </div>
          <div className="product__desc">
            <h4>{this.props.sendProductInfo.descTitle}</h4>
            <p>{this.props.sendProductInfo.desc}</p>
          </div>
        </div>
      </main>
    )
  }
}

export default ProductCard;



// console.log('🚀 ~ ProductCard ~ this.state.count', this.state.count);
// console.log('🚀 ~ ProductCard ~ this.state.idItem', this.state.idItem);
// console.log('🚀 ~ ProductCard ~ this.state.img', this.state.img);
// console.log('🚀 ~ ProductCard ~ this.state.title', this.state.title);
// console.log('🚀 ~ ProductCard ~ this.state.length', this.state.length);
// console.log('🚀 ~ ProductCard ~ this.state.price', this.state.price);