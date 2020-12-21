import { TOGGLE } from '../constant/AppConstants'

const toggleData = (payload) => {
    return {
        type: TOGGLE,
        payload: payload
    }
}

export default toggleData;