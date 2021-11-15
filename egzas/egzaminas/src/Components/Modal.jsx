import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
  const [inputs, setInputs] = useState({
    product: "",
    price: "",
    quantity: "",
    last_received: "",
  });

  const control = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  useEffect(() => {
    setInputs({
      product: modalInputs.product,
      price: modalInputs.price,
      quantity: modalInputs.quantity,
      last_received: modalInputs.last_received.slice(0, 10),
    });
  }, [modalInputs]);

  const handleEdit = () => {
    edit(
      {
        product: inputs.product,
        price: inputs.price,
        quantity: inputs.quantity,
        last_received: inputs.last_received.slice(0, 10),
      },
      modalInputs.id
    );
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        display: showModal ? "block" : "none",
        opacity: showModal ? "1" : "0",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit product
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="product" className="col-form-label">
                  Product
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="product"
                  value={inputs.product}
                  onChange={(e) => control(e, "product")}
                  placeholder="Enter product"
                />
              </div>
              <div className="form-group">
                <label for="price" className="col-form-label">
                  Price
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="price"
                  value={inputs.price}
                  onChange={(e) => control(e, "price")}
                  placeholder="Enter price"
                />
              </div>
              <div className="form-group">
                <label for="quantity" className="col-form-label">
                  Quantity
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="quantity"
                  value={inputs.quantity}
                  onChange={(e) => control(e, "quantity")}
                  placeholder="Enter quantity"
                />
              </div>

              <div className="form-group">
                <label for="" className="col-form-label">
                  Last Received
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="last_received"
                  value={inputs.last_received.slice(0, 10)}
                  onChange={(e) => control(e, "last_received")}
                  placeholder="Enter last_received"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={hide}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
