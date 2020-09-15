import React from 'react';
// import 'antd/dist/antd.css';
// import TestHooks from '@/views/study/TestHooks';


import {Layout} from '@/components';
import {HashRouter,BrowserRouter} from 'react-router-dom';

import {Provider} from 'mobx-react';
import store from '@/store';

export default class App extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <HashRouter>
                <Provider store={store}>
                    <Layout />
                </Provider>
            </HashRouter>
        );
    }
}