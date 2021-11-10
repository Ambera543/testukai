import Child from "./Child";

function Pa({message}){

    return(
        <div className="family">
        <h1>Pa</h1>
        <Child message= {message}></Child>

    </div>
    )
}

export default Pa;

// function Pa({message}){

//     return(
//         <div className="family">
//         <h1>Pa</h1>
//         <Child message= {message}></Child>

//     </div>
//     )
// }

// export default Pa;