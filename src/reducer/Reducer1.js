import { ADD, DELETE, INVALID_LENGTH } from '../constant/AppConstants'
// import { ADD } from '../constant/AppConstants'
// import { DELETE } from '../constant/AppConstants'
// import { INVALID_LENGTH } from '../constant/AppConstants'

const initialState = {
    details: [],
    message: ''
}

const Reducer1 = (state = initialState, action) => {

    if (action.type === ADD) {
        return Object.assign({}, state, {
            details: state.details.concat(action.payload),
            message: ''
        });
    }

    if (action.type === DELETE) {
        return Object.assign({}, state, {
            details: state.details.filter((_, i) => i !== action.payload),
            message: ''
        });
    }

    if (action.type === INVALID_LENGTH) {
        return Object.assign({}, state, {
            message: 'Invalid length found'
        })
    }
    return state;
}

export default Reducer1;