import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ItemRoot from './routes/item';
import DetailRoot from './routes/detail';
import CartRoot from './routes/cart';
import CheckoutRoot from './routes/checkout';
import { CustomProvider } from './context';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCShip-k1X2Gu2xcIwaf6tvsteDf6tqJU",
  authDomain: "react-project-b9c82.firebaseapp.com",
  projectId: "react-project-b9c82",
  storageBucket: "react-project-b9c82.appspot.com",
  messagingSenderId: "150175569333",
  appId: "1:150175569333:web:2842cb90f4e49137f475fc",
  measurementId: "G-L0HX1CPZQF"
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/brand/:id",
    element: <ItemRoot />,
  },
  {
    path: "/item/:id",
    element: <DetailRoot />,
  },
  {
    path: "/cart",
    element: <CartRoot />,
  },
  {
    path: "/checkout",
    element: <CheckoutRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
