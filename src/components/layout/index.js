import React from 'react';
import Aside from '../../views/study/Aside';
import Main from './Main';
import './style.scss';

export default class Layout extends React.Component {
    render(){
        return (
            <div className='lo'>
                <Aside />
                <Main />
            </div>
        )
    }
}