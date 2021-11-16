import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
  const [inputs, setInputs] = useState({
    firstname: "",
    surname: "",
    address: "",
    phone_no: "",
    email: "",
    salary: "",
    started_work: "",
  });

  const control = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  useEffect(() => {
    setInputs({
      firstname: modalInputs.firstname,
      surname: modalInputs.surname,
      address: modalInputs.address,
      phone_no: modalInputs.phone_no,
      email: modalInputs.email,
      salary: modalInputs.salary,
      started_work: modalInputs.started_work,
    });
  }, [modalInputs]);

  const handleEdit = () => {
    edit(
      {
        firstname: inputs.firstname,
        surname: inputs.surname,
        address: inputs.address,
        phone_no: inputs.phone_no,
        email: inputs.email,
        salary: inputs.salary,
        started_work: inputs,
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
              Edit data
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
                <label for="firstname" className="col-form-label">
                  Firstname
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="firstname"
                  value={inputs.firstname}
                  onChange={(e) => control(e, "firstname")}
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
                  onChange={(e) => control(e, "surname")}
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
                  onChange={(e) => control(e, "address")}
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
                  onChange={(e) => control(e, "phone_no")}
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
                  value={inputs.phone_no}
                  onChange={(e) => control(e, "email")}
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
                  onChange={(e) => control(e, "salary")}
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
                  value={inputs.started_work.slice(0, 10)}
                  onChange={(e) => control(e, "started_work")}
                  placeholder="Enter started_work"
                />
              </div>

              <div class="modal-footer">
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