import React from 'react';
import ctx from '@/utils/context';


class Child extends React.Component{
    render(){
        return(
            <ctx.Consumer>
                {state=>{
                    console.log(state.theme[state.themeStyle]);
                    return (
                        <div 
                            style={state.theme[state.themeStyle]} className='box'
                        >
                            <div>一个小方块</div>
                        </div>
                    );
                }}
            </ctx.Consumer>
        );
    }
}


export default Child;