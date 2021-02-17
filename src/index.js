import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, asyncIncrement } from './redux/actions'
import logger from 'redux-logger';

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter
})

store.dispatch({ type: 'INIT_APLLICATION' })


