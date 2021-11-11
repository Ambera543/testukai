import { ADD_ONE, REM_ELEVEN, DO_MULTIPLY } from "../Constants/types";

export function actionAddOne() {
    return {
        type: ADD_ONE
    }
}

export function actionRemEleven() {
    return {
        type: REM_ELEVEN
    }}
    export function actionDoMultiplay(payload){
        return{
            type: DO_MULTIPLY,
            payload: payload

        }
    }
