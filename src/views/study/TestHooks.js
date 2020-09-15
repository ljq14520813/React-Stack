import React,{useState,useEffect} from "react";


export default function TestHooks(props){
    let [count,setCount] = useState(1);
    let [list,setList] = useState([]);
    var timer=null;
    useEffect(()=>{
        document.title=`You clicked ${count} times`;
        timer = setTimeout(()=>{
            setList([1,2,3,4]);
            console.log(111);
        },1500);
        return ()=>{
            clearTimeout(timer);
        }
    },[count])
    function createList(){
        return list.map(ele=>(
            <div key={ele}>
                [{ele}]
            </div>
        ))
    }
    return (
        <div>
            <h1>测试Hooks</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>改变count</button>
            {createList()}
        </div>
    )
}