import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Jewelrys from "./components/Jewelrys";
// import JewelryList from "./components/JewelryList"

function App() {
  const [jewelry, setJewelry] = useState();
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  // const [showModal, setShowModal] = useState(false)
  // const [modalJewelry, setModalJewelry] = useState({
  //   product: "",
  //   quantity: "",
  //   price: "",
  //   in_stock: "",
  //   last_order: ""
  // });

  useEffect(() => {
    axios.get("http://localhost:3003/jewelry").then((res) => {
      setJewelry(res.data);
      console.log(res.data);
    });
  }, [lastUpdate]);

  const create = jewelry => {
    axios.post("http://localhost:3003/jewelry", jewelry).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

//   const edit = (jewelry, id) => {
//     setShowModal(false);
//     axios.put("http://localhost:3003/jewelry/" + id, jewelry).then((res) => {
//       console.log(res.data);
//       setLastUpdate(Date.now());
//     });
//   };

//   const remove = (id) => {
//     setShowModal(false);
//     axios.delete("http://localhost:3003/jewelry/" + id).then((res) => {
//       console.log(res.data);
//       setLastUpdate(Date.now());
//     });
//   };
//   const modal = (jewelry) => {
//     setShowModal(true);
//     setModalJewelry(jewelry);
// }

// const hide = () => {
//     setShowModal(false);
// }

  return <div className="App">

{/* <JewelryList jewelrys={jewelry} modal={modal}></JewelryList> */}
{/* <Jewelrys edit={edit} remove={remove} hide={hide} jewelry={modalJewelry} showModal={showModal}></Jewelrys>  */}
<Jewelrys create={create}></Jewelrys> 

  </div>;
};

export default App;
