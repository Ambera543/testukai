
function ZooAnimal({animal, goHome, submitDate, handledate, date }) {

   
    return (
        <div className="zoo_list_animals">
            <div className="zoo_ist_animal_name">{animal.name}</div>
            <div className="zoo_list_animal_type">{animal.type}</div>
            <div className="zoo_list_animal_stats">
                <span><i>Born date:</i> {animal.born.slice(0, 10)}</span>
                <span><i>Weight:</i> {animal.weight} kg.</span>
            </div>
            {/* <input type="date" onChange={handledate} value={date} />
            <button type="submit" onClick={submitDate}>Feeding Date</button>
             <button onClick={goHome}>Go Home</button>  */}
        </div>
    )
}

export default ZooAnimal;

// import { useState } from "react";

// function OneAnimal({ fieldAnimal, goHome, addWeight, addDate }) {

    // const [weight, setWeight] = useState('');
    // const [date, setDate] = useState('');

    // const handleWeight = e => {
    //     setWeight(e.target.value);
    // }
    // const handledate = e => {
    //     setDate(e.target.value);
    // }
    // const submitWeight = () => {
    //     addWeight(fieldAnimal.id, weight)
    //     setWeight('');
    // }

    // const submitDate = () => {
    //     addDate(fieldAnimal.id, date)
    //     setDate('');
    // }
//     return (
//         <>
//             <h2 className="h2">No.:{fieldAnimal.id} Weight: {fieldAnimal.weight} </h2>
//             <h2 className="h2"> Date of feeding: <span>{fieldAnimal.date}</span></h2>
//             <input type="date" onChange={handledate} value={date} />
//             <button type="submit" onClick={submitDate}>Add Date</button>
//             <input type="text" onChange={handleWeight} value={weight} />
//             <button onClick={submitWeight}>Add Weight</button>
//             <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
//         </>
//     );

// }

// export default OneAnimal;