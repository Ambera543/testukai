import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Jewelrys from "./components/Jewelrys";
import JewelryList from "./components/JewelryList";
// import Jewely from "./components/Jewely";
import JewelryModal from "./components/JewelryModal";
import JewelNav from "./components/JewelNav";
import jewelrysSort from "./Common/jewelrysSort";

function App() {
  const [jewelrys, setJewelrys] = useState();
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [modalJewelry, setModalJewelry] = useState({
    product: "",
    quantity: "",
    price: "",
    in_stock: "",
    last_order: "",
  });

  const [sortBy, setSortBy] = useState("");
  const [products, setProducts] = useState([]);

  const dateOnly = (data) => {
    return data.map((a) => {
    a.last_order = a.last_order.slice(0, 10);
    console.log(data);
      return a;
      
    });
  };

  // const sort = (by) => {
  //     setAnimals(animalSort(animals, by));
  //     setSortBy(by);
  // }
  const reset = () => {
    setLastUpdate(Date.now());
  };


  useEffect(() => {
    axios.get("http://localhost:3003/jewelry").then((res) => {
      setJewelrys(res.data);
      setProducts(res.data.filter(a=>a.product));
    });
  }, [lastUpdate]);

  
  const [filterBy, setFilterBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    if (filterBy) {
      if (filterBy==='all'){
        reset()
      }
      
      axios
        .get("http://localhost:3003/jewelry-filter/" + filterBy)
        .then((res) => { 
        
          setJewelrys(dateOnly(res.data));
          
        }).catch(err=>console.log(err));
    }
  }, [filterBy]);

  useEffect(() => {
    if (sortBy) {
      setJewelrys(jewelrysSort(jewelrys, sortBy));
    }
  }, [sortBy]);

  useEffect(() => {
    if (searchBy) {
      axios
        .get("http://localhost:3003/jewelry-product/?s=" + searchBy)
        .then((res) => {
          setJewelrys((res.data));
        }).catch(err=>console.log(err));
    }
  }, [searchBy]);

  // useEffect(() => {
  //   axios.get("http://localhost:3003/jewelry-product/").then((res) => {
  //     setProducts((res.data));
  //   }).catch(err=>console.log(err));
  // }, [lastUpdate]);

  const create = (jewelry) => {
    axios.post("http://localhost:3003/jewelry", jewelry).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const edit = (jewelry, id) => {
    setShowModal(false);
    axios.put("http://localhost:3003/jewelry/" + id, jewelry).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const remove = (id) => {
    setShowModal(false);
    axios.delete("http://localhost:3003/jewelry/" + id).then(() => {
      setLastUpdate(Date.now());
    });
  };


  const modal = (jewelry) => {
    setShowModal(true);
    setModalJewelry(jewelry);
  };

  const hide = () => {
    setShowModal(false);
  };

  return (
    <div className="App">{products &&
      <JewelNav
        products={products}
        search={setSearchBy}
        filter={setFilterBy}
        sort={setSortBy}
        reset={reset}
      ></JewelNav>}
      {jewelrys && (
        <JewelryList jewelrys={jewelrys} modal={modal}></JewelryList>
      )}
      <JewelryModal
        edit={edit}
        remove={remove}
        hide={hide}
        jewelry={modalJewelry}
        showModal={showModal}
      ></JewelryModal>
      <Jewelrys create={create}></Jewelrys>
    </div>
  );
}

export default App;
