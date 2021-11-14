import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Create from "./Components/Create";
import NavBar from "./Components/NavBar";

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

  const reset = () => {
    setLastUpdate(Date.now());
  };
  const dateOnly = (data) => {
    return data.map((a) => {
      a.last_received = a.last_received.slice(0, 10);
      return a;
    });
  };

  const [filterBy, setFilterBy] = useState("");
  const [searchBy, setSearchBy] = useState("");
  // const sortBy = useRef('');

  useEffect(() => {
    axios.get("http://localhost:3003/nuts").then((res) => {
      setNuts(res.data);
      setNuts(res.data.filter((a) => a.nut));
    });
  }, [lastUpdate]);

  useEffect(() => {
    if (filterBy) {
      if (filterBy === "all") {
        reset();
      }
      axios
        .get("http://localhost:3003/jewelry-filter/" + filterBy)
        .then((res) => {
          setNuts(dateOnly(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [filterBy]);

  // useEffect(() => {
  //   if (sortBy) {
  //     setNuts(nutsSort(nuts, sortBy));
  //   }
  // }, [sortBy]);

  useEffect(() => {
    if (searchBy) {
      axios
        .get("http://localhost:3003/nuts-product/?s=" + searchBy)
        .then((res) => {
          setNuts(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [searchBy]);

  //Read React
  useEffect(() => {
    axios
      .get("http://localhost:3003/nuts")
      .then((res) => {
        setNuts(res.data);
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);

  const create = (nut) => {
    axios
      .post("http://localhost:3003/nuts", nut)
      .then(() => {
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  //Update React
  const edit = (nut, id) => {
    setShowModal(false);
    axios
      .put("http://localhost:3003/nuts/" + id, nut)
      .then((res) => {
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  const remove = (id) => {
    setShowModal(false);
    axios
      .delete("http://localhost:3003/nuts/" + id)
      .then((res) => {
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
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
        <NavBar 
          nuts={nuts}
          search={setSearchBy}
          filter={setFilterBy}
          // sort={setSortBy}
          reset={reset}
        ></NavBar>

        <div className="row justify-content-left float-left">
          <div className="card col-12">
            <div className="card-header font-weight-bold">List of nuts</div>
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
              </table>
            </div>
          </div>
        </div>
        <Create className="row justify-content-right" create={create}></Create>
      </div>
    </div>
  );
}

export default App;
