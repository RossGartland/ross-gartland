import React from 'react'
import './arrow.style.css';

const ArrowDown = (props) => {
    return (
        <a className="arrow-container bounce" href={props.link}> {props.title}
        <br/>
            <i class="arrow down"/>
        </a>
    )
}
export default ArrowDown;