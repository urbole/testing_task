import '../css/cart.scss';

export const Cart = () => {

  const hideCart = () => {
    const cart = document.body.querySelector('.cart');
    cart.classList.remove('app-header--cart-open');
    const main = document.body.querySelector('.app__wrapper');
    main.classList.remove('brightness');
  };

  return (
    <article className="cart">
      <header>
          <span>Cart (8 items)</span>
          <button className="cart__btn-close" onClick={hideCart}>X</button>
      </header>
      <div className="cart__items"></div>
      <footer>
        <div className="cart__wrap-info">
          <span>Subtotal</span><span>$144.95</span>
        </div>
        <div className="cart__wrap-btns">
          <button>View cart</button>
          <button>Proceed to checkout</button>
        </div>
      </footer>
    </article>
  )
}