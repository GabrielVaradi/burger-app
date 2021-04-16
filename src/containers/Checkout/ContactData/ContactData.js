import React, { Component } from "react"
import axios from "../../../axios-order"

import Button from "../../../components/UI/Button/Button"

class ContactData extends Component {
    state = {
        loading: false, 
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        }
    }

    loading = (value) => {
        this.setState({
            loading: value,
        })
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.loading(true)
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'XD',
                address: {
                    street: "GME",
                    zipCode: "123456",
                    country: "Canada"
                },
                email: "test@test.test"
            },
            deliveryMethod: "fast"
        }
        axios.post("/orders.json", order)
        .then(response => {
            this.loading(false)
        })
        .catch(error => {
            this.loading(false)
        })
    }

    render () {
        return (
            <div className={"contactData"}>
                <h4> Enter your Contact Data</h4>
                <form>
                    <input className={"checkoutInput"} type="text" name="name" placeholder="Your name"/>
                    <input className={"checkoutInput"} type="email" name="email" placeholder="Your email"/>
                    <input className={"checkoutInput"} type="text" name="street" placeholder="Your street"/>
                    <input className={"checkoutInput"} type="text" name="postal" placeholder="Your postal code"/>
                    <Button btnType="success" clicked={this.orderHandler}> Order here </Button>
                </form>
            </div>
        )
    }
}

export default ContactData