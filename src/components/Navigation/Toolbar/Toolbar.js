import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"


const toolbar = (props) => (
    <header className={"toolbar"}>
        <DrawerToggle clicked={props.sideDrawerToggle}/>
        <div className={"toolbarLogo"}>
            <Logo/>
        </div>
        <nav className={"desktopOnly"}>
            <NavigationItems/>
        </nav>
    </header>

)

export default toolbar