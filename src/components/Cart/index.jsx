import "./cart.css";
import { useContext } from "react";
import { Context } from "../../context";

// Router
import { Link } from "react-router-dom";

function Cart() {
  const { totalPrice, clearCart, removeProduct, cartStorage } = useContext(Context);

  if (cartStorage.length === 0) {
    return (
      <div className="emptyCartContainer">
        <img
        src="/assets/images/bag.png"
        alt="bag-image"
        className="bagImage"/>
        <p className="emptyCartText">Your cart is empty</p>
        <Link to={"/brand/All"} className="emptyCartLink">SHOP</Link>
      </div>
    )
  } else {
    return (
      <div>
        <div className="topCartContainer">
          <p className="topCartTotal">TOTAL: US$ {totalPrice}</p>
          <Link to={"/checkout"} className="checkoutButton">
            CHECKOUT
          </Link>
          {/* <button className="topCartButton" onClick={clearCart}>CLEAR</button> */}
          <div onClick={clearCart} className="paperbinDiv">
            <img src="/assets/images/paper-bin.png" alt="paper-bin-image" className="paperbinImage"/>
          </div>
        </div>
        {cartStorage.map((arr) => {
          return (
            <div className="itemsCartContainer" key={arr.id}>
              <div>
                <img
                  src={arr.image}
                  alt="motorcycle-image"
                  className="itemCartImage"
                />
              </div>
              <div>
                <p className="itemCartTextFirst">{arr.brand}</p>
                <p className="itemCartTextFirst">{arr.model}</p>
                <p className="itemCartTextSecond">{arr.color}</p>
                <p className="itemCartTextSecond">US$ {arr.price}</p>
                <p className="itemCartTextSecond">{arr.quantity} units</p>
                <p className="itemCartTextFirst">TOTAL: US$ {arr.price * arr.quantity}</p>
              </div>
              <div>
                <button className="itemCartDelete" onClick={() => removeProduct(arr.id)}>X</button>
              </div>
            </div>
          );
        })};
      </div>
    );
  };
};

export default Cart;