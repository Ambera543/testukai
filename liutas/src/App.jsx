import axios from "axios";
import { useEffect, useState } from "react";
import ZooCreate from "./Components/ZooCreate";
import ZooList from "./Components/ZooList";
function App() {


    const [animals, setAnimals] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now())

    useEffect(() => {
        axios.get('http://localhost:3003/animals')
        .then(res => {
            setAnimals(res.data);
            console.log(res.data);
        })
    }, [lastUpdate])

    const create = animal => {
        axios.post('http://localhost:3003/animals', animal)
        .then(res => {
            console.log(res.data);
            setLastUpdate(Date.now());
        })
    }

    return (
        <div className="zoo">
            <ZooCreate create={create}></ZooCreate>
            <ZooList animals={animals}></ZooList>
        </div>
    )
}

export default App;
  
    // const handledate = e => {
    //     setDate(e.target.value);
    // }
 

    // const submitDate = () => {
    //     addDate(animals.id, date)
    //     setDate('');
    // }

    
    // const goHome = (id) => {
    //     const animalsCopy = animals.slice();
    //     const ind = animalsCopy.findIndex((e) => e.id === id);
    //     animalsCopy.splice(ind, 1);
    //     setAnimals(animalsCopy);
    //     localStorage.setItem("animals", JSON.stringify(animalsCopy));
    //   };
    //   const addDate = (id, d) => {
    //     const animalsCopy = animals.slice();
    //     const i = animalsCopy.findIndex(e => e.id === id);
    //     animalsCopy[i].date= d;
    //     setAnimals(animalsCopy);
    //     localStorage.setItem('animals', JSON.stringify(animalsCopy))
    // }

//     useEffect(() => {
//         axios.get('http://localhost:3003/animals')
//         .then(res => {
//             setAnimals(res.data);
//             console.log(res.data);
//         })
//     }, [])

//     return (
//         <div className="zoo">
//             <ZooList animals={animals}> </ZooList>
//         </div>
//     )
// }

// export default App;
// goHome={goHome} addDate={addDate}>