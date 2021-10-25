import { useState } from "react";

function OneAnimal({ fieldAnimal, goHome, addWeight, addDate }) {

    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('25-10-2021');

    const handleWeight = e => {
        setWeight(e.target.value);
    }
    const handleDate = e => {
        setDate(e.target.value);
    }
    const submitWeight = () => {
        addWeight(fieldAnimal.id, weight)
        setWeight('');
    }

    const submitDate = () => {
        addDate(fieldAnimal.id, date)
        setDate('');
    }
    return (
        <>
            <h2>No.:{fieldAnimal.id} Weight: {fieldAnimal.weight} <span>Date:{fieldAnimal.date}</span></h2>
            <input type="date" onChange={handleDate} value={date} />
            <button onClick={submitDate}>Add Date</button>
            <input type="text" onChange={handleWeight} value={weight} />
            <button onClick={submitWeight}>Add Weight</button>
            <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
        </>
    );

}

export default OneAnimal;