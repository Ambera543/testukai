import { useEffect, useState } from "react";

function JewelryModal({ showModal, hide, jewelry, edit, remove }) {
  const [inputs, setInputs] = useState({
    product: "",
    quantity: "",
    price: "",
    in_stock: "",
    last_order: "",
  });

  useEffect(() => {
    setInputs({
      product: jewelry.product,
      quantity: jewelry.quantity,
      price: jewelry.price,
      in_stock: jewelry.in_stock,
      last_order: jewelry.last_order.slice(0, 10),
    });
  }, [jewelry]);

  const handleEdit = () => {
    edit(
      {
        product: inputs.product,
        quantity: inputs.quantity,
        price: inputs.price,
        in_stock: inputs.in_stock,
        last_order: inputs.last_order,
      },
      jewelry.id
    );
  };

  const formControl = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  return (
    <div className="jewelry_modal">
      <div className="jewelry_form">
        <h2>Edit Jewerly</h2>
        <div className="jewelry_form_input">
          <span>Product</span>
          <input
            type="text"
            value={inputs.product}
            onChange={(e) => formControl(e, "product")}
          />
        </div>
        <div className="jewelry_form_input">
          <span>Quantity</span>
          <input
            type="text"
            value={inputs.quantity}
            onChange={(e) => formControl(e, "quantity")}
          />
        </div>
        <div className="jewelry_form_input">
          <span>Price</span>
          <input
            type="text"
            value={inputs.price}
            onChange={(e) => formControl(e, "price")}
          />
        </div>
        <div className="jewelry_form_input">
          <span>In stock</span>
          <input
            type="text"
            value={inputs.in_stock}
            onChange={(e) => formControl(e, "in stock")}
          />
        </div>
        <div className="jewelry_form_input">
          <span>Last order</span>
          <input
            type="date"
            value={inputs.last_order}
            onChange={(e) => formControl(e, "last order")}
          />
        </div>
        <div className="jewelry_form_input_buttons">
          <button onClick={handleEdit}>Save</button>
          <button onClick={hide}>Cancel</button>
          <button onClick={() => remove(jewelry.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default JewelryModal;
