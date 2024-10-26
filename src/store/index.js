import {createStore} from 'redux'

const initialState = {
    counter: 0,
    showCounter: true
}

const counterReducer = (state = initialState, action) => { //initial state will be counter: 0
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === "toggle") {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    
    return state //if neither of the action were chosen
}

const store = createStore(counterReducer) //use the reducer as a value for the store

export default store //connect react application to the store