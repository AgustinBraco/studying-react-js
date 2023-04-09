import { createContext, useState, useEffect } from "react";

// Firebase
import { collection, getFirestore, addDoc, doc, updateDoc } from "firebase/firestore";

// Sweet alert
import swal from 'sweetalert';

export const Context = createContext();
export function CustomProvider({ children }) {

  const [count, setCount] = useState(0);

  const [cartStorage, setCartStorage] = useLocalStorage("cartStorage", []);

  useEffect(() => {}, [cartStorage]);


  // Lógica para agregar al carrito
  function checkItem(product) {
    return cartStorage.some((cart) => cart.id === product.id);
  };

  function addToCart (product, count) {
    const isAdded = checkItem(product);

    if (isAdded) {
      const productAdded = cartStorage.find((cart) => cart.id === product.id);

      if (productAdded.quantity + count <= product.stock) {
        const productModified = {
          ...productAdded,
          quantity: productAdded.quantity + count,
        };

      setCartStorage(cartStorage.map((cart) => cart.id === product.id ? productModified : cart));

      setCount(0);

      } else {
        swal("Insufficient stock")
      };
    } else {
      setCartStorage([...cartStorage, {
        ...product,
        quantity: product.quantity + count,
      }]);
      setCount(0);
    };
  };
  
  function removeProduct(id) {
    setCartStorage(cartStorage.filter((cart) => cart.id !== id));
  };

  function clearCart() {
    setCartStorage([]);
  };

  // Lógica para ordenes
  const totalPrice = cartStorage.reduce((acc, product) => acc + product.quantity * product.price, 0);
  const db = getFirestore();

  function buy(buyerName, buyerEmail, buyerEmailRepeated, buyerPhone) {
    event.preventDefault();

    if (buyerName.length < 3 || buyerPhone.length < 3 || buyerEmail.length < 3 || buyerEmailRepeated.length < 3) {
      swal("Please complete the fields");
    } else if (buyerEmail !== buyerEmailRepeated) {
      swal("Emails doesn't match");
    } else if (buyerEmail === buyerEmailRepeated) {
      const order = {
        buyer: {name: {buyerName}, email:  {buyerEmail}, phone: {buyerPhone}},
        items: cartStorage,
        total: totalPrice,
      };
      setCartStorage([]);
      const collectionRef = collection(db, "orders");
      addDoc(collectionRef, order)
      .then((res) => {
        const orderId = res.id;
        swal(`Thanks for your purchase, your order ID is ${orderId}`)
  
        cartStorage.map((product) => {
          const newStock = product.stock - product.quantity
          updateOrder(product, newStock)});
      })
      .catch((err) => console.log("Catch error:", err));
    };
  };

  function updateOrder(product, newStock) {
    const itemRef = doc(db, "items", product.id);
    updateDoc(itemRef, {stock: newStock});
  };

  // Lógica para local storage
  function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        return initialValue;
      };
    });

    const setValue = value => {
      try {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch (err) {
        console.log("Catch error:", err)
      };
    };

    return [storedValue, setValue]
  };

  return (
    <Context.Provider value={{ count, setCount, addToCart, buy, totalPrice, clearCart, removeProduct, useLocalStorage, cartStorage }}>
      {children}
    </Context.Provider>
  );
};