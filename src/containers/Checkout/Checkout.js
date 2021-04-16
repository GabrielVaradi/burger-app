import React, { Component } from "react";
import { Route } from "react-router-dom"

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import ContactData from "./ContactData/ContactData"

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: this.getIngredients()[0],
            totalPrice: this.getIngredients()[1]
        }
    }
    
    getIngredients = () => {
        const query = new URLSearchParams(this.props.location.search)
        let ingredients = {}
        let totalPrice = 0
        for (let param of query.entries()) {
            if(param[0] === "totalPrice") {
                totalPrice = param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }
        }
        return [ingredients, totalPrice]
    }


    onCheckoutCancelled = () => {
        this.props.history.goBack()
    }

    onCheckoutContinued = () => {
        this.props.history.replace("/checkout/contact-data")
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} onCheckoutCancelled={this.onCheckoutCancelled} onCheckoutContinued={this.onCheckoutContinued}/>
                <Route path={this.props.match.path + "/contact-data"} render={() => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>)}/>
            </div>
        )
    }


}

export default Checkout