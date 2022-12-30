// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import "../CarBuy/cart.css";
// import Header from "../../Components/Header/Header";
// import Menu from "../../Components/Menu/Menu";
// import Reducer from "../../Components/Reducer";

// const Cart = () => {
//   const cart = useSelector((state) => state);
//   console.log(cart);
//   const dispatch = useDispatch();
//   const addition = (acc, currentvalue) => {
//     return acc + currentvalue.price * currentvalue.quantity;
//   };
//   const total = cart.reduce(addition, 0);
//   return (
//     <>
//     <Header />
//     <main className="main-car">
//     <section className='container-carrito'>
//         <div className='p-car-container'>
//           <div className="ContainerCard">
//             {cart.map((product) => {
//               return (
//                 <div className="card" key={product.id}>
//                   <h2>{product.title}</h2>
//                   <img src={product.url} alt="Imagenes Productos" />
//                   <h3>{product.category}</h3>
//                   <h3>{product.size}</h3>
//                   <p> `$precio: ${product.price}`</p>
//                 <p>Total $:{product.price * product.quantity}</p>
//                 <button
//                   onClick={() => dispatch({ type: "REMOVE", payload: product})}
//                 >
//                   remove
//                 </button>
//                 <button
//                   onClick={() => dispatch({ type: "INCREASE", payload: product })}
//                 >
//                   +
//                 </button>
//                 <p>{product.quantity}</p>
//                 <button
//                   onClick={() => {
//                     if (product.quantity > 1) {
//                       dispatch({ type: "DECREASE", payload: product });
//                     } else {
//                       dispatch({ type: "REMOVE", payload: product });
//                     }
//                   }}
//                 >
//                   -
//                 </button>
//                 </div>
//               );
//             })}
          
//           </div>
//         </div>
//         </section>
//       </main>
      
//       {total > 0 && <h2>total:{total}</h2>}
//      <Menu/>
//      </>
//   );
// };

// export default Cart;


import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../CarBuy/cart.css'

function Carrito() {
    //Reduce
    const cart = useSelector((state) => state)
    console.log(cart)
    const dispatch = useDispatch()
    
    const addition = (acc, currentValue)=>{
        return acc + currentValue.price * currentValue.quantity
    }
    const total=cart.reduce(addition, 0) 
    
    let totalItems = 0;
    //Total
    cart.map((products)=>{totalItems += products.quantity});
    return (
        <>
            <Header />
            <main className="main main-car">
                <section className='container-carrito'>
                {cart.map((product) =>
                    <div className='p-car-container' key={product.id}>
                        <img src={product.image} alt="" className='img-card-car' />
                        <div className='flex-container'>
                            <p>{product.title}</p>
                            <img src={product.url} alt="Imagenes Productos" />
                            <div className='flex-sub-cont'>
                                <div>
                                    <p>{product.category}</p>
                                    <p>$ {product.price * product.quantity}</p>
                                </div>
                                <div className='cont-buttons'>
                                    <button onClick={()=> {
                                        if (product.quantity > 1){
                                            dispatch({type: 'DECREASE', payload: product })
                                        } else{
                                            dispatch({type: 'REMOVE', payload: product })
                                        }
                                        }}
                                        className='btn-add-sub'>-</button>
                                    <div>
                                        <p>{product.quantity}</p>
                                    </div>
                                    <button onClick={()=>dispatch({type: 'INCREASE',payload: product })} className='btn-add-sub'>+</button>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => dispatch({ type: 'REMOVE', payload: product })} className='delete-product'>X</button>
                    </div>)}
                </section>
                <section className='section-car-total'>
                    <div className='car-total'>
                        <h5>{`Productos en el carrito: ${totalItems}`}</h5>
                        <p>Total:</p>
                        <h4>$ {total}</h4>
                        <button>CONTINUAR</button>
                        {console.log(cart)}
                    </div>
                </section>
            </main>
        <Menu/>
        </>
    )
}

export default Carrito