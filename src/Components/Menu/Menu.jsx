import { React, useState } from "react";
import "./menus.css";
import { Link } from "react-router-dom";
import Cart from "../../store/CarBuy/Cart";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="menu">
        <Link to="/Home">
          <button className="opcions">
            <i className="ri-home-3-line iconHome"></i>
          </button>
        </Link>
        <button onClick={toggleMenu} className="opcions">
          <i className="ri-grid-fill iconMenu"></i>
        </button>
        <Link to="/Cart"><button className="opcions" id="Car"> 
          <i className="ri-shopping-cart-2-line iconCar"></i>
        </button></Link>
      </div>

      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <button onClick={toggleMenu} className="Back">
          <i class="ri-arrow-left-circle-line"></i>
        </button>

        <ul className="Cabecera-ul">
          <li className="Cabecera-li">
            <Link to="/Home" className="href">
              Inicio
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/ProductCard" className="href">
              Productos
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/Comunity" className="href">
              PetComunidad
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/Contacts" className="href">
              Contactanos
            </Link>
          </li>
          <li className="Cabecera-li ">
            <Link to="/Cart" className="href car2">
            <i className="ri-shopping-cart-2-line iconCar "></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
