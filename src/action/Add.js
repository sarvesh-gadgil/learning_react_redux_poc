import {ADD} from '../constant/AppConstants'

const addData = (payload) => {
    return {
        type: ADD,
        payload: payload
    }
}

export default addData;