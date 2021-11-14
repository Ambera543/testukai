import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Create from "./Components/Create";

function App() {
  const [nuts, setNuts] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    product: "",
    price: "",
    quantity: "",
    last_received: "",
  });
  //Read React
  useEffect(() => {
    axios.get("http://localhost:3003/nuts").then((res) => {
      setNuts(res.data);
    })
    .catch((err) => console.log(err));
  }, [lastUpdate]);

  const create = nut => {
    axios.post('http://localhost:3003/animals', nut)
        .then(() => {
            setLastUpdate(Date.now());
        })
        .catch((err) => console.log(err));
}

  //Update React
  const edit = (nuts, id) => {
    setShowModal(false);
    axios
      .put("http://localhost:3003/nuts/" + id, nuts)
      .then((res) => {
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  const remove = (id) => {
    setShowModal(false);
    axios.delete("http://localhost:3003/nuts/" + id).then((res) => {
      setLastUpdate(Date.now());
    });
  };

  const modal = (nuts) => {
    setShowModal(true);
    setModalInputs(nuts);
  };

  const hide = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">List of nuts</div>
              <div className="card-body">
                <table className="table">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Last received</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  <List nuts={nuts} modal={modal} />
                  <Modal
                    showModal={showModal}
                    modalInputs={modalInputs}
                    hide={hide}
                    edit={edit}
                    remove={remove}
                  />
                  <Create create={create}></Create>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
