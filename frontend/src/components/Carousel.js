import React from "react";
import Burger from "../images/Burger2.jpg";
import Barbeque from "../images/Barbeque.jpg";
import Pastery from "../images/Pastry.jpg";
import "../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Carousel({ setSearch }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value); // Update search state in the Home component
  };

  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchChange} // Call handleSearchChange when input changes
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
                onClick={(e) => e.preventDefault()} // Prevent form submission
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src={Burger} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Pastery} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Barbeque} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
