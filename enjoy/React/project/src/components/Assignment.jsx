import { useState } from "react"

const Assignment = ()=>{
    let [count,setCount]=useState(0)
    let incre = ()=>{setCount(count+1)}
    let decr = ()=>{setCount(count-1)}
    let Reset = ()=>{setCount(0)}
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incre}>Add</button>
            <button onClick={decr}>Sub</button>
            <button onClick={Reset}>Reset</button>

        </div>

    )
}
export default Assignment