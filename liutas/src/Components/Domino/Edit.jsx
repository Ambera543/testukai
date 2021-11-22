import { addLeft, addRight } from "../../Action/domino";
import {dominoPlateReducer} from "../../Reducer/dominoReducer"

function Edit({ plate, del, change, save, editDots}) {
  const handleDelete = () => {
    del(plate.id);
  };


//   const handleInputs = (e, P) => {
//     if ('L' === P) {
//         dispachPlate(addLeft(e.target.value));
//     }
//     if ('R' === P) {
//         dispachPlate(addRight(e.target.value));
//     }
// }
const handleInputs = (e, P) => {
    change(P, e.target.value);
}


  const handleSave = () => {
    save();
  };

  return (
    <div className="domino_edit">
      <div>
        <input
          value={editDots.left}
          style={{
            backgroundColor: plate.leftErr ? "deeppink" : "white",
          }}
          onChange={(e) => handleInputs(e, "L")}
        ></input>
        <input
          value={editDots.right}
          style={{
            backgroundColor: plate.rightErr ? "deeppink" : "white",
          }}
          onChange={(e) => handleInputs(e, "R")}
        ></input>
      </div>
      <div className="domino__edit__buttons">
        <div className="domino_edit_buttons_ok" onClick={handleSave}>
          OK
        </div>
        <div className="domino_edit_buttons_x" onClick={handleDelete}>
          X
        </div>
      </div>
    </div>
  );
}

export default Edit;
