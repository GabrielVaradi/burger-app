import React, { Component } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import Spinner from "../../components/UI/Spinner/Spinner"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import axios from "../../axios-order"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 1.5,
    bacon: 0.75
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 1,
        purchasable: false,
        purchasing: false,
        loading: false, 
    }

    componentDidMount() {
        axios.get("/ingredients.json")
        .then(response => {
            this.setState({
                ingredients: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
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

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    loading = (value) => {
        this.setState({
            loading: value,
        })
    }

    purchaseContinueHandler = () => {
        // this.loading(true)
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'XD',
        //         address: {
        //             street: "GME",
        //             zipCode: "123456",
        //             country: "Canada"
        //         },
        //         email: "test@test.test"
        //     },
        //     deliveryMethod: "fast"
        // }
        // axios.post("/orders.json", order)
        // .then(response => {
        //     this.loading(false)
        //     this.setState({
        //         purchasing: false
        //     })
        // })
        // .catch(error => {
        //     this.loading(false)
        //     this.setState({
        //         purchasing: false
        //     })
        // })

        //Go to checkout page
        this.props.history.push("/checkout")
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = <Spinner/>
        let orderSummary = null
        

        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        if (this.state.ingredients) {
            burger = (
                <React.Fragment>
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
            orderSummary = <OrderSummary 
                                ingredients={this.state.ingredients}
                                purchaseCanceled={this.purchaseCancelHandler}
                                purchaseContinue={this.purchaseContinueHandler}
                                totalPrice={this.state.totalPrice}
                            /> 
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        )
    }

}

export default withErrorHandler(BurgerBuilder, axios)