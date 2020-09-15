import React from 'react';

export default class Select extends React.Component{
    constructor(props){
        super(props);
    }
    createOptions(){
        let {options,selText} = this.props;
        let arr=[];
        if(!selText)selText='请选择';
        arr.push(
            <option 
                value='0' 
                disabled 
                hidden 
                key='0'
            >{selText}</option>
        );
        options.map(ele=>arr.push(
            <option 
                key={ele.id} 
                value={ele.id}
            >{ele.name}</option>
        ));
        return arr;
    }
    change(e){
        this.props.onChange(Number(e.target.value));
    }
    render(){
        let {value,def} = this.props;
        if(!value)value=0;
        return (
            <select 
                value={def?0:this.props.value} 
                onChange={this.change.bind(this)}
            >
                {this.createOptions()}
            </select>
        );
    }
}