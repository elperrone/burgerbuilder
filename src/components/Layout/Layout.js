import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";

const layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer, backdrop</div>
    <main className='content'>{props.children}</main>
  </Aux>
);

export default layout;
