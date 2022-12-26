import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu'
import ProductCard from './Components/ProductCard/ProductCard';


const router = createBrowserRouter([
{
  path:'/Home',
  element: <Home />
},
{
  path:'/ProductCard',
  element: <ProductCard />
},
{
  path: '/',
  element: <App/>
}
 

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


