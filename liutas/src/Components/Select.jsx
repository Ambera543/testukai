import { useState } from "react";


function Select() {

    const [value, setValue] = useState('1')

    const change = e => {
        setValue(e.target.value);
    }

    return (
        <>
            <div className="select">
                <select onChange={change} value={value}>
                    <option value={1}>circle</option>
                    <option value={2}>square</option>
                    <option value={3}>vertical line</option>
                    <option value={4}>horizontal line</option>
                </select>
            </div>
        </>
    )
}

export default Select;