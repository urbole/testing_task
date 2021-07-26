import React from 'react';
import '../css/productCard.scss';

const ProductCard = ({ productData }) => {
  const { img, prev, title, length, price, descTitle, desc } = productData;

  return (
    <main class="product">
      <div class="product__pictures">
        <img class="product__img" src={img} alt="product" />
        <div class="product__prev" >
          {
            prev.map((item, index) =>
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
      <div class="product__info">
        <h2 class="product__title">{title}</h2>
        <div class="product__purchase">
          <span>Choose your length</span>
          <select name="" id="">
            <option>{length}</option>
          </select>
          <span class="product__price">{price}</span>
        </div>
        <div class="product__buttons">
          <div class="product__btn-group">
            <button>-</button>
            <div>0</div>
            <button>+</button>
          </div>
          <button class="product__btn-add-cart">Add To Cart</button>
        </div>
        <div class="product__desc">
          <h4>{descTitle}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </main>
  )
}

export default ProductCard;