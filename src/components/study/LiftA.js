import React from 'react';
import PropTypes from 'prop-types';


class LiftA extends React.Component{
    constructor(props){
        super(props);
    }
    onIptChange(e){
        this.props.onChange(e.target.value);
    }
    render(){
        return (
            <div>
                <div>组件A</div>
                <input 
                    type='text'
                    value={this.props.msg}
                    onChange={this.onIptChange.bind(this)}
                />
            </div>
        );
    }
}

LiftA.propTypes = {
    msg:PropTypes.string.isRequired
};


export default LiftA;