import React from 'react'
import './header.css'
import Logo from './imgHeader/Logo.png'
import { Link } from "react-router-dom";

function Header() {
    return (
    <div className="header">
        <Link to="/Home"><img className='logocook' src={Logo} alt="Aquí va el logo de la pagina"/></Link>
        <h1 className='Principal'>BIENVENIDOS A <br/> COOKPETS</h1>
        <Link to="/Contacts"><button className='contacts'><span> Contactanos</span> </button></Link>
    </div>)
};

export default Header;