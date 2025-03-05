import users from "./usersData.json"

const FetchDAta1 = ()=>{
    return(
        <div>
            {users.map((x)=>{
                return(
                    <div>
                        <h1>{x.login}</h1>
                        <h1>{x.id}</h1>
                        <h1>{x.node_id}</h1>
                        <img src={x.avatar_url} style={{height:'100px'}}/>
                    </div>
                )
            }
            
            )}
        </div>
    )
}
export default FetchDAta1