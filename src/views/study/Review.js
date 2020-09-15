import React from 'react';

export default class Review extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:''
        }
        this.changeMsg=this.changeMsg.bind(this)
    }
    changeMsg(){
        this.setState(state=>({
            msg:state.msg+'!'
        }))
    }
    shouldComponentUpdate(nextProps,nextState){
        // if(nextProps.msg != nextState.msg)return true;
        // return false
        console.log('第一个参数',nextProps)
        console.log('第二个参数',nextState)
        console.log(this.props)
        return true
    }
    render(){
        return(
            <div>
                {this.props.msg}
                {this.props.children}
                <button onClick={this.changeMsg}>子组件改变msg值</button>
            </div>
        )
    }
}