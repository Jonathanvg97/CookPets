import React from "react";
import "./comunity.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import image1 from "./ComunityImg/1A.JPG";
import image2 from "./ComunityImg/2A.JPG";
import image3 from "./ComunityImg/3A.JPG";
import image4 from "./ComunityImg/4A.JPG";
import image5 from "./ComunityImg/5A.JPG";
import image6 from "./ComunityImg/6A.JPG";

function Comunity() {
  return (
    <>
      <div>
        <Header />
        <h1 className="PrincipalC">PetComunidad</h1>
        <div className="containerTotal">
          <div className="container-izq">
           

            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src={image1}
                    className="d-block w-100 images"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    id="img1"
                    src={image2}
                    className="d-block w-100 images"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src={image3}
                    className="d-block w-100 images"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src={image4}
                    className="d-block w-100 images"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src={image5}
                    className="d-block w-100 images"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src={image6}
                    className="d-block w-100 images"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container-der">
            <p>
              "Si quieres conocer la lealtad, la fidelidad, el agradecimiento,
              la confianza, el perdón y el compañerismo en su más pura
              expresión, entonces comparte tu vida con una mascota"
            </p>
          </div>
        </div>
        <Footer />
        <Menu />
      </div>
    </>
  );
}

export default Comunity;
