import { INVALID_LENGTH } from '../constant/AppConstants'

const invalidLength = (payload) => {
    return {
        type: INVALID_LENGTH,
        payload: payload
    }
}

export default invalidLength;