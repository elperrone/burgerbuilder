import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Button from "../../components/UI/Button/Button";

class OrderSummary extends Component {
  //this could also be a functional component
  componentDidUpdate() {
    console.log('[OrderSummary DidUpdate]')
  }


  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <div>
        <Aux>
          <h3>Your order</h3>
          <p>Ingredients added:</p>
          <ul>{ingredientSummary}</ul>
          <p>
            <strong>Total price: {this.props.price.toFixed(2)}&euro;</strong>
          </p>
          <p>Continue to checkout?</p>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
            Cancel
          </Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>
            Continue
          </Button>
        </Aux>
      </div>
    );
  }
}

export default OrderSummary;
