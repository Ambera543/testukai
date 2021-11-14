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
         <form className="px-4">
    <div class="form-group">
    <h3>Add new nut</h3>
    <div className="form-group">
      <div>Product </div>
      <input
        type="text"
        value={inputs.product}
        onChange={(e) => formControl(e, "product")}
      />
    </div>
    <div className="form-group">
      <div>Quantity </div>
      <input
        type="text"
        value={inputs.quantity}
        onChange={(e) => formControl(e, "quantity")}
      />
    </div>
    <div className="form-group">
      <div>Price </div>
      <input
        type="text"
        value={inputs.price}
        onChange={(e) => formControl(e, "price")}
      />
    </div>
    <div className="form-group">
    <div>Last received </div>
      <input
        type="date"
        value={inputs.last_received}
        onChange={(e) => formControl(e, "last_received")}
      />
    </div>
    
      <button className="btn btn-primary" onClick={handleCreate}>Add</button>
   
    </div>
    </form>
  </div>

  )};


export default Create;
