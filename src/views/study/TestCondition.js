import React from 'react';


export default class TestCondition extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bol:true
        };
    };
    clickHandle(){
        this.setState({
            bol:!this.state.bol
        });
    }
    render(){
        let {bol} = this.state;
        return (
            <div>
                <button onClick={this.clickHandle.bind(this)}>点我切换隐藏</button>
                <div 
                    style={{display:bol?'block':'none'}} 
                    className='box'
                >这是一个可以显示隐藏的模块</div>
            </div>
        );
    }
    // clickHandle(){
    //     let {bol} = this.state; 
    //     if(bol==4){
    //         this.setState({
    //             bol:1
    //         },()=>{
    //             console.log(this.state.bol);
    //         });
            
    //     }else{
    //         this.setState({
    //             bol:bol+1
    //         },()=>{
    //             console.log(this.state.bol);
    //         });
    //     }
    // }
    // createComponent(){
    //     let {bol} = this.state;
    //     let ele=null;
    //     switch(bol){
    //         case 1:ele=<ChangeTab />;
    //             break;
    //         case 2:ele=<TestEvent  />;
    //             break;
    //         case 3:ele=<div>随便写点东西反正</div>;
    //             break;
    //     default:ele=<div>当前bol值为:{bol}</div>;
    //             break;
    //     };
    //     return ele;
    // }
    // render(){
    //     // let {bol} = this.state;
    //     return (
    //         <div>
    //             <button onClick={this.clickHandle.bind(this)}>点我切换隐藏</button>
    //             { this.createComponent()}
    //         </div>
    //     );
    // }
}