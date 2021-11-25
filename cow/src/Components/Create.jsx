import { useState } from "react";

function Create({ create }) {
  const [inputs, setInputs] = useState({
    name: "",
    weight: "",
    milk: "",
    total_milk: "",
    last_milking_time: "",
  });

  const formControl = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    create(inputs);
    setInputs({
      name: "",
      weight: "",
      milk: "",
      total_milk: "",
      last_milking_time: "",
    });
  };
  console.log(handleCreate);
  // oninput="this.setCustomValidity('')"

  return (
    <div className="menu">
      <form className="px-4 py-3">
        <div className="form-group">
          <h2>Add new cow</h2>
          <div className="form-group">
            <div>Name</div>
            <input
              type="text"
              required
              value={inputs.name}
              onChange={(e) => formControl(e, "name")}
            />
          </div>
          <div className="form-group">
            <div>Weight </div>
            <input
              type="number"
              required
              value={inputs.weight}
              onChange={(e) => formControl(e, "weight")}
            />
          </div>
          <div className="form-group">
            <div> Milk </div>
            <input
              type="number"
              required
              value={inputs.milk}
              onChange={(e) => formControl(e, "milk")}
            />
          </div>
          {/* <div className="form-group">
    <div> Total milk </div>
      <input
        type="text"
        value={inputs.milk}
        onChange={(e) => formControl(e, "total_milk")}
      />
    </div> */}
        </div>
        <div className="form-group">
          <div>Last milking time </div>
          <input
            type="date"
            required
            value={inputs.last_milking_time.slice(0, 10)}
            onChange={(e) => formControl(e, "last_milking_time")}
          />
        </div>

        <div>
          <button className="btn btn-primary" onClick={handleCreate}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;

// onInvalid="this.setCustomValidity('Enter name')"
// oninput="this.setCustomValidity('')"
