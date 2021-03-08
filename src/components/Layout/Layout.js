import React from 'react'
import "./Layout.scss"

const layout = ( props ) => (
    <React.Fragment>
        <div className="content"> Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </React.Fragment>
)

export default layout