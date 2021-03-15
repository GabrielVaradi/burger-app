import React from 'react'
import Backdrop from "../Backdrop/Backdrop"


const modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} modalClosed={props.modalClosed} />
        <div className={"modal"} style={{
            transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? '1' : '0'
            }}>
            {props.children}
        </div>

    </React.Fragment>
)

export default modal