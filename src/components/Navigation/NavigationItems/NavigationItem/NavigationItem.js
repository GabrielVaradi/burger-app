import React from "react"
import { NavLink } from "react-router-dom"


const navigationItem = (props) => (
     <li className={"navigationItem"}>
         {/* activeClassName useful if using css modules, in this case it is unecessary*/}
        <NavLink to={props.link} activeClassName={"active"} exact> {props.children}</NavLink>
    </li>
)

export default navigationItem