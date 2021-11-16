import { ADD_DOMINO, ADD_LEFT, ADD_RIGHT, GET_DOMINOS, SHOW_MESSAGE, HIDE_MESSAGE, RESET_LEFT_RIGHT } from "../Constants/dominoTypes";

export function addLeft(payload) {
    return {
        type: ADD_LEFT,
        payload: payload
    }
}

export function addRight(payload) {
    return {
        type: ADD_RIGHT,
        payload: payload
    }
}

export function resetLeftRight() {
    return {
        type: RESET_LEFT_RIGHT
    }
}

export function getDominos() {
    return {
        type: GET_DOMINOS,
    }
}

export function addDomino(domino) {
    return {
        type: ADD_DOMINO,
        payload: domino
    }
}

export function showMessage(text) {
    return {
        type: SHOW_MESSAGE,
        payload: text
    }
}

export function hideMessage() {
    return {
        type: HIDE_MESSAGE
    }}