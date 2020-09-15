import React from 'react';
import PropTypes from 'prop-types';



function Modal(props){
    return(
        <div 
            className='layer' 
            style={{display:props.show===true?'block':'none'}}
        >
            <div className='modal'>
                <div className='modal-tit'>
                    {props.title}
                    <span className='mt-close' onClick={props.onClose}>X</span>
                </div>
                <div className='modal-content'>
                    {props.text}
                </div>
                <div className='modal-bot'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
Modal.propTypes={
    show:PropTypes.bool.isRequired
};

export default Modal;
