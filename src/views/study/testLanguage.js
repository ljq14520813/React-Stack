import React from 'react';
import {Child2} from '@/components';


export default class TestLanguage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lang:1
        };
    }
    fatherClick(id){
        this.setState({
            lang:id
        });
    }
    render(){
        return (
            <div>
                <Child2  lang={this.state.lang}  onChange={this.fatherClick.bind(this)}   />
            </div>
        );
    }
}