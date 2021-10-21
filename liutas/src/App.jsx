import { useState} from "react";
import FieldAnimal from "./Components/FieldAnimal";


function App() {

    const [field, setField] = useState([]);
    // const [field2, setField2] = useState([]);
    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({animal:what});
        setField(fieldCopy);
        console.log(fieldCopy);
    }
    // const added = (what) => {
    //     const fieldCopy = field2.slice();
    //     fieldCopy.push({animal:what});
    //     setField2(fieldCopy);
    //     console.log(fieldCopy);
    // }
    // useEffect(() => {
    //     console.log('susirenderino')
    // }, []);

    return (
        <div className="field">
        <div>
          {field.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
        </div>
        {/* <div>
          {field.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
        </div> */}
        <select className="select">
        <option value={1}>Laukas</option>
        <option value={2}>Pieva</option>
        </select>
        <button onClick={() => add('cow')}>Add cow</button>
        <button onClick={() => add('sheep')}>Add sheep</button>
        <button onClick={() => add('horse')}>Add horse</button>
        </div>
    );

}

export default App;


    
    