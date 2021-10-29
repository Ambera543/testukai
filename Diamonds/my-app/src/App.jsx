import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Jewelery from "./components/Jewelery";

function App() {
  const [jewelery, setJewelery] = useState();
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalJewelery, setModalJewelery] = useState({
    product: "",
    quantity: "",
    price: "",
    in_stock: "",
    last_order: ""
  });

  useEffect(() => {
    axios.get("http://localhost:3003/jewelery").then((res) => {
      setJewelery(res.data);
      console.log(res.data);
    });
  }, [lastUpdate]);

  const create = (jewelery) => {
    axios.post("http://localhost:3003/jewelery", jewelery).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  const edit = (animal, id) => {
    setShowModal(false);
    axios.put("http://localhost:3003/jewelery/" + id, jewelery).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  const remove = (id) => {
    setShowModal(false);
    axios.delete("http://localhost:3003/jewelery/" + id).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  return <div className="App">


  </div>;
}

export default App;
