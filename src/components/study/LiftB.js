import React from 'react';

export default class LiftB extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>组件B</div>
                <p>{this.props.msg}</p>
            </div>
        );
    }
}