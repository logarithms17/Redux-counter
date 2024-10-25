import {createStore} from 'redux'

const counterReducer = (state = {counter: 0}, action) => { //initial state will be counter: 0
    if (action.type === "increment") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1
        }
    }
    return state //if neither of the action were chosen
}

const store = createStore(counterReducer) //use the reducer as a value for the store

export default store //connect react application to the store