import React, { Component } from "react"

import Button from "../../../components/UI/Button/Button"

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        }
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
                    <Button btnType="success"> Order here </Button>
                </form>
            </div>
        )
    }
}

export default ContactData