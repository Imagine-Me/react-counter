import React from 'react';
import './button.css'

const button = (props) => {
    return <button onClick={props.clicked} className={props.children}>{props.children}</button>
}

export default button;