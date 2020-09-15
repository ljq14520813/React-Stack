import React from 'react';
import Review from './Review';
import TestMouseMove from './TestMouseMove';

export default class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            testMsg:'abc',
            loading:false
        }
        // this.changeTestMsg = this.changeTestMsg.bind(this);
    }
    loadingChange = ()=>{
        this.setState(state=>({
            loading:!state.loading
        },()=>{
            console.log(this.state.loading)
        }))
    }
    changeTestMsg = () => {
        this.setState(state=>({
            testMsg:state.testMsg+'!'
        }))



        //  //  经典执行顺序题
        // setTimeout(() => {this.setState({ loading: true }, () => {console.log('1-setState');})}, 0)
    
        // new Promise(resolve => { 
        //     //  同步里的异步代码  >  异步里的同步代码（再具体一点里面我就不知道了）
        //     //  所以这了的3比下面的2要先执行
        //     this.setState({ loading: false }, () => {console.log('3-setState');});

        //     //  同步代码，2先执行
        //     console.log('2');

        //     //  同步代码，此时将pending-->fulfilled
        //     resolve(4);
        // })
        // //  队列微任务，等待同步任务执行完
        // .then((res) => {
        //     // promise里面的then方法源码是将传入的方法包在一个setTimeout里面，为了立即执行then方法return出来promise去做递归 
        //     // 因此这个环境下setstate是同步的 所以2-setstate早于下面一行的console.log(res, '////res');
        //     this.setState({ loading: false }, () => {console.log('2-setState');});
            
        //     //  接受resolve函数传的参数，并打印结果。
        //     console.log(res, '////res');
        // });
        // //  同步任务，紧跟2打印
        // console.log('1');


        //所以最终结果是，2  1  3-setState  2-setState  4 ////res   1-setState
    }
    render(){
        let {testMsg} = this.state;
        return (
            <div>
                <h1>这是类组件</h1>
                <button onClick={this.changeTestMsg}>点我改变testMsg</button><br/>
                <button onClick={this.loadingChange}>点我改变loading</button>
                <Review msg={testMsg} >
                    <a href='https://baidu.com'>百度一下</a>
                </Review>
                <TestMouseMove />
            </div>
        );
    }
}