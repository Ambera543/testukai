import { useState, useReducer } from "react";
import countReducer from "./Reducer/countReducer";
import { actionAddOne, actionDoMultiplay, actionRemEleven } from "./Action";
function App() {

    const [multi, setMulti] = useState(0);
    const handleMulti = e => setMulti(e.target.value);

    // const [count, setCount] = useState(0);
    const [count, countDispatch] = useReducer(countReducer, 0);

    // const addOne = () => setCount(count + 1);
    const addOne = () => countDispatch(actionAddOne());

    // const remEleven = () => setCount(count - 11);
    const remEleven = () => countDispatch(actionRemEleven());

    // const multiply = () => setCount(count * multi);
    const multiply = () => countDispatch(actionDoMultiplay(multi));

    

    return (
        <div className="reducer">
            <h1>Hello, Reducer!</h1>
            <h1>{count}</h1>
            <div className="reducer_button">
                <button onClick={addOne}>+1</button>
                <button onClick={remEleven}>-11</button>
                <input type="text" value={multi} onChange={handleMulti}/>
                <button onClick={multiply}>X</button>
            </div>
        </div>
    )
}

export default App;

