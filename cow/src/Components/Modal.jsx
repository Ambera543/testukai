import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
  const [inputs, setInputs] = useState({
    name: "",
    weight: "",
    milk: "",
    total_milk: "",
    last_milking_time: "",
  });

  const control = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  useEffect(() => {
    setInputs({
      name: modalInputs.name,
      weight: modalInputs.weight,
      milk: modalInputs.milk,
      total_milk: modalInputs.total_milk,
      last_milking_time: modalInputs.last_milking_time.slice(0, 10),
    });
  }, [modalInputs]);

  const handleEdit = () => {
    edit(
      {
        name: inputs.name,
        weight: inputs.weight,
        milk: inputs.milk,
        total_milk: inputs.total_milk,
        last_milking_time: inputs.last_milking_time.slice(0, 10),
      },
      modalInputs.id
    );
  };

  return (
    <div
      className="modal fade"
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
            <h5 className="modal-title">Edit cow</h5>
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
                <label className="col-form-label">Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={inputs.name}
                  onChange={(e) => control(e, "name")}
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Weight</label>
                <input
                  className="form-control"
                  type="text"
                  value={inputs.weight}
                  onChange={(e) => control(e, "weight")}
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Milk</label>
                <input
                  className="form-control"
                  type="text"
                  value={inputs.milk}
                  onChange={(e) => control(e, "milk")}
                />
              </div>

              <div className="form-group">
                <label className="col-form-label">Total milk</label>
                <div>{inputs.total_milk}</div>
                 {/* <input
                  className="form-control"
                  type="text"
                  value={inputs.total_milk}
                  onChange={(e) => control(e, "total_milk")}
                /> */}
             </div> 
              <div className="form-group">
                <label className="col-form-label">Last milking time</label>
                <input
                  className="form-control"
                  type="date"
                  value={inputs.last_milking_time.slice(0, 10)}
                  onChange={(e) => control(e, "last_milking_time")}
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
