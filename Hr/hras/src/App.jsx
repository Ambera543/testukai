import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import Create from "./components/Create"

function App() {
  const [table, setTable] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    firstname: "",
    surname: "",
    address: "",
    phone_no: "",
    email: "",
    salary: "",
    started_work: ""
  });


//  const reset = () => {
//     setLastUpdate(Date.now());
// }

//Read React
  useEffect(() => {
    axios
      .get("http://localhost:3003/duomenys")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);

const create = zmogus => {
    axios.post('http://localhost:3003/duomenys', zmogus)
        .then(() => {
            setLastUpdate(Date.now());
        })
        .catch((err) => console.log(err));
}



//Update React
  const edit = (zmogus, id) => {
    setShowModal(false);
    axios.put('http://localhost:3003/duomenys/' + id, zmogus)
    .then(res => {
        setLastUpdate(Date.now());
    })
    .catch((err)=> console.log(err));
}

  const modal = (zmogus) => {
    setShowModal(true);
    setModalInputs(zmogus);
  };

  const hide = () => {
    setShowModal(false);
  };
  const remove = (id)=>{
    axios.delete('http://localhost:3003/duomenys/' + id)
    .then(res => {
      setLastUpdate(Date.now());
  })
  .catch((err)=> console.log(err));
}
  
  
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">List of People</div>
              <div className="card-body">
                <table className="table">
                  <tbody>
                  <tr>
                    <th> Firstname</th>
                    <th>Surname</th>
                    <th>Address</th>
                    <th>Phone no.</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Started work</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                 
                  <List table={table} remove={remove} modal={modal} />
                  </tbody>
                </table>
                <Modal
                    showModal={showModal}
                    modalInputs={modalInputs}
                    hide={hide}
                    edit={edit}
                  />
              </div>
            </div>
          </div>
        </div>
        <Create className="row justify-content-right" create={create}></Create>
      </div>
    </div>
  );
}

export default App;