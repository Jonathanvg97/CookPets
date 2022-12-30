import React from "react";
import "./productCard.css";
import { products } from "../../assest/Data/products";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const ProductCard = () => {
  //Reduce
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const [data, setData] = useState(products);

  const filterResult = (typeOfCategory) => {
    const result = products.filter((curDate) => {
      return curDate.category === typeOfCategory;
    });
    setData(result);
    console.log(result);
    console.log(data);
  };

  

  return (
    <>
      <h4 className="DescripcionCook">CookPets 100% Natural</h4>
      <div className="All">
        <ul className="Categories">
          <button onClick={(_) => setData(products)}>
            <li className="Todos">Todos</li>
          </button>
          <button onClick={(_) => filterResult("Tortas")}>
            <li>Tortas</li>
          </button>
          <button onClick={(_) => filterResult("Snacks")}>
            <li>Snacks</li>
          </button>
          <button onClick={(_) => filterResult("Birthday")}>
            <li>Tortas CumplePet</li>
          </button>
          <button onClick={(_) => filterResult("Planes y Promociones")}>
            <li>Planes y Promociones</li>
          </button>
        </ul>
      </div>

      <div className="ContainerCard">
        {data.map((product) => {
          return (
            <>
              <div className="card" key={product.id}>
                <h2>{product.title}</h2>
                <img src={product.url} alt="Imagenes Productos" />
                <h3>{product.category}</h3>
                <p style={{ fontFamily: "Roboto", textAlign: "center" }}>
                  {product.description}
                </p>
                <h3>{product.size}</h3>
                <h3>{product.price}</h3>

                <button onClick={()=>dispatch({type:'ADD',payload:product})} className="Add"> Add
                 <i class="ri-add-circle-fill"></i>
                  </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
