import { DECREMENT, INCREMENT } from "./typse";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(increment())
        }, 2000)
    }
}