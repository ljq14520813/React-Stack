import React from 'react';
import { Button } from 'antd';
import {inject,observer} from 'mobx-react';

@inject('store')
@observer
class Goods extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {id:1,name:'衣服'},
                {id:2,name:'鞋子'},
                {id:3,name:'裤子'},
                {id:4,name:'袜子'},
            ]
        }
    }
    skipToDetail(ele){
        console.log(ele);
        this.props.history.push('/goodsList/goodsDetail/'+ele.id+'/'+ele.name);
    }
    createList(){
        let {list} = this.state;
        return list.map(ele=>(
            <div key={ele.id} onClick={this.skipToDetail.bind(this,ele)}>
                <span>{ele.id}</span>
                <span>--</span>
                <span>{ele.name}</span>
            </div>
        ))
    }
    countHandle(type){
        if(type=='add'){
            this.props.store.CountStore.countAdd();
        }else{
            this.props.store.CountStore.countMinus();
        }
    }
    render(){
        // console.log(this.props);
        let {count,msg} = this.props.store.CountStore;
        return (
            <div>
                <h1>商品列表页哦</h1>
                <Button type="primary">Primary Button</Button>
                {this.createList()}
                <h2>{count}</h2>
                <h2>{msg}</h2>
                <button onClick={this.countHandle.bind(this,'add')}>点我count增加</button>
                <button onClick={this.countHandle.bind(this)}>点我count减少</button>
            </div>
        )
    }
}

export default Goods;