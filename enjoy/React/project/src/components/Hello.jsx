const Hello = (props)=>{
    console.log(props)
    console.log(props.data.friends)
    return(
        <div>
            {/* <h1> {props.data[1]}</h1> */}
            <h1>my name is {props.data.name}, I am {props.data.age} years old</h1>
            <h1>working as UIdeveloper. these are the skills</h1>
            <h1>1.{props.data.skills[0]} </h1>
            <h1>2.{props.data.skills[1]}</h1>
            <h1>3. {props.data.skills[2]}</h1>
            <h1>I have few friends they are </h1>
            <h1>1. {props.data.friends[0].name} ({props.data.friends[0].skills[0]},{props.data.friends[0].skills[1]}) </h1>
            <h1>2. {props.data.friends[1].name} ({props.data.friends[1].skills[0]},{props.data.friends[1].skills[1]}) </h1>
            <h1>3. {props.data.friends[2].name} ({props.data.friends[2].skills[0]},{props.data.friends[2].skills[1]})</h1>
        </div>
    )
}
export default Hello