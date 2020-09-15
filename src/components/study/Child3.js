import React from 'react';

export default class Child3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {id:1,name:'中文'},
                {id:2,name:'英文'},
                {id:3,name:'法语'},
                {id:4,name:'德语'},
            ]
        };
    }
    sonClick(id,name){
        this.props.onChange(id,name);
    }
    createList(){
        let {list} = this.state;
        let {lang} = this.props;
        return (
            list.map(ele=>
                <span 
                    key={ele.id}
                    className={lang==ele.id?"on":""}
                    // onClick={this.sonClick.bind(this,ele.id)}
                    onClick={()=>this.sonClick(ele.id,ele.name)}
                >{ele.name}</span>)
        );
    }
    render(){
        return (
            <div className='language'>
                {this.createList()}
            </div>
        );
    }
}