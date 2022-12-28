import React from "react";
import "./productCard.css";

const Size=(props)=>{

    return(
        <>
      
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
      </>
    )
}


const ProductCard = (props) => {
  return (
    <>
      <div className="card">
        <h2>{props.title}</h2>
        <img src={props.url} alt="Imagenes Productos" />
        <h3>{props.cantidad}</h3>
        <h3>{props.price}</h3>
        {props.title==="Torta Cumple" ? <Size pequeña={props.pequeña} mediana={props.mediana} grande={props.grande}/>:""}
        {props.title==="Tortas" ? <Size pequeña={props.pequeña} mediana={props.mediana} grande={props.grande}/>:""}
        <button className="Add">Agregar al Carrito</button>
      </div>
    </>
  );
};

export default ProductCard;
