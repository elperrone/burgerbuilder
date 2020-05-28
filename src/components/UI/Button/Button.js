import React from "react";
import "./Button.css";
import classes from "./Button.css";

const Button = (props) => {
    console.log("props.btnType", props)
    
    return(
        
        <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
    )
}


export default Button;
