import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"


const sideDrawer = (props) => {
    return (
        <div className={"sideDrawer"}>
            <div className={"sideDrawerLogo"}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
}
    


export default sideDrawer