import React from 'react';

export default class CircleList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {id:1,name:'张三'},
                {id:2,name:'李四'},
                {id:3,name:'王五'},
                {id:4,name:'赵六'}
            ]
        };
    }
    createList(){
        let {list} = this.state;
        return list.map(ele=>(
            <div key={ele.id} className='testList'>
                <span>{ele.id}</span>
                <span>-----</span>
                <span>{ele.name}</span>
            </div>
        ));
    }
    createList3(){
        let {list} = this.state;
        let arr=[];
        arr.push(list.map(ele=>{
            ele.age=ele.id*ele.id;
            return (
                <div key={ele.id} className='testList'>
                    <span>{ele.id}</span>
                    <span>-----</span>
                    <span>{ele.name}</span>
                    <span>-----</span>
                    <span>{ele.age}</span>
                </div>
            );
        }));
        return arr;
    }
    render(){
        let {list} = this.state;
        let list2=list.map(ele=>(
            <div key={ele.id} className='testList'>
                <span>{ele.id}</span>
                <span>-----</span>
                <span>{ele.name}</span>
            </div>
        ));
        return (
            <div>
                <div>列表渲染1</div>
                {list.map(ele=>(
                    <div key={ele.id} className='testList'>
                        <span>{ele.id}</span>
                        <span>-----</span>
                        <span>{ele.name}</span>
                    </div>
                ))}
                <div>列表渲染2</div>
                {this.createList()}
                <div>列表渲染3</div>
                {this.createList3()}
                <div>列表渲染4</div>
                {list2}
            </div>
        );
    }
}