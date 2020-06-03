import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from "../SideDrawer/SideDrawer.module.css";

const Sidedrawer = (props) => (
  <div className={classes.Sidedrawer}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </div>
);

export default Sidedrawer;
