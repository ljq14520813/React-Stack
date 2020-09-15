import React from 'react';
import hoc from './hoc';

class TestHoc extends React.Component{
    render(){
        return (
            <div>
                <h3>这里是被渲染的组件</h3>
                <h4>拿到的传值是{this.props.user}</h4>
            </div>
        )
    }
}
export default hoc(TestHoc);



