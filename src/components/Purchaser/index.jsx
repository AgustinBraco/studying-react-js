import './purchaser.css';
import React, { useState, useEffect } from "react";

const Purchaser = ({ itemFound }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
  }, [cart]);

  const addToCart = () => {
    const itemsToAdd = new Array(count).fill(itemFound);
      setCart([...cart, ...itemsToAdd]);
      setCount(0);
  };

  return (
    <div className="purchaserContainer">
      <div className="counterContainer">
          <button className="decrease" onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
          <span className="amount">{count}</span>
          <button className="increase" onClick={() => setCount(count + 1)} disabled={cart.length + count >= itemFound.stock}>+</button>
          <button className="addToCart" onClick={addToCart} disabled={count <= 0}>Agregar al carrito</button>
      </div>
      <p className="stockAvailable">Unidades disponibles: {itemFound.stock - cart.length}</p>
    </div>
  );
};

export default Purchaser;