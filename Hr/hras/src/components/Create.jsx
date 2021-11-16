import { useState } from "react";

function Create({ create }) {
  const [inputs, setInputs] = useState({
    firstname: "",
    surname: "",
    address: "",
    phone_no: "",
    email: "",
    salary: "",
    started_work: ""
  });

  const formControl = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };
  const handleCreate = () => {
    create(inputs);
    setInputs({
      firstname: "inputs.firstname",
      surname: "inputs.surname,",
      address: "inputs.address",
      phone_no: "inputs.phone_no",
      email: "inputs.email",
      salary: "inputs.salary",
      started_work: "inputs.started_work",
    });
  };

  return (
    <div className="menu">
      <form className="px-4 py-3">
        <div className="form-group">
          <h2>Add new person</h2>
          <div className="form-group">
            <label for="firstname" className="col-form-label">
              Firstname
            </label>
            <input
              className="form-control"
              type="text"
              id="firstname"
              value={inputs.firstname}
              onChange={(e) =>  formControl(e, "firstname")}
              placeholder="Enter firstname"
            />
          </div>
          <div className="form-group">
            <label for="surname" className="col-form-label">
              Surname
            </label>
            <input
              className="form-control"
              type="text"
              id="surname"
              value={inputs.surname}
              onChange={(e) =>  formControl(e, "surname")}
              placeholder="Enter surname"
            />
          </div>
          <div className="form-group">
            <label for="address" className="col-form-label">
              Address
            </label>
            <input
              className="form-control"
              type="text"
              id="address"
              value={inputs.address}
              onChange={(e) =>  formControl(e, "address")}
              placeholder="Enter address"
            />
          </div>

          <div className="form-group">
            <label for="phone_no" className="col-form-label">
              Phone no.
            </label>
            <input
              className="form-control"
              type="text"
              id="phone_no"
              value={inputs.phone_no}
              onChange={(e) =>  formControl(e, "phone_no")}
              placeholder="Enter phone_no"
            />
          </div>
          <div className="form-group">
            <label for="email" className="col-form-label">
              Email
            </label>
            <input
              className="form-control"
              type="text"
              id="email"
              value={inputs.email}
              onChange={(e) =>  formControl(e, "email")}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="salary" className="col-form-label">
              Salary
            </label>
            <input
              className="form-control"
              type="text"
              id="phone_no,"
              value={inputs.salary}
              onChange={(e) =>  formControl(e, "salary")}
              placeholder="Enter salary"
            />
          </div>
          <div className="form-group">
            <label for="started_work" className="col-form-label">
              Started work
            </label>
            <input
              className="form-control"
              type="text"
              id="started_work"
              value={inputs.started_work}
              onChange={(e) =>  formControl(e, "started_work")}
              placeholder="Enter started_work"
            />
          </div>

          <div >
            <button className="btn btn-primary"onClick={handleCreate}>Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
