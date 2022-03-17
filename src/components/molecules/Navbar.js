import React from "react";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import pandekayuLogo from "../../images/icons/pandekayu-icon.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const item = useSelector((state) => state.itemReducer);
  console.log(item);
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src={pandekayuLogo} alt="aa" />
        </Link>
      </div>
      <div className="nav-menu">
        <Link className="nav-menu-item" to="/">
          Beranda
        </Link>
        <Link className="nav-menu-item margin-menu-nav" to="/products">
          Produk
        </Link>
        <Link className="nav-menu-item" to="/pande-project">
          PandeProject
        </Link>
      </div>
      <div className="nav-cart">
        <Link to="/cart">
          <Icon fontSize="large">shopping_bag</Icon>
        </Link>

        <p className="nav-cart-value">{item}</p>
      </div>
    </nav>
  );
};

export default Navbar;
