import { combineReducers } from 'redux'
import Reducer1 from './Reducer1'
import Reducer2 from './Reducer2'

const finalReducer = combineReducers({ Reducer1, Reducer2 });

export default finalReducer;