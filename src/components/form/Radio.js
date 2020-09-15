import React,{Component} from 'react';

export default class RadioBox extends Component{
    constructor(props){
        super(props);
    }
    change(e){
        this.props.onChange(e.target.value);
    }
    createOptions(){
        let {options,value} = this.props;
        let arr=[];
        options.map(ele=>{
            arr.push(
                <span key={ele.id}>
                    <input 
                        type='radio'
                        value={ele.id}
                        checked={value==ele.id}
                        onChange={this.change.bind(this)}
                    />
                    <span>{ele.name}</span>
                </span>
            );
        });
        return arr;
    }
    render(){
        return (
            <div className='radio'>
                {this.createOptions()}
            </div>
        );
    }
}