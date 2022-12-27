import React from "react";
import "./productCard.css";

const ProductCard = (props) => {
  return (
    <>
      <div className="card">
        <h2>{props.title}</h2>
        <img src={props.url} alt="Imagenes Productos" />
        <h3>{props.cantidad}</h3>
        <ul className="Size">
          <button>
            <li>{props.pequeña}</li>
          </button>
          <button>
            <li>{props.mediana}</li>
          </button>
          <button>
            <li>{props.grande}</li>
          </button>
        </ul>
        <h3>{props.price}</h3>
      </div>
    </>
  );
};

export default ProductCard;
