import React from 'react';

export default class FormPractice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info:{
                username:'',
                password:'',
                sex:'女',
                like:'2',
                agree:true
            }
        };
    }
    formChange(key,e){
        let {info} = this.state;
        if(key=='agree'){
            info[key]=e.target.checked;
        }else{
            info[key]=e.target.value;
        }
        this.setState({
            info
        });
    }
    submit(){
        let data=this.state.info;
        console.log('表单提交',data);
    }
    render(){
        let {info} = this.state;
        return (
            <div>
                <div>
                    <span>用户名：</span>
                    <input value={info.username} onChange={this.formChange.bind(this,'username')} />
                </div>
                <div>
                    <span>密码：</span>
                    <input type='password' value={info.password} onChange={this.formChange.bind(this,'password')} />
                </div>
                <div>
                    <span>你的性别是：</span>
                    男<input type='radio'  value='男' onChange={this.formChange.bind(this,'sex')} checked={info.sex=='男'} />
                    女<input type='radio'  value='女' onChange={this.formChange.bind(this,'sex')} checked={info.sex=='女'}/>
                </div>
                <div>
                    <div>你的爱好是：</div>
                    <select value={info.like} onChange={this.formChange.bind(this,'like')}>
                        <option value='唱'>唱</option>
                        <option value='跳'>跳</option>
                        <option value='rap'>rap</option>
                    </select>
                </div>
                <div>
                    <span>是否同意上述协议：</span>
                    <input type='checkbox' checked={info.agree} onChange={this.formChange.bind(this,'agree')} />
                </div>
                <button onClick={this.submit.bind(this)}>提交数据</button>
            </div>
        );
    }
}