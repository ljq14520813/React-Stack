import React from "react";

function hoc(WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                user:''
            };
        }
        componentDidMount(){
            this.setState({
                user:localStorage.getItem('user')
            });
        }
        render(){
            return (
                <div>
                    <h1>这里是修饰title</h1>
                    <h3>传递的user值是{this.state.user}</h3>
                    <WrappedComponent user={this.state.user} />
                </div>
            )
        }
    }
}

export default hoc;