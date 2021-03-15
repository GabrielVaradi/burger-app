import React, { Component } from "react"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return  {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
        <React.Fragment>
            <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler}/>
            <SideDrawer show={this.state.showSideDrawer} clicked={this.sideDrawerClosedHandler}/>
            <main className="contentLayout">
                {this.props.children}
            </main>
        </React.Fragment>
        )
    }
}


export default Layout