import ColorInput from "./Components/ColorInput";
import Select from "./Components/Select";
import ColorButton from "./Components/ColorButton";
import Number from "./Components/Number";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  function handleColor(e) {
    setColor(e.target.value);
  }
  const [number, setNumber] = useState("");

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  return (
    <>
      <Select></Select>
      <ColorInput handleColor={handleColor}></ColorInput>
      <Number handleNumber={handleNumber}></Number>
      <ColorButton></ColorButton>
    </>
  );
}

export default App;

// function App() {

//   return (
//     <>
//     {data.map((simple, index) => <Simple key={index} simpleColor={simple.simpleColor} simplels={simple.ls} simpleNumber={simple.simpleNumber} />)}
//     </>
//   );

//  }

// export default App;
