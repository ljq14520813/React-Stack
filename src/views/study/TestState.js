import React from 'react';

export default class TestState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
        console.log('constructor钩子函数');
    }
    clickHandle(){
        this.setState(pre=>({
            count:pre.count+1
        }));
    }
    static getDerivedStateFromProps(props,state){
        // if(props.count != state.count){
        //     return{
        //         count:props.count
        //     };
        // }
        console.log('static钩子函数');
        return null;
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBefore');
        return null;
    }
    componentDidUpdate(){
        console.log('组件更新');
    }
    render(){
        console.log('render执行');
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.clickHandle.bind(this)} >点我你就起飞</button>
            </div>
        );
    }
}