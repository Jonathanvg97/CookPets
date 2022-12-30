import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../CarBuy/cart.css";
import ReactWhatsapp from "react-whatsapp";
import Footer from "../../Components/Footer/Footer";

function Carrito() {
  //Reduce
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const addition = (acc, currentValue) => {
    return acc + currentValue.price * currentValue.quantity;
  };
  const total = cart.reduce(addition, 0);

  let totalItems = 0;
  //Total
  cart.map((products) => {
    totalItems += products.quantity;
  });
  return (
    <>
      <Header />
      <main className="main main-car">
        <section className="container-carrito">
          {cart.map((product) => (
            <div className="p-car-container" key={product.id}>
              <img src={product.image} alt="" className="img-card-car" />
              <div className="flex-container">
                <p>{product.title}</p>
                <img src={product.url} alt="Imagenes Productos" />
                <div className="flex-sub-cont">
                  <div>
                    <p>{product.category}</p>
                    <p>$ {product.price * product.quantity}</p>
                  </div>
                  <div className="cont-buttons">
                    <button
                      onClick={() => {
                        if (product.quantity > 1) {
                          dispatch({ type: "DECREASE", payload: product });
                        } else {
                          dispatch({ type: "REMOVE", payload: product });
                        }
                      }}
                      className="btn-add-sub"
                    >
                      -
                    </button>
                    <div>
                      <p>{product.quantity}</p>
                    </div>
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: product })
                      }
                      className="btn-add-sub"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: product })}
                className="delete-product"
              >
                X
              </button>
            </div>
          ))}
        </section>
        <section className="section-car-total">
          <div className="car-total">
            <h5>{`Productos en el carrito: ${totalItems}`}</h5>
            <p>Total:</p>
            <h4>$ {total}</h4>
            {console.log(cart)}
          </div>
        </section>
      </main>
      <ReactWhatsapp
        number="57-310-858-0916"
        message={`Hello Somos CookPets, en que podemos ayudarte!!! ${cart.map(
          (product) => product.quantity + " " + product.title
        )} para $${total}`}>
        {" "}
      Whatsapp{" "}
      </ReactWhatsapp>
      <Footer/>
      <Menu />
    </>
  );
}

export default Carrito;
