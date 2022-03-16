import React from "react";
import Icon from "@mui/material/Icon";
import "./button.css";

const Button = ({ title, icon, color }) => {
  return (
    <a className={`button ${color}`} href="">
      <p>{title}</p>
      <Icon>{icon}</Icon>
    </a>
  );
};

export default Button;
