import {combineReducers } from 'redux'
import authReducer from './authReducers'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    authReducer,
    cartReducer
})

export default rootReducer