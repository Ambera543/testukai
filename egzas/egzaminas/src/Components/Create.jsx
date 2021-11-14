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
    <div className="">
    <h2>Add new nut</h2>

    <div className="jewelry_form_input">
      <span>Product </span>
      <input
        type="text"
        value={inputs.product}
        onChange={(e) => formControl(e, "product")}
      />
    </div>
    <div className="jewelry_form_input">
      <span>Quantity </span>
      <input
        type="text"
        value={inputs.quantity}
        onChange={(e) => formControl(e, "quantity")}
      />
    </div>
    <div className="jewelry_form_input">
      <span>Price </span>
      <input
        type="text"
        value={inputs.price}
        onChange={(e) => formControl(e, "price")}
      />
    </div>
    <div className="jewelry_form_input">
      <input
        type="text"
        value={inputs.last_received}
        onChange={(e) => formControl(e, "last_received")}
      />
    </div>

    <div className="btn btn-primary">
      <button onClick={handleCreate}>Add</button>
    </div>
  </div>

  )};


export default Create;
