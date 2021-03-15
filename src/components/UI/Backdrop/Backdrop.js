import React from 'react'

const backdrop = (props) => (
    props.show ? <div className={"backdrop"} onClick={props.modalClosed}></div> : null
)

export default backdrop