import React from "react"

const buildControl = (props) => (
    <div className={"buildControl"}>
        <div className={"label"}>{props.ingredientLabel}</div>
        <button className={"less"} onClick={props.ingredientRemoved} disabled={props.disabledInfo}> Less </button>
        <button className={"more"} onClick={props.ingredientAdded}> More </button>
    </div>
)

export default buildControl