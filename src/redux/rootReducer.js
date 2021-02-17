import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from './typse'

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    }
    else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
}
//===Combines Reducers===//
export const rootReducer = combineReducers({
    counter: counterReducer
})