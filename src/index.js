import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import {ProductCard} from "./Components/ProductCard/ProductCard";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import './Components/Menu/menus.css'
import Contacts from "./Components/Contacts/Contacts";
import Comunity from "./Components/Comunity/Comunity";
//import redux
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import Cart from "./store/CarBuy/Cart";

import Reducer from './Components/Reducer';
    const store= createStore(Reducer)


const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/ProductCard",
    element: (
      <>
        <Header />
        <ProductCard/>
        <Footer/>
        <Menu/>
      </>
    ),
  },
  {
    path: "/Contacts",
    element: (
      <>
      <Header/>
      <Contacts />,
      <Menu/>
      </>
    )

  },
  {
    path: "/Comunity",
    element: <Comunity />,
  },
  {
    path: "/",
    element: <App />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
</React.StrictMode>
);
