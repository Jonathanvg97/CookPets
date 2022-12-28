import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductCard from "./Components/ProductCard/ProductCard";
import Data from "./Components/DataProducts.json";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import './Components/Menu/menus.css'
import Contacts from "./Components/Contacts/Contacts";
import Comunity from "./Components/Comunity/Comunity";


const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/ProductCard",
    element: (
      <>
        <Header />
        <h4 className="DescripcionCook">CookPets 100% Natural</h4>
        <div className="All">
          <ul className="Categories">
         <button><li className="SubCategories">Todos</li></button>
         <button><li>Tortas</li></button>
         <button><li>Galletas</li></button>
         <button><li>Gomitas</li></button>
         <button><li>Promociones y Planes</li></button>
          </ul>
        </div>
        {Data.map((info) => {
          return (
            <ProductCard title={info.title} url={info.url} cantidad={info.Cantidad} pequeña={info.pequeña} mediana={info.mediana} grande={info.grande} price={info.Price}  />
          );
        })}
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
   
  },{
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
