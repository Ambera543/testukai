import { useState } from "react";


function ZooCreate({create}) {

    

    const [inputs, setInputs] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    })

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    const handleCreate = () => {
        create(inputs);
    }

    return (
        <div className="zoo_form">
            <h2>Add new animal</h2>
            <div className="zoo_form_input">
                <span>Name</span><input type="text" value={inputs.name} onChange={(e) => formControl(e, 'name')} />
            </div>
            <div className="zoo_form_input">
            <span>Type</span><input type="text" value={inputs.type} onChange={(e) => formControl(e, 'type')} />
            </div>
            <div className="zoo_form_input">
            <span>Weight</span><input type="text" value={inputs.weight} onChange={(e) => formControl(e, 'weight')} />
            </div>
            <div className="zoo_form_input">
            <span>Born date</span><input type="date" value={inputs.born} onChange={(e) => formControl(e, 'born')} />
            </div>
            <div className="zoo_form_input">
            <button onClick={handleCreate}>Add</button>
            </div>
        </div>
    )
}

export default ZooCreate;