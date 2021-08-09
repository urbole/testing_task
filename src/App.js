import React, { Component } from 'react';
import Cart from './components/Cart';
import Header from './components/header';
import ProductCard from './components/productCard';
import { startProductData } from './products';
import './App.scss';
import './css/cart.scss';
import './css/header.scss';

class App extends Component {

  state = {
    startData: startProductData,
    dataForCartFromProductCard: [],
  }

  dataFormProductCard = data => {
    this.setState({ dataForCartFromProductCard: this.state.dataForCartFromProductCard.concat(data) })
  }


  render() {

    // const listItems = this.state.startData.map((item, i) =>
    //   <ProductCard sendProductInfo={item} key={i} dataFormProductCard={this.dataFormProductCard} />
    // )

    return (
      <div>
        <Cart sendInfoAboutCartItems={this.state.dataForCartFromProductCard} />
        <div className="app__wrapper">
          <div className='main__wrapper'>
            <Header sendInfoAboutCartItems={this.state.dataForCartFromProductCard} />
            <div className='product__wrapper'>
              {
                // listItems
                this.state.startData.map((item, i) =>
      <ProductCard sendProductInfo={item} key={i} dataFormProductCard={this.dataFormProductCard} />
    )

              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;