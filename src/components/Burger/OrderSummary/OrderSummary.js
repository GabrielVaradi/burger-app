import React from "react"


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingredientKey => {
        return  <li> 
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
        </React.Fragment>
    )
}

export default orderSummary