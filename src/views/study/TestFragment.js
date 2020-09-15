import React from "react";

function Child1(props){
    return (
        <div>{props.count}</div>
    );
}

function Child2(props){
    function click(){
        console.log('count');
    }
    return (
        <button onClick={click}>点我加一</button>
    );
}


export default class TestFragment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'随便写的',
            count:0
        };
    }
    countChange(val){
        this.setState({
            count:val
        });
    }
    render(){
        return (
            <React.Fragment>
                <Child1 count={this.state.count}/>
                <Child2 onChange={this.countChange.bind(this)} />
            </React.Fragment>
        );
    }
}