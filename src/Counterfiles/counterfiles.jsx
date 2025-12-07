import { useState } from "react";
function CounterFiles(){
    const [num,setNum]=useState(0);
    return(
        <div>
            <h1>Counter File</h1>
            <h1>{num}</h1>
        <button onClick={()=>{
                setNum(num+1);
            }}>Increment</button>
            <button onClick={()=>{
                setNum(num-1);
            }}>Decrement</button><br/>
        </div>
    );
} 
export default CounterFiles;