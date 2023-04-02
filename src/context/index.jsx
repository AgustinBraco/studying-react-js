import { createContext, useState, useEffect } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
  }, [cart]);

  function checkItem(itemFound) {
    return cart.some((cart) => cart.id === itemFound.id);
  }

  function addToCart(itemFound, count) {
    const isAdded = checkItem(itemFound);

    if (isAdded) {
      const itemAdded = cart.find((cart) => cart.id === itemFound.id);

      if(itemAdded.quantity + count <= itemFound.stock) {
        const itemModified = {
          ...itemAdded,
          quantity: itemAdded.quantity + count
        };
        setCart((prevState) => prevState.map((cart) => cart.id === itemFound.id ? itemModified : cart))
      } else {
        alert("Stock insuficiente.")
      }
    } else {
      setCart((prevState) => prevState.concat({
        ...itemFound, 
        quantity: itemFound.quantity + count }));
    }
  }

  // PARA DESPUES
  // function removeItem(itemId) {}
  // function clear() {}

  return (
    <Context.Provider value={{ cart, count, setCount, addToCart }}>
      {children}
    </Context.Provider>
  );
}
