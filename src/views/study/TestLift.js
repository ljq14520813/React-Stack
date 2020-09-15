import React from 'react';
import {LiftA,LiftB} from '@/components';

export default class TestLift extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:''
        };
    }
    onFather(value){
        this.setState({
            msg:value
        });
    }
    render(){
        return (
            <div>
                <div>状态提升</div>
                <LiftA msg={this.state.msg} onChange={this.onFather.bind(this)} />
                <LiftB msg={this.state.msg}  />
            </div>
        );
    }
}