
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import counterReducer from './counterSlice'

const store = configureStore({
    reducer: combineReducers({
        counter: counterReducer, //counter will be used for the selector
        auth: authReducer // auth will be used for the selector, state.auth.isAuthenticated
    })
})

export default store //connect react application to the store