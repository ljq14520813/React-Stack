import React from 'react';


export default class Child2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {id:1,name:'中文'},
                {id:2,name:'法语'},
                {id:3,name:'德语'},
                {id:4,name:'日文'},
            ]
        };
    }
    clickHandle(id){
        this.props.onChange(id);
    }
    createList(){
        let {list} = this.state;
        let {lang} = this.props;
        return list.map(ele=>
            <span 
                key={ele.id} 
                className={lang==ele.id?'on':''} 
                onClick={this.clickHandle.bind(this,ele.id)}
            >{ele.name}</span>);
    }
    render(){
        return (
            <div className='language'>
                {this.createList()}
            </div>
        );
    }
}