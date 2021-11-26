import "./App.scss";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Create from "./Components/Create";
import sortas from "./Components/sortas";
import ActionMsg from "./Components/ActionMsg";
import Stats from "./Components/Stats";
import Nav from "./Components/Nav";

function App() {
  const [table, setTable] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [modalInputs, setModalInputs] = useState({
    name: "",
    weight: "",
    milk: "",
    total_milk: "",
    last_milking_time: "",
  });
  const [stats, setStats] = useState({
    count: 0,
    total_milk: 0,
  });
  const [showMsg, setShowMsg] = useState(false);
  const msg = useRef("");

  const addMsg = (text) => {
    msg.current = text;
    setShowMsg(true);
    setTimeout(() => {
      clearMsg();
    }, 2000);
  };

  const clearMsg = () => {
    setShowMsg(false);
  };

  const reset = () => {
    setLastUpdate(Date.now());
  };
  // const [error, setError] = useState('');

  //Read React
  useEffect(() => {
    axios
      .get("http://localhost:3003/cow-farm")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);

  const create = (item) => {
    axios
      .post("http://localhost:3003/cow-farm", item)
      .then(() => {
        addMsg("Record successfully saved.");
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err, addMsg("something wrong")));
  };

  //Update React
  const edit = (item, id) => {
    setShowModal(false);
    axios
      .put("http://localhost:3003/cow-farm/" + id, item)
      .then((res) => {
        addMsg("Record was edited successfully.");
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:3003/stats").then((res) => {
      setStats(res.data[0]);
    });
  }, [lastUpdate]);

  useEffect(() => {
    if (sortBy) {
      setTable(sortas(table, sortBy));
    }
  }, [sortBy]);

  const modal = (item) => {
    setShowModal(true);
    setModalInputs(item);
  };

  const hide = () => {
    setShowModal(false);
  };

  const remove = (id) => {
    axios
      .delete("http://localhost:3003/cow-farm/" + id)
      .then((res) => {
        addMsg("Record was deleted successfully");
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err, addMsg("something wrong")));
  };

  return (
    <div className="App bg-light">
      <ActionMsg msg={msg.current} showMsg={showMsg}></ActionMsg>
      <Stats stats={stats}></Stats>
      <div className="float-container">
        <Nav sort={setSortBy} reset={reset}></Nav>
        <div className="justify-content-center">
          <div className="float-child">
            <List table={table} remove={remove} modal={modal} />

            <Modal
              showModal={showModal}
              modalInputs={modalInputs}
              hide={hide}
              edit={edit}
            />
          </div>
        </div>
        <div className="float-child green">
          <Create className="justify-content-center" create={create} ></Create>
        </div>
      </div>
    </div>
  );
}

export default App;
// error={error} setError={setError}