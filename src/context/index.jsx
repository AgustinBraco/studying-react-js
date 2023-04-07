import { createContext, useState, useEffect } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {}, [cart]);

  function checkItem(product) {
    return cart.some((cart) => cart.id === product.id);
  };

  function addToCart(product, count) {
    const isAdded = checkItem(product);

    if (isAdded) {
      const itemAdded = cart.find((cart) => cart.id === product.id);

      if (itemAdded.quantity + count <= product.stock) {
        const itemModified = {
          ...itemAdded,
          quantity: itemAdded.quantity + count,
        };
        setCart((prevState) =>
          prevState.map((cart) =>
            cart.id === product.id ? itemModified : cart
          )
        );
        setCount(0);
      } else {
        alert("Stock insuficiente.");
      };
    } else {
      setCart((prevState) =>
        prevState.concat({
          ...product,
          quantity: product.quantity + count,
        })
      );
      setCount(0);
    };
  };

  // PARA DESPUES
  // function removeItem(itemId) {}
  // function clear() {}

  return (
    <Context.Provider value={{ cart, count, setCount, addToCart }}>
      {children}
    </Context.Provider>
  );
};