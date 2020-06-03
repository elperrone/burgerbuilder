import React from "react";
import BurgerLogo from "../../assets/images/original.png";
import classes from "./Logo.module.css";

const Logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={BurgerLogo} alt="burger"/>
  </div>
);

export default Logo;
