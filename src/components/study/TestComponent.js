import React from 'react';

export default function child(props){
    return (
        <div>
            <h3>{props.a}</h3>
            <h3>{props.getProps}</h3>
            {props.children}
        </div>
    );
}