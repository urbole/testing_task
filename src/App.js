import React from 'react';
import { Header } from './components/header';
import { Cart } from './components/cart';
import productImgItem from './assets/img/01.jpg';
import productPrevImg1Item from './assets/img/01_prev.jpg';
import productPrevImg2Item from './assets/img/02_prev.jpg';
import productPrevImg3Item from './assets/img/03_prev.jpg';
import './App.scss';
import './css/cart.scss';
import './css/header.scss';
import ProductCard from './components/productCard';

const productData = {
  img: productImgItem,
  prev: [
    productPrevImg1Item,
    productPrevImg2Item,
    productPrevImg3Item,
  ],
  title: 'Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir Necklace',
  length: '60 CM (24 INCHES)',
  price: 19.95,
  descTitle: 'Handmade Chain Geri and Freki Viking Necklace with Thor Hammer Mjolnir!',
  desc: 'The Kings chain was worn by Viking kings as a status symbol as the name applies. This is a 100% handmade Stainless Steel Chain. The crafting is a very time consuming process to put together the chain link by  link.  The hand made chain connects together with a lobster clamp.',
};

function App() {
  return (
    <div>
      <Cart />
      <div className="app__wrapper">
        <div className='main__wrapper'>
          <Header />
          <div className='product__wrapper'>
            <ProductCard productData={productData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;