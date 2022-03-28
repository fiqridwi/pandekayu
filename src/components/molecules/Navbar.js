import React, { useState } from "react";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import pandekayuLogo from "../../images/icons/pandekayu-icon.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const item = useSelector((state) => state.itemReducer);
  const [burgerMenu, setBurgerMenu] = useState("");
  const [toggle, setToggle] = useState("");

  const handleClick = () => {
    if (burgerMenu === "") {
      setBurgerMenu("active");
    } else {
      setBurgerMenu("");
    }
  };

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src={pandekayuLogo} alt="pandekayu-logo" />
        </Link>
      </div>
      <div className="nav-menu">
        <Link className="nav-menu-item" to="/">
          Beranda
        </Link>
        <Link className="nav-menu-item margin-menu-nav" to="/products">
          Produk
        </Link>
        <Link className="nav-menu-item" to="/pande-projects">
          PandeProjects
        </Link>
      </div>

      <div className="nav-cart">
        <div onClick={() => handleClick()} className="nav-burger">
          <div className={`nav-burger-menu nav-burger-menu-${burgerMenu}`}>
            <Link className="nav-burger-menu-item" to="/">
              Beranda
            </Link>
            <Link className="nav-burger-menu-item " to="/products">
              Produk
            </Link>
            <Link className="nav-burger-menu-item" to="/pande-projects">
              PandeProjects
            </Link>
          </div>
          <HiMenu fontSize="28" />
        </div>
        <Link to="/cart">
          <Icon fontSize="large">shopping_bag</Icon>
        </Link>
        <p className="nav-cart-value">{item}</p>
      </div>
    </nav>
  );
};

export default Navbar;
