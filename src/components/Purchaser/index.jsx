import './purchaser.css';
import React, { useContext } from "react";
import { Context } from '../../context';

const Purchaser = ({ itemFound }) => {
  const {count, setCount, addToCart } = useContext(Context)

  return (
    <div className="purchaserContainer">
      <div className="counterContainer">
          <button className="decrease" onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
          <span className="amount">{count}</span>
          <button className="increase" onClick={() => setCount(count + 1)} disabled={count >= itemFound.stock}>+</button>
          <button className="addToCart" onClick={() => addToCart(itemFound, count)} disabled={count <= 0}>Add to cart</button>
      </div>
      <p className="stockAvailable">TOTAL UNITS: {itemFound.stock}</p>
    </div>
  );
};

export default Purchaser;