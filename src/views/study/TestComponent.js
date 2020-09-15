import React from 'react';

import {
    JQButton
} from '@/library';

import {Modal} from '@/components';



export default class TestComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShow:true
        };
    }
    onClose(){
        this.setState({
            isShow:false
        });
    }
    render(){
        return(
            <div>
                {/* <JQButton type='primary'>家祺按钮</JQButton> */}
                {/* <Modal 
                    title='提示'
                    text='你确定要删除么？'
                >
                    <JQButton type='primary'>确定</JQButton>
                </Modal> */}
                <Modal 
                    title='提示'
                    text={<input type='text'></input>}
                    show={this.state.isShow}
                    onClose={this.onClose.bind(this)}
                >
                    <JQButton type='primary'>确定</JQButton>
                    <JQButton >取消</JQButton>
                </Modal>
            </div>
        );
    }
}