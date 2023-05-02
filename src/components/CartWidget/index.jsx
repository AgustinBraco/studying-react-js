import "./cartwidget.css";
import { useContext } from "react";
import { Context } from "../../context";

// Router
import { Link } from "react-router-dom";

function CartWidget() {
  const { cartStorage } = useContext(Context);

  const cartNumber = cartStorage.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <div className="cartContainer">
      <Link to={"/cart"} className="cartLink">
        <img
          src="/assets/images/cart.png"
          alt="cart-logo"
          className="cartLogo"
        />
        <span className="cartNumber">{cartNumber}</span>
      </Link>
    </div>
  );
}

export default CartWidget;