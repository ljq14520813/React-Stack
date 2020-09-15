import React from 'react';


function getType(type){
    let btnClass='';
    switch(type){
        case undefined:
            btnClass='def';
            break;
        case 'primary':
            btnClass='primary';
            break;
        case 'success':
            btnClass='success';
            break;
        case 'info':
            btnClass='info';
            break;
        case 'warning':
            btnClass='warning';
            break;
        case 'danger':
            btnClass='danger';
            break;
        default:btnClass='def';break;
    };
    return btnClass+' ';
}




export default function JqButton(props){
    return (
        <div 
            className={'jq-button '+
                getType(props.type) +
                (props.round?'round':'')}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
}