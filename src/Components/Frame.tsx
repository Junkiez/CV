import React from 'react'
import '../Stylesheets/Frame.css';

function Frame(props: any) {
    return (
        <div className="avatar-container">
            <img src={props.avatar}  alt="avatar" id='avatar'/>
            <h2>{ props.nickname }</h2>
        </div>
    )
}

export default Frame
