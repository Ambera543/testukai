import { useState } from "react";

function Jewelrys({ create }) {
  const [inputs, setInputs] = useState({
    product: "",
    quantity: "",
    price: "",
    in_stock: "",
    last_order: "",
  });

  const formControl = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  const handleCreate = () => {
    create(inputs);
    setInputs({
      product: "",
      quantity: "",
      price: "",
      in_stock: "",
      last_order: "",
    });
  };
  console.log(handleCreate);

  return (
    <div className="jewelry_form">
      <h2>Add new jewelry</h2>

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
        <span>In stock </span>
        <input
          type="text"
          value={inputs.in_stock}
          onChange={(e) => formControl(e, "in_stock")}
        />
      </div>
      <div className="jewelry_form_input">
        <span>Last order </span>
        <input
          type="date"
          value={inputs.last_order}
          onChange={(e) => formControl(e, "last_order")}
        />
      </div>

      <div className="jewelry_form_input">
        <button onClick={handleCreate}>Add</button>
      </div>
    </div>
  );
}

export default Jewelrys;
