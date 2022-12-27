import { React, useState } from "react";
import "./menus.css";
import { Link } from "react-router-dom";


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
        <button className="opcions">
          <i className="ri-shopping-cart-2-line iconCar"></i>
        </button>
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
            <Link to="/PetComunidad" className="href">
              PetComunidad
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/Contacts" className="href">
              Contactanos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
