import React from "react";
import "./home.css";
import Dog from "./imgHome/dog.png";
import image1 from "./imgHome/image1.png"
import image2 from "./imgHome/image2.png"
import image3 from "./imgHome/image3.png"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <img className="dog" src={Dog} alt="" />
      <p className="principal">
        Cookpets 100% natural, somos un emprendimiento que busca una nueva
        alternativa de alimentación para nuestras mascotas.
      </p>

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */} 
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={image1} className="d-block w-100 images" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image2} className="d-block w-100 images" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100 images" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Footer/>
<Menu/>
      
    </div>
    </>
  );
}

export default Home;
