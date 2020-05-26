import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import "./Burger.css";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((el, ind) => {
        return <BurgerIngredient key={igKey + ind} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
       transformedIngredients = <p>Please start adding ingredients</p>
    }
  return (
    <div className="burger  ">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
