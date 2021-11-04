import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Jewelrys from "./components/Jewelrys";
import JewelryList from "./components/JewelryList"
import Jewely from "./components/Jewely";
import JewelryModal from "./components/JewelryModal";
import JewelNav from "./components/JewelNav";

function App() {
  const [jewelrys, setJewelrys] = useState();
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false)
  const [modalJewelry, setModalJewelry] = useState({
    product: "",
    quantity: "",
    price: "",
    in_stock: "",
    last_order: ""
  });

  useEffect(() => {
    axios.get("http://localhost:3003/jewelry").then((res) => {
      setJewelrys(res.data);
      console.log(res.data);
    });
  }, [lastUpdate]);


  const [products, setProducts] = useState([])
  const [filterBy, setFilterBy] = useState('')
  const [searchBy, setSearchBy] = useState('')

  useEffect(() => {
      if (filterBy) {
      axios.get('http://localhost:3003/jewelry-filter/'+filterBy)
          .then(res => {
            setJewelrys(res.data);
              console.log(res.data);
          })
      }
  }, [filterBy])


  useEffect(() => {
      if (searchBy) {
      axios.get('http://localhost:3003/jewelry-product/?s='+searchBy)
          .then(res => {
            setJewelrys(res.data);
              console.log(res.data);
          })
      }
  }, [searchBy])

  useEffect(() => {
    axios.get('http://localhost:3003/jewelry-product')
        .then(res => {
            setProducts(res.data);
            console.log(res.data);
        })
}, [lastUpdate])

  const create = jewelry => {
    axios.post("http://localhost:3003/jewelry", jewelry).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  const edit = (jewelry, id) => {
    setShowModal(false);
    axios.put("http://localhost:3003/jewelry/" + id, jewelry).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  const remove = (id) => {
    setShowModal(false);
    axios.delete("http://localhost:3003/jewelry/" + id).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  const reset = () => {
    setLastUpdate(Date.now());
}
  const modal = (jewelry) => {
    setShowModal(true);
    setModalJewelry(jewelry);
}

const hide = () => {
    setShowModal(false);
}

  return <div className="App">

<JewelNav product={products} search={setSearchBy} filter={setFilterBy} reset={reset}></JewelNav >
 {jewelrys && <JewelryList jewelrys={jewelrys} modal={modal}></JewelryList> }
 <JewelryModal edit={edit} remove={remove} hide={hide} jewelry={modalJewelry} showModal={showModal} ></JewelryModal>   
<Jewelrys create={create}></Jewelrys> 

  </div>;
};

export default App;

console.log("je", Jewely);
console.log("cia", JewelryList);
