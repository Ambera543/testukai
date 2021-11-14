import { useState } from "react";

function Create({ create }) {

  const [inputs, setInputs] = useState({
    product: "",
    price: "",
    quantity: "",
    last_received: "",
  });

  const formControl = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
}
const handleCreate = () => {
    create(inputs);
    setInputs({
        product: "",
        price: "",
        quantity: "",
        last_received: "",
      });
  };
  console.log(handleCreate);

  return (
    <div className="container">
         <form className="px-4 py-3">
    <div class="form-group">
    <h2>Add new nut</h2>
    <div className="form-group">
      <span>Product </span>
      <input
        type="text"
        value={inputs.product}
        onChange={(e) => formControl(e, "product")}
      />
    </div>
    <div className="form-group">
      <span>Quantity </span>
      <input
        type="text"
        value={inputs.quantity}
        onChange={(e) => formControl(e, "quantity")}
      />
    </div>
    <div className="form-group">
      <span>Price </span>
      <input
        type="text"
        value={inputs.price}
        onChange={(e) => formControl(e, "price")}
      />
    </div>
    <div className="form-group">
    <span>Last received </span>
      <input
        type="date"
        value={inputs.last_received}
        onChange={(e) => formControl(e, "last_received")}
      />
    </div>

    <div className="btn">
      <button onClick={handleCreate}>Add</button>
    </div>
    </div>
    </form>
  </div>

  )};


export default Create;
