import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Jewelry from "./components/Jewelry";

function App() {
  const [jewelry, setjewelry] = useState();
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  // const [showModal, setShowModal] = useState(false)
  // const [modaljewelry, setModaljewelry] = useState({
  //   product: "",
  //   quantity: "",
  //   price: "",
  //   in_stock: "",
  //   last_order: ""
  // });

  useEffect(() => {
    axios.get("http://localhost:3003/jewelry").then((res) => {
      setjewelry(res.data);
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
//     setModaljewelry(jewelry);
// }

// const hide = () => {
//     setShowModal(false);
// }

  return <div className="App">

{/* <jewelry jewelry={jewelry} modal={modal}></jewelry>
{/* <jewelry edit={edit} remove={remove} hide={hide} animal={modaljewelry} showModal={showModal}></jewelry> */}
<Jewelry create={create}></Jewelry> 
  </div>;
}

export default App;
