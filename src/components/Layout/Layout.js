import React from "react"
import Toolbar from "../Navigation/Toolbar/Toolbar"

const layout = ( props ) => (
    <React.Fragment>
        <Toolbar/>
        <main className="contentLayout">
            {props.children}
        </main>
    </React.Fragment>
)

export default layout