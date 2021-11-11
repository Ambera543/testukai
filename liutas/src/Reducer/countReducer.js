import { ADD_ONE, DO_MULTIPLY, REM_ELEVEN } from "../Constants/types";

export default function countReducer(state, action) {
    // console.log('labas', action);
    let newState;
    switch (action.type) {
        case ADD_ONE:
            newState = state + 1;
            break;
        case REM_ELEVEN:
            newState = state - 11;
            break;
            case DO_MULTIPLY:
                newState= state *action.payload;
                break;

        default:
            newState = state;
    }
    return newState;
}