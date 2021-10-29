
import { useEffect, useState } from "react";

function ZooModal({showModal, hide, animal, edit, remove}) {
    const [input, setInput] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    })

    useEffect(() => {
        setInput({
            name: animal.name,
            type: animal.type,
            weight: animal.weight,
            born: animal.born.slice(0,10)
        })
    },[animal])

    const handleEdit = () => {
        edit({
            name: input.name,
            type: input.type,
            weight: input.weight,
            born: input.born
        }, animal.id)
    }

    const formControl = (e, what) => {
        const inputCopy = { ...input };
        inputCopy[what] = e.target.value;
        setInput(inputCopy);
    }



    return (
        <div className="zoo_modal" style={{
            display: showModal ? 'flex' : 'none',
            top: window.scrollY + 100 + 'px'
            }}>
            <div className="zoo_form">
            <h2>Edit animals</h2>
            <div className="zoo_form_input">
                <span>Name</span><input type="text" value={input.name} onChange={(e) => formControl(e, 'name')} />
            </div>
            <div className="zoo_form_input">
            <span>Type</span><input type="text" value={input.type} onChange={(e) => formControl(e, 'type')} />
            </div>
            <div className="zoo_form_input">
            <span>Weight</span><input type="text" value={input.weight} onChange={(e) => formControl(e, 'weight')} />
            </div>
            <div className="zoo_form_input">
            <span>Born date</span><input type="date" value={input.born} onChange={(e) => formControl(e, 'born')} />
            </div>
            <div className="zoo_form_input_buttons">
            <button onClick={handleEdit}>Save</button>
            <button onClick={hide}>Cancel</button>
            <button onClick={() => remove(animal.id)}>Delete</button>
            </div>
        </div>
        </div>
    )
}

export default ZooModal;