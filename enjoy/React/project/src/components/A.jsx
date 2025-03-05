import B from "./B"
const A =(props)=>{
    console.log(props)
    return(
        <div>
            <B x={props.data}/>
        </div>
    )

}
export default A