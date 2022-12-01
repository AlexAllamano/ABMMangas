import React from "react";
import './Carrusel.css';
import img1 from '../../../assets/img/Header1.jpg';
import img2 from '../../../assets/img/Header2.webp';
import img3 from '../../../assets/img/Header3.jpg';

export const Carrusel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mt-2 sombraBlanca"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 imgCarrusel" src={img1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 imgCarrusel" src={img2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 imgCarrusel" src={img3} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
