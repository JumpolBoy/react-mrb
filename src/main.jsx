import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './Products.jsx';
import Home from './Home.jsx';
import Checkout from './Checkout.jsx';
import { CartProvider } from './CartContext';

import Gkspro from './pages/Gkspro.jsx';
import Gblpro from './pages/Gblpro.jsx';
import Gaspro from './pages/Gaspro.jsx';
import Bosch from './pages/Bosch.jsx';


const router = createBrowserRouter([
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/gkspro",
    element: <Gkspro />,
  },
  {
    path: "/gblpro",
    element: <Gblpro />,
  },
  {
    path: "/gaspro",
    element: <Gaspro />,
  },
  {
    path: "/bosch",
    element: <Bosch />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
