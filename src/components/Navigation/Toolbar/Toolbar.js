import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"


const toolbar = (props) => (
    <header className={"toolbar"}>
        <div> MENU </div>
        <div className={"toolbarLogo"}>
            <Logo/>
        </div>
        <nav className={"desktopOnly"}>
            <NavigationItems/>
        </nav>
    </header>

)

export default toolbar