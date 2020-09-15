import React from 'react';
import {observer,inject} from 'mobx-react';

@inject('store')
@observer
class TestStore extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let {UserStore} = this.props.store;
        UserStore.getUsers({});
    }
    addTodo(e){
        if(e.keyCode=='13'&&e.target.value!=''){
            let data={
                id:Date.now(),
                task:e.target.value
            }
            this.props.store.TodoStore.addTodo(data);
            e.target.value='';
        }
    }
    removeTodo(idx){
        this.props.store.TodoStore.delTodo(idx);
    }
    taskChange(idx,e){
        //  根据idx修改store
        this.props.store.TodoStore.updTodo({
            index:idx,
            task:e.target.value
        })
    }
    createTodo(){
        let {list} = this.props.store.TodoStore;
        return list.map((ele,idx)=>(
            <div className='todo-row' key={ele.id}>
                <span>{ele.id}</span>
                <span>--</span>
                <input 
                    type='text'
                    value={ele.task} 
                    onChange={this.taskChange.bind(this,idx)}
                />
                <button onClick={this.removeTodo.bind(this,idx)}>删除这一列</button>
            </div>
        ))
    }
    createUsers(){
        let {UserStore} = this.props.store;
        return UserStore.list.map(ele=>(
            <div key={ele._id}>
                <span>用户id：{ele._id}</span><br />
                <span>用户名：{ele.username}</span><br />
                <span>密码：{ele.password}</span><br />
                <span>创建时间：{ele.create_time}</span>
            </div>
        ))
    }
    render(){
        return(
            <div>
                <h1>随便练习的页面</h1>
                <p>{this.props.store.CountStore.count}</p>
                <h1>下面是测试TodoList</h1>
                <div>
                    <div>共有{this.props.store.TodoStore.total}条数据</div>
                    <div><input onKeyUp={this.addTodo.bind(this)} /></div>
                    {this.createTodo()}
                </div>
                {this.createUsers()}
            </div>
        )
    }
}

export default TestStore;







