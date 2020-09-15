import React from 'react';

export default class GoodsDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // console.log(this.props.match.params.id);
        return (
            <div>
                <h1>商品详情</h1>
                <h3>{this.props.match.params.id}</h3>
                <h3>{this.props.match.params.name}</h3>
            </div>
        )
    }
}