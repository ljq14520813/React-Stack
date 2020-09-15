import React from 'react';

import routes from '@/views';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';

class Main extends React.Component {
    createRoutes(){
        let arr=[];
        routes.map(ele=>{
            arr.push(
                <Route 
                    path={ele.path}
                    key={ele.id}
                    component={ele.component}
                    exact
                />
            )
            if(ele.children){
                ele.children.map(ele=>{
                    arr.push(
                        <Route 
                            path={ele.path}
                            key={ele.id}
                            component={ele.component}
                            exact
                        />
                    )
                })
            }
        })
        return arr;
    }
    render(){
        return (
            <div className='lo-main'>
                <Switch>
                    {this.createRoutes()}
                    <Redirect from='/*' to='/cirList' />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);