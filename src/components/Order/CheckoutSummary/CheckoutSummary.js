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
            <Button btnType="Danger" clicked> Cancel </Button>
            <Button btnType="Success" clicked> Cancel </Button>
        </div>
    )
}

export default checkoutSummary