import { React, useState } from 'react';
import "./App.css";
import Home from './Components/Home/Home';
import { BuyCar } from "./Components/BuyCar/BuyCar";
import {ProductList} from "./Components/BuyCar/ProductList";


function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
     {/* <BuyCar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/> */}
      <Home />
     
    </>
  );
}

export default App;
