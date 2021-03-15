import React, { Component } from "react"
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {

    componentDidUpdate() {
        console.log("OrderSummary Did Update")
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map((ingredientKey => {
            return  <li key={ingredientKey}> 
                        <span style={{ textTransform: "capitalize" }}> {ingredientKey} </span> : {this.props.ingredients[ingredientKey]}
                    </li>
        }))
        return (
            <React.Fragment>
                <h3> Your Order </h3>
                <p> With these ingredients : </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong> Total Price: {this.props.totalPrice.toFixed(2)} </strong></p>
                <p> Continue to checkout? </p>
                <Button clicked={this.props.purchaseCanceled} btnType='danger'> CANCEL </Button>
                <Button clicked={this.props.purchaseContinue} btnType='success' > CONTINUE </Button>
            </React.Fragment>
        )
    }
}

export default OrderSummary