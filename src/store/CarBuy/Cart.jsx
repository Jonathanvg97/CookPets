import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../CarBuy/cart.css";
import ReactWhatsapp from "react-whatsapp";
import Footer from "../../Components/Footer/Footer";
import { NumericFormat } from 'react-number-format';



function Carrito() {
  //Reduce
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const addition = (acc, currentValue) => {
    return acc + currentValue.price * currentValue.quantity;
  };
  const total = cart.reduce(addition, 0);

  // let totalItems = 0;
  //Total
  
  // totalItems += cart.quantity;
  return (
    <>
      <Header />
      <div className="global">
        <h2 className="Pedido">
          Pedido
        </h2>
        <section className="containerCart">
          {cart.map((product) => {
            return (
              <div className="inCart" key={product.id}>
                <section className="imageCart">
                  <img src={product.url} alt="Imagen del producto" />
                </section>
                <section className="textContainer">
                  <h3 className="nameCart">{product.title}</h3>
                  <p className="textCart">Precio $ <NumericFormat className="text-title"  value=  {product.price} thousandSeparator="," /></p>
             
                </section>
                <button
                  className="delete"
                  onClick={() => dispatch({ type: "REMOVE", payload: product })}
                >
                  <i className="ri-delete-bin-6-line icon"></i>
                </button>
                <section className="quatity">
                  <button
                    onClick={() => {
                      if (product.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: product });
                      } else {
                        dispatch({ type: "REMOVE", payload: product });
                      }
                    }}
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: product })
                    }
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </section>
              </div>
            );
          })}
        </section>
     
        <div className="amount">{total > 0 ? <h2>Total a pagar: <span>$ <NumericFormat className="text-title2"  value=  {total} thousandSeparator="," /></span></h2> : <h2>Total a pagar: <span>${0}</span></h2>}</div>
        
          <ReactWhatsapp className={`wp ${total === 0 ? 'oculto' : ''}`}
            number="+573108580916"
            message={`Bienvenidos a CookPets!!! Donde encontraras productos 100% naturales para tu mascota, que esperas para darle gusto a tu peludo con un delicioso y nutritivo alimento. La cantidad de productos a solicitar son: ${cart.map(
              (product) =>  product.quantity+ " " + product.title + " de "+ product.size
            )} y el total a pagar es de $$ {total} este pedido incluye el envío si el monto es superior a $40.000. Gracias por confiar en CookPets.`}
          >

            Realizar Pedido
          </ReactWhatsapp>
      
      </div>
      <div style={{marginTop:'450px'}}>
      <Footer/>
      </div>
      <Menu />
    </>
  );
}

export default Carrito;
