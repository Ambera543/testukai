import { useState, useEffect } from "react";
import FieldAnimal from "./Components/FieldAnimal";
import idGenerator from "./Common/idGenerator";

function App() {
  const [field, setField] = useState([]);
  const [fieldNamber, setFieldNamber] = useState(1);

  const add = (what) => {
    const fieldCopy = field.slice();
    fieldCopy.push({
      id: idGenerator(),
      animal: what,
      field: parseInt(fieldNamber),
    });
    setField(fieldCopy);
    localStorage.setItem("animals", JSON.stringify(fieldCopy));
    console.log(fieldCopy);
  };

  const selectField = (e) => {
    setFieldNamber(e.target.value);
  };

  const goHome = (id) => {
    const fieldCopy = field.slice();
    const ind = fieldCopy.findIndex((e) => e.id === id);
    fieldCopy.splice(ind, 1);
    setField(fieldCopy);
    localStorage.setItem("animals", JSON.stringify(fieldCopy));
  };

  const groupGoHome = (group) => {
    const fieldCopy = field.slice();
    while (true) {
      const ind = fieldCopy.findIndex((e) => e.animal === group);
      if (ind < 0) {
        break;
      }
      fieldCopy.splice(ind, 1);
    }
    setField(fieldCopy);
    localStorage.setItem("animals", JSON.stringify(fieldCopy));
  };

  useEffect(() => {
    const animalsFromStorage = localStorage.getItem("animals");
    if (null !== animalsFromStorage) {
      setField(JSON.parse(animalsFromStorage));
    }
  }, []);

  return (
    <>
      <div className="field">
        <div className="field__part">
          {field.map((fieldAnimal, i) => (
            <FieldAnimal
              key={i}
              field={1}
              fieldAnimal={fieldAnimal}
            ></FieldAnimal>
          ))}
        </div>
        <div className="field__part">
          {field.map((fieldAnimal, i) => (
            <FieldAnimal
              key={i}
              field={2}
              fieldAnimal={fieldAnimal}
              goHome={goHome}
            ></FieldAnimal>
          ))}
        </div>
        <div className="field__part">
          {field.map((fieldAnimal, i) => (
            <FieldAnimal
              key={i}
              field={3}
              fieldAnimal={fieldAnimal}
              goHome={goHome}
            ></FieldAnimal>
          ))}
        
        </div>
      </div>
      <div className="buttons-holder">
        <button onClick={() => add("cow")}>Add cow</button>
        <button onClick={() => add("sheep")}>Add sheep</button>
        <button onClick={() => add("horse")}>Add horse</button>
        <select value={fieldNamber} onChange={selectField}>
          <option value={1}>Field One</option>
          <option value={2}>Field Two</option>
          <option value={3}>Field Three</option>
        </select>
      </div>
      <div className="buttons-holder">
        <button onClick={() => groupGoHome("cow")}>Go cows</button>
        <button onClick={() => groupGoHome("sheep")}>Go sheeps</button>
        <button onClick={() => groupGoHome("horse")}>Go horses</button>
      </div>
    </>
  );
}

export default App;

// const ind = fieldCopy.findIndex(e => e.id === id);

// fieldCopy.splice(ind, 1);

// const [field, setField] = useState([]);
// const [field2, setField2] = useState([]);
// const add = (what) => {
//    const fieldCopy = field.slice();
//    fieldCopy.push({animal:what});
//    setField(fieldCopy);
//    console.log(fieldCopy);
// }
// const add1 = (what) => {
//    const fieldCopy2 = field2.slice();
//    fieldCopy2.push({animal:what});
//    setField2(fieldCopy2);
//    console.log(fieldCopy2);
// }
// // useEffect(() => {
// //     console.log('susirenderino')
// // }, []);
// const fields = (e, what) => {
//  switch (what) {
//      case 'field1':
//          setField(e.target.value);
//          break;
//      case 'field2':
//          setField2(e.target.value);
//          break;

//          default:;
//  }
// }

// return (
//    <div className="field">
//    <div>
//      {field.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
//    </div>
//    <div>
//      {field2.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
//    </div>
//    <select className="select" onChange={e => fields(e, 'fields')} value={fields}>
//    <option value={field}>Laukas</option>
//    <option value={field2}>Pieva</option>
//    </select>
//    <button onClick={() => add1('cow')}>Add cow</button>
//    <button onClick={() => add1('sheep')}>Add sheep</button>
//    <button onClick={() => add('horse')}>Add horse</button>
//    </div>
// );

// }
