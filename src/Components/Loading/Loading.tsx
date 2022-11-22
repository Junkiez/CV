import React, {useState} from 'react'
import './Loading.css';
import warning from '../../Resourses/warning-signs-svgrepo-com.svg';

function Loading(props: any) {
    return (
        <div className={props.display ? "loading" : "hide"}>
            <img src={warning}  alt="loading"/>
            <h1>{ props.header }</h1>
            <div className="bottom">
                <div id="progress">
                    <span></span>
                </div>
                <div id="footer">
                    <div></div>
                    <div>{ props.message }</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
