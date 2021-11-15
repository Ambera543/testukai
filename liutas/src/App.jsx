import { useEffect, useReducer } from "react";
import { addDomino, getDominos } from "./Action/domino";
import Create from "./Components/Domino/Create";
import { dominosReducer } from "./Reducer/dominoReducer";

function App() {

    const [dominos, dispachDominos] = useReducer(dominosReducer, []);

    useEffect(()=>{
        dispachDominos(getDominos());
    },[]);

    const create = domino => {
        dispachDominos(addDomino(domino))
    }

    return (
        <div className="domino">
            <h1>Domino</h1>
        <Create create={create}></Create>

        </div>
    )
}


export default App;