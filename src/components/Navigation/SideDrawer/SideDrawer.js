import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import Backdrop from "../../UI/Backdrop/Backdrop"


const sideDrawer = (props) => {
    let attachedClasses = ["sideDrawer", "closeDrawer"]

    if (props.show) {
        attachedClasses = ["sideDrawer", "openDrawer"]
    }
    return (
        <React.Fragment>
            <Backdrop show={props.show} modalClosed={props.clicked} />
            <div className={attachedClasses.join(" ")}>
                <div className={"sideDrawerLogo"}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    )
}
    


export default sideDrawer