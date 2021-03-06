import React from "react";
import "./BuildControls.css";
import "./BuildControl/BuildControl";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className="BuildControls">
  <p>Total price: <strong>{props.price.toFixed(2)}&euro;</strong></p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className='OrderButton'
    disabled={!props.purchasable}
    onClick={props.ordered}>Order now!</button>
  </div>
);

export default BuildControls;
