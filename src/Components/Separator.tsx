import React from 'react'
import '../Stylesheets/Separator.css'

function Separator(props: any) {
    return (
        <div className="Separator">
            <h4>{props.title}</h4>
            <hr/>
        </div>
    );
}

export default Separator;
