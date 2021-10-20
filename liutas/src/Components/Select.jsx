import { useState } from "react";

const forma = [
  {
    value: 1,
    className: "red-circle",
  },
  {
    value: 2,
    className: "blue-square",
  },
  {
    value: 3,
    className: "vertical-line",
  },
  {
    value: 4,
    className: "horizontal-line",
  },
];

function Select() {
  const [value, setValue] = useState('')

  const change = i => {
    const valueCopy = value.slice();
    valueCopy[i] = !valueCopy[i]
    setValue(valueCopy);
}

  return (
    <>
      <div className="select">
        <select onChange={change} value={forma.value}>
          <option value={1}>circle</option>
          <option value={2}>square</option>
          <option value={3}>vertical line</option>
          <option value={4}>horizontal line</option>
        </select>
      </div>
    </>
  );
}

export default Select;

// const [value, setValue] = useState('1')

// const change = e => {
//     setValue(e.target.value);
// }

// onChange={change} value={value}
