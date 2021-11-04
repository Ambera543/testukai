import axios from "axios";
import { useEffect, useState } from "react";
import ZooCreate from "./Components/ZooCreate";
import ZooList from "./Components/ZooList";
import ZooModal from "./Components/ZooModal";
// import ZooAnimal from "./Components/ZooAnimal";
import ZooNav from "./Components/ZooNav";
import animalSort from "./Common/animalSort";

function App() {
  const [animal, setAnimal] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [modalAnimals, setModalAnimals] = useState({
    name: "",
    type: "",
    weight: "",
    born: "",
  });

  const [types, setTypes] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  const [sortBy, setSortBy] = useState("");

  const dateOnly = (data) => {
    return data.map((a) => {
      a.born = a.born.slice(0, 10);
      return a;
    });
  };

  // const sort = (by) => {
  //     setAnimals(animalSort(animals, by));
  //     setSortBy(by);
  // }

  useEffect(() => {
    if (sortBy) {
      setAnimal(animalSort(animal, sortBy));
    }
  }, [sortBy]);

  useEffect(() => {
    if (filterBy) {
      axios
        .get("http://localhost:3003/animals-filter/" + filterBy)
        .then((res) => {
          setAnimal(dateOnly(res.data));
          console.log(res.data);
        });
    }
  }, [filterBy]);

  useEffect(() => {
    if (searchBy) {
      axios
        .get("http://localhost:3003/animals-name/?s=" + searchBy)
        .then((res) => {
          setAnimal(dateOnly(res.data));
          console.log(res.data);
        });
    }
  }, [searchBy]);

  useEffect(() => {
    axios.get("http://localhost:3003/animals").then((res) => {
      // setAnimal(animalSort(dateOnly(res.data), sortBy));
      setAnimal(dateOnly(res.data));
      console.log(res.data);
    });
  }, [lastUpdate]);

  useEffect(() => {
    axios.get("http://localhost:3003/animals-type").then((res) => {
      setTypes(res.data);
      console.log(res.data);
    });
  }, [lastUpdate]);

  const create = (animal) => {
    axios.post("http://localhost:3003/animals", animal).then(() => {
  
      setLastUpdate(Date.now());
    });
  };

  const edit = (animal, id) => {
    setShowModal(false);
    axios.put("http://localhost:3003/animals/" + id, animal).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const remove = (id) => {
    setShowModal(false);
    axios.delete("http://localhost:3003/animals/" + id).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };
  const reset = () => {
    setLastUpdate(Date.now());
  };

  const modal = (animal) => {
    setShowModal(true);
    setModalAnimals(animal);
  };

  const hide = () => {
    setShowModal(false);
  };

  return (
    <div className="zoo">
      <ZooNav
        types={types}
        search={setSearchBy}
        filter={setFilterBy}
        sort={setSortBy}
        reset={reset}
      ></ZooNav>
      <ZooCreate create={create}></ZooCreate>
      <ZooList animals={animal} modal={modal}></ZooList>
      <ZooModal
        edit={edit}
        remove={remove}
        hide={hide}
        animals={modalAnimals}
        showModal={showModal}
      ></ZooModal>
    </div>
  );
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
