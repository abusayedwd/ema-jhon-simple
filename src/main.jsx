import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory/Inventory';
import Loging from './components/Loging/Loging';
import cartProductsLoader from './Loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Order></Order>,
        loader: cartProductsLoader,
      },
      {
        path:'inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'loging',
        element: <Loging></Loging>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
