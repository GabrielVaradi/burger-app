import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"


const navigationItems = (props) => (
    <ul className={"navigationItems"}>
        <NavigationItem link="/"> Burger Builder </NavigationItem>
        <NavigationItem link="/orders"> Orders </NavigationItem>
    </ul>
)

export default navigationItems