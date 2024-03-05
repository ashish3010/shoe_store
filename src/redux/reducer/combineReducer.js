import { combineReducers } from "redux";
import { userReducer } from './userReducer'
import { productInfoReducer } from './productInfoReducer'

const allReducers = combineReducers({ userReducer, productInfoReducer })

export default allReducers