import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Jewelery from "./components/Jewelery";

function App() {
  const [jewelery, setJewelery] = useState();
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false)
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

  const edit = (jewelery, id) => {
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
  const modal = (jewelery) => {
    setShowModal(true);
    setModalJewelery(jewelery);
}

const hide = () => {
    setShowModal(false);
}

  return <div className="App">

<Jewelery jewelery={jewelery} modal={modal}></Jewelery>
<Jewelery edit={edit} remove={remove} hide={hide} animal={modalJewelery} showModal={showModal}></Jewelery>
<Jewelery jewelery={jewelery} create={create}></Jewelery>
  </div>;
}

export default App;
