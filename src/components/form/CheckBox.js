import React from 'react';


export default class CheckBox extends React.Component{
    constructor(props){
        super(props);
    }
    change(e){
        let {value} = this.props;
        if(e.target.checked){
            value.push(Number(e.target.value));
            value.sort((a,b)=>a-b);
        }else{
            // value=value.filter(ele=>ele!=e.target.value);
            let index=value.indexOf(Number(e.target.value));
            value.splice(index,1);
            value.sort((a,b)=>a-b);
        }
        this.props.onChange(value);
    }
    createOptions(){
        let {options,value} = this.props;
        let arr=[];
        options.map(ele=>{
            if(value.includes(ele.id)){
                ele.checked=true;
            }else{
                ele.checked=false;
            }
            // if(value.find(ele1=>ele1==ele.id)){
            //     ele.checked=true;
            // }else{
            //     ele.checked=false;
            // }
            // if(value.findIndex(ele1=>ele1==ele.id)!=-1){
            //     ele.checked=true;
            // }else{
            //     ele.checked=false;
            // }
            arr.push(
                <span key={ele.id}>
                    <input 
                        type='checkbox' 
                        value={ele.id}
                        checked={ele.checked}
                        onChange={this.change.bind(this)}
                    />
                    <span>{ele.name}</span>
                </span>
            );
        });
        return arr;
    }
    render(){
        return (
            <div className='checkbox'>
                {this.createOptions()}
            </div>
        );
    }
}





































// export default class CheckBox extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     change(e){
//         let {value} = this.props;
//         if(e.target.checked){
//             value.push(Number(e.target.value));
//         }else{
//             value=value.filter(ele=>ele!=e.target.value);
//         }
//         this.props.onChange(value);
//     }
//     createOptions(){
//         let {options,value} = this.props;
//         let arr=[];
//         options.map(ele=>{
//             if(value.includes(ele.id)){
//                 ele.checked=true;
//             }else{
//                 ele.checked=false;
//             }
//             arr.push(
//                 <span key={ele.id}>
//                     <input 
//                         type='checkbox' 
//                         value={ele.id}   
//                         onChange={this.change.bind(this)}
//                         checked={ele.checked}
//                     />
//                     <span>{ele.name}</span>
//                 </span>
//             );
//         });
//         return arr;
//     }
//     render(){
//         return (
//             <div className='checkbox'>
//                 {this.createOptions()}
//             </div>
//         );
//     }
// }