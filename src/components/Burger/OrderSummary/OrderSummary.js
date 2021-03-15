import React from "react"
import Button from '../../UI/Button/Button'


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingredientKey => {
        return  <li key={ingredientKey}> 
                    <span style={{ textTransform: "capitalize" }}> {ingredientKey} </span> : {props.ingredients[ingredientKey]}
                </li>
    }))
    return (
        <React.Fragment>
            <h3> Your Order </h3>
            <p> With these ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to checkout? </p>
            <Button clicked={props.purchaseCanceled} btnType='danger'> CANCEL </Button>
            <Button clicked={props.purchaseContinue} btnType='success' > CONTINUE </Button>
        </React.Fragment>
    )
}

export default orderSummary