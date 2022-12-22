import React from 'react'
import './header.css'
import Logo from './imgHeader/Logo.png'

function Header() {
    return (
    <div className="header">
        <img className='logocook' src={Logo} alt="Aquí va el logo de la pagina"/>
        <h1 className='Principal'>BIENVENIDOS A <br/> COOKPETS</h1>
        <button className='contacts'>Escribenos</button>
    </div>);
};

export default Header;