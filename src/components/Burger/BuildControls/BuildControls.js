import React from "react"
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    { label: "Salad", type: "salad"},
    { label: "Bacon", type: "bacon"},
    { label: "Cheese", type: "cheese"},
    { label: "Meat", type: "meat"},
]

const buildControls = (props) => (
    <div className={"buildControls"}>
        <p> Current Price: <strong>{props.totalPrice}</strong> </p>
        {controls.map((control) => (
        <BuildControl 
            key={control.label} 
            ingredientLabel={control.label}
            ingredientAdded={() => props.ingredientAdded(control.type)}
            ingredientRemoved={() => props.ingredientRemoved(control.type)}
            disabledInfo={props.disabledInfo.[control.type]}/>
        ))}
        <button disabled={!props.purchasable} className={"orderButton"} onClick={props.purchaseHandler}> ORDER NOW </button>
    </div>
)

export default buildControls