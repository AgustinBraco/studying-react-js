import './cartwidget.css';
import { useContext } from 'react';
import { Context } from '../../context';

// Router
import {Link} from 'react-router-dom';

function CartWidget() {
    const {cart} = useContext(Context)

  return (
    <div className="cartContainer">
        <Link to={'/cart'} className="cartLink">
            <img src="/assets/images/cart.png" alt="cart-logo" className="cartLogo"/>
            <span className="cartNumber">{cart.length}</span>
        </Link>
    </div>
  );
};

export default CartWidget;