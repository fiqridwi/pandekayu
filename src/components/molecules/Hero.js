import React from "react";
import heroImage1 from "../../images/products/13.jpg";
import heroImage2 from "../../images/products/17.jpg";
import heroImage3 from "../../images/products/22.jpg";

import Button from "../../components/atoms/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-title">Furniture Kayu Menarik</h1>
        <p className="margin-bottom-3">
          Pandekayu woodwork menyediakan produk-produk furniture bergaya modern
          dan berkualitas namun dengan harga yang terjangkau.
        </p>
        <Link to="products" className="link">
          <div className="hero-button">
            <Button
              title="Mulai Belanja"
              icon="shopping_cart_checkout_icon"
              color="button-yellow"
            ></Button>
          </div>
        </Link>
      </div>

      <div className="hero-image">
        <div className="hero-image-1">
          <img src={heroImage1} alt="heroimage" />
        </div>
        <div className="hero-image-2">
          <img src={heroImage2} alt="heroimage" />
        </div>
        <div className="hero-image-3">
          <img src={heroImage3} alt="heroimage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
