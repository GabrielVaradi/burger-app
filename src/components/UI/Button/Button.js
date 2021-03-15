import React from "react"


const button = (props) => (
    <button onClick={props.clicked} className={["button", props.btnType].join(' ')}> 
        {props.children} 
    </button>
)

export default button