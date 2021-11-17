import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import Create from "./components/Create";
import NavBar from "./components/NavBar";

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
    started_work: "",
  });

   const reset = () => {
    setLastUpdate(Date.now());
  };
  const dateOnly = (data) => {
    return data.map((a) => {
      a.last_received = a.started_work.slice(0, 10);
      return a;
    });
  };

  const [filterBy, setFilterBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  //Read React
  useEffect(() => {
    axios
      .get("http://localhost:3003/duomenys")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);

  const create = (zmogus) => {
    axios
      .post("http://localhost:3003/duomenys", zmogus)
      .then(() => {
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (filterBy) {
      if (filterBy === "all") {
        reset();
      }
      axios
        .get("http://localhost:3003/duomenys-filter/" + filterBy)
        .then((res) => {
          setTable(dateOnly(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [filterBy]);

  useEffect(() => {
    if (searchBy) {
      axios
        .get("http://localhost:3003/duomenys-surname/?s=" + searchBy)
        .then((res) => {
          setTable(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [searchBy]);

  //Update React
  const edit = (zmogus, id) => {
    setShowModal(false);
    axios
      .put("http://localhost:3003/duomenys/" + id, zmogus)
      .then((res) => {
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

 

  const modal = (zmogus) => {
    setShowModal(true);
    setModalInputs(zmogus);
  };

  const hide = () => {
    setShowModal(false);
  };
  const remove = (id) => {
    axios
      .delete("http://localhost:3003/duomenys/" + id)
      .then((res) => {
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App bg-light">
      <NavBar 
          table={table}
          search={setSearchBy}
          filter={setFilterBy}
          // sort={setSortBy}
          reset={reset}
        ></NavBar>
      <div className="float-container">
        <div className="justify-content-center">
          <div className="float-child">
            <div className="card-header">List of People</div>

            <table className="table">
              <tbody>
                <tr>
                  <th>Firstname</th>
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
        <div className="float-child green">
          <Create
            className="justify-content-center"
            create={create}
          ></Create>
        </div>
      </div>
     </div>
  );
}

export default App;
