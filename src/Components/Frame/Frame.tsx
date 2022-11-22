import React from 'react'
import './Frame.sass';

function Frame(props: any) {
    return (
        <div className="avatar-container">
            <img src={props.avatar}  alt="avatar" id='avatar'/>
            <h2>{ props.nickname }</h2>
        </div>
    )
}

export default Frame
