import React, { Component } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 1.5,
    bacon: 0.75
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 1,
        purchasable: false,
        purchasing: false,
    }

    updatePurchasable = (updatedIngredients) => {

        const sum = Object.keys(updatedIngredients).map((ingredientKey) => {
            return updatedIngredients[ingredientKey]
        }).reduce((sum, el) => {
            return sum + el
        },0)

        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchasable(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        let newPrice
        let updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice

        if (oldCount <= 0) {
            return
        } 
        else {
            updatedCount = oldCount - 1
            newPrice = oldPrice - priceAddition
        }
        
        updatedIngredients[type] = updatedCount
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchasable(updatedIngredients)
    }
    
    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        })
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing}> 
                    <OrderSummary ingredients={this.state.ingredients} /> 
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchaseHandler={this.purchaseHandler}
                    purchasable={this.state.purchasable}/>
            </React.Fragment>
        )
    }

}

export default BurgerBuilder