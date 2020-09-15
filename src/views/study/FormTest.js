import React from 'react';

export default class FormTest extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info:''
        };
    }
    changeInfo(e){
        this.setState({
            info:e.target.value
        });
    }
    clickHandle(){
        let data={
            username:this.state.info
        };
        console.log('提交表单',data);
    }
    iptHandle(e){
        this.setState({
            info:e.target.value
        });
    }
    render(){
        let {info} = this.state;

        return (
            <div>
                <div className='beControl'>
                    <div>受控表单：</div>
                    <input value={info} onChange={this.changeInfo.bind(this)}  />
                    <p>{info}</p>
                </div>
                <div className='unControl'>
                    <div>非受控表单一</div>
                    <input type='text' id='ipt' />
                    <br />
                    <button onClick={this.clickHandle.bind(this)}>提交</button>
                </div>
                <div className='unControl'>
                    <div>非受控表单二</div>
                    <input type='text' ref='phone' />
                    <button onClick={this.clickHandle.bind(this)}>提交</button>
                </div>
                <div className='unControl'>
                    <div>非受控表单三</div>
                    <input type='text' onInput={this.iptHandle.bind(this)} />
                    <button onClick={this.clickHandle.bind(this)}>提交</button>
                </div>
            </div>
        );
    }
}