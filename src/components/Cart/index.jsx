import "./cart.css";
import { useContext } from "react";
import { Context } from "../../context";

// Router
import { Link } from "react-router-dom";

function Cart() {
  const { totalPrice, clearCart, removeProduct, cartStorage } = useContext(Context);

  if (cartStorage.length === 0) {
    return <h2>Empty cart</h2>;
  } else {
    return (
      <div>
        <div className="topCartContainer">
          <p className="topCartTotal">TOTAL: US$ {totalPrice}</p>
          <Link to={"/checkout"} className="topCartButton">
            GO TO PAY
          </Link>
          <button className="topCartButton" onClick={clearCart}>CLEAR</button>
        </div>
        {cartStorage.map((arr) => {
          return (
            <div className="itemsCartContainer" key={arr.id}>
              <div>
                <p className="itemCartTextSecond">{arr.quantity}x</p>
              </div>
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
                <p className="itemCartTextSecond">Unit: US$ {arr.price}</p>
                <p className="itemCartTextSecond">TOTAL: US$ {arr.price * arr.quantity}</p>
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