import React from 'react'
import './header.css'
import Logo from './imgHeader/Logo.png'
import { Link } from "react-router-dom";

function Header() {
    return (
    <div className="header">
        <img className='logocook' src={Logo} alt="Aquí va el logo de la pagina"/>
        <h1 className='Principal'>BIENVENIDOS A <br/> COOKPETS</h1>
        <Link to="/Contacts"><button className='contacts'>Contactanos </button></Link>
    </div>)
};

export default Header;