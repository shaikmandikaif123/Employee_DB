import { useState } from "react"

const StateAss = ()=>{
    let [data,setData]=useState(['Hi','hello','bye'])
    return(
        <div>
            {
                data.map((x)=>{
                    return(
                        <h1>{x}</h1>
                    )

                }
                
                )
            }
        </div>
    )
}
export default StateAss