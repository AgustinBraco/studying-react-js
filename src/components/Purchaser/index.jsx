import "./purchaser.css";
import React, { useContext } from "react";
import { Context } from "../../context";

const Purchaser = ({ product }) => {
  const { count, setCount, addToCart } = useContext(Context);

  if (product.stock <= 0) {
    return (
      <div>
        <p className="stockUnavailable">OUT OF STOCK</p>
      </div>
    );
  } else {
    return (
      <div className="purchaserContainer">
      <div className="counterContainer">
        <button className="decrease" onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
        <span className="amount">{count}</span>
        <button className="increase" onClick={() => setCount(count + 1)} disabled={count >= product.stock}>+</button>
        <button className="addToCart" onClick={() => addToCart(product, count)} disabled={count <= 0}>Add to cart</button>
      </div>
      <p className="stockAvailable">TOTAL UNITS: {product.stock}</p>
    </div>
    );
  };
};

export default Purchaser;