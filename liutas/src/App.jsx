import { useState} from "react";
import FieldAnimal from "./Components/FieldAnimal";


function App() {

    const [field, setField] = useState([]);
     const [field2, setField2] = useState([]);
    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({animal:what});
        setField(fieldCopy);
        console.log(fieldCopy);
    }
    const add1 = (what) => {
        const fieldCopy2 = field2.slice();
        fieldCopy2.push({animal:what});
        setField2(fieldCopy2);
        console.log(fieldCopy2);
    }
    // useEffect(() => {
    //     console.log('susirenderino')
    // }, []);
    const fields = (e, what) => {
      switch (what) {
          case 'field1':
              setField(e.target.value);
              break;
          case 'field2':
              setField2(e.target.value);
              break;
         
              default:;
      }
  }

    return (
        <div className="field">
        <div>
          {field.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
        </div>
        <div>
          {field2.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
        </div>
        <select className="select" onChange={e => fields(e, 'fields')} value={fields}>
        <option value={field}>Laukas</option>
        <option value={field2}>Pieva</option>
        </select>
        <button onClick={() => add1('cow')}>Add cow</button>
        <button onClick={() => add1('sheep')}>Add sheep</button>
        <button onClick={() => add('horse')}>Add horse</button>
        </div>
    );

}

export default App;


    
    