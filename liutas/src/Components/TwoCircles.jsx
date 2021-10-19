import { useState } from "react";


function TwoCircles() {

    const [counter, setCounter] = useState(0);
    const [sum, setSum] = useState(0);
   

    const addNumber = () => {

        const newCounter = counter + 1;

        setCounter(newCounter);
    }

    const nulis = () => {
        setCounter(0) || setSum (0);
    }

        const sumuok = () => {
            const newSum = counter+sum;
            setSum(newSum)
        }

  
      
    return (
        <>
        <div className="red-circle"><p>{counter}</p></div>
        <button onClick={addNumber}>Pridek 1</button>
        <div className="red-circle"><p>{sum}</p></div>
        <button onClick={sumuok}>Sumuok</button>
        <button onClick={nulis}>Nunulink</button>
       
       
        </>
    )
}

export default TwoCircles;