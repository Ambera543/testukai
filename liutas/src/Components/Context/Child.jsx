import { useContext } from "react";
import {Msg} from "../../App";

function Child(){

    const message = useContext(Msg);


    return(
        <div className="family">
        <h1>Child</h1>
        <h2>Got: {message}</h2>
        <Msg.Consumer>{value=> <h2> Got2: {value}</h2>}</Msg.Consumer>

    </div>
    )
}

export default Child;


// function Child({message}){



//     return(
//         <div className="family">
//         <h1>Child</h1>
//         <h2>Got: {message}</h2>
        

//     </div>
//     )
// }

// export default Child;