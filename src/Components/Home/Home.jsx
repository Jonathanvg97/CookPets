import React from 'react'
import './home.css'
import Dog from './imgHome/dog.png'
// import SimpleImageSlider from "react-simple-image-slider";




function Home() {
    return (
    <div className="home">
        <img className='dog' src={Dog} alt="" />
        <p className='principal'>Cookpets 100% natural, somos un emprendimiento que busca una nueva alternativa de alimentación para nuestras mascotas .</p>
    <div className="menu">
    <i className="ri-home-3-line iconHome"></i>
    <i class="ri-grid-fill iconMenu"></i>
    <i class="ri-shopping-cart-2-line iconCar"></i>
    </div>
    </div>);
};



export default Home;