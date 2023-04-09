import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomProvider } from './context';

// Roots
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root';
import ItemRoot from './routes/item';
import DetailRoot from './routes/detail';
import CartRoot from './routes/cart';
import CheckoutRoot from './routes/checkout';
import ErrorRoot from './routes/error';

//Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID,
  measurementId: import.meta.env.VITE_REACT_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    errorElement: <ErrorRoot />,
  },
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
