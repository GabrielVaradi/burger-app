import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"


const navigationItems = (props) => (
    <ul className={"navigationItems"}>
        <NavigationItem link="/" active> Burger Builder </NavigationItem>
        <NavigationItem link="/"> Checkout </NavigationItem>
    </ul>
)

export default navigationItems