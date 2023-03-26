import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ItemRoot from './routes/item';
import DetailRoot from './routes/detail';
import CartRoot from './routes/cart';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
    element: <div>In progress...</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
