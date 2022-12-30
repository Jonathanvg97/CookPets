import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";

const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <>
    <Header />
    <main className="main main-car">
    <section className='container-carrito'>
        <div className='p-car-container'>
          <div className="ContainerCard">
            {cart.map((product) => {
              return (
                <div className="card" key={product.id}>
                  <h2>{product.title}</h2>
                  <img src={product.url} alt="Imagenes Productos" />
                  <h3>{product.category}</h3>
                  <h3>{product.size}</h3>
                  <h3>{product.price}</h3>
                </div>
              );
            })}
          </div>
        </div>
        </section>
      </main>
     <Menu/>
     </>
  );
};

export default Cart;
