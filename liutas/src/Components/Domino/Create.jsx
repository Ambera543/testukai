import { useReducer } from 'react';
import { addLeft, addRight, resetLeftRight } from '../../Action/domino';
import { dominoPlateReducer, startPos } from '../../Reducer/dominoReducer';


function Create({create}) {
    const [plate, dispachPlate] = useReducer(dominoPlateReducer, startPos);

    const handleInput = (e, P) => {
        if ('L' === P) {
            dispachPlate(addLeft(e.target.value));
        }
        if ('R' === P) {
            dispachPlate(addRight(e.target.value));
        }
    }

    const handleCreate = () => {
        create({
            left: plate.left,
            right: plate.right
        });
        dispachPlate(resetLeftRight());
    }

    return (
        <div className="domino_create">
            <div className="domino_create_header">
                Create new DOMINO plate
            </div>
            <div className="domino_create_body">
                <div>
                <input type="text" style={{
                    backgroundColor: plate.leftErr ? 'deeppink' : 'white'
                }} onChange={e => handleInput(e, 'L')} value={plate.left}></input>
                <input type="text" style={{
                    backgroundColor: plate.rightErr ? 'deeppink' : 'white'
                }} onChange={e => handleInput(e, 'R')} value={plate.right}></input>
                </div>
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
    )
}

export default Create;