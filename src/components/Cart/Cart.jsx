import "./cart.css";
import { useContext } from "react";
import { Context } from "../../context";

// Router
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(Context);

  return (
    <div>
      <div className="topCartContainer">
        <Link to={"/checkout"} className="topCartLink">
          CONTINUE TO CHECKOUT
        </Link>
      </div>
      {cart.map((arr) => {
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
              <p className="itemCartTextSecond">Unit: $ {arr.price}</p>
              <p className="itemCartTextSecond">
                TOTAL: $ {arr.price * arr.quantity}
              </p>
            </div>
            <div>
              <button className="itemCartDelete">X</button>
            </div>
          </div>
        );
      })};
    </div>
  );
}

export default Cart;