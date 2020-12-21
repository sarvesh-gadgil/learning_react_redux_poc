import { createStore, applyMiddleware } from 'redux'
import FinalReducer from '../reducer/Combine'
import Middleware1 from '../middleware/Middleware1'
// import Reducer1 from '../reducer/Reducer1'

const store = createStore(FinalReducer, applyMiddleware(Middleware1));

export default store;