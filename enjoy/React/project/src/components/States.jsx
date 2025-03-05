import { useState } from "react"

const States = ()=>{
    let [data,setData]=useState('hello')
    let hi = ()=>{setData('hi')}
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={hi}>submit</button>

        </div>

    )
}
export default States