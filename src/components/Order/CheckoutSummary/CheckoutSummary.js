import React from "react"
import Burger from "../../Burger/Burger"
import Button from "../../UI/Button/Button"

const checkoutSummary = (props) => {
    return (
        <div className={"checkoutSummary"}>
            <h1> Hope it's good</h1>
            <div style={{width:"100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="danger" clicked={props.onCheckoutCancelled}> Cancel </Button>
            <Button btnType="success" clicked={props.onCheckoutContinued}> Continue </Button>
        </div>
    )
}

export default checkoutSummary