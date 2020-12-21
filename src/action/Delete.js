import { DELETE } from '../constant/AppConstants'

const deleteData = (payload) => {
    return {
        type: DELETE,
        payload: payload
    }
}

export default deleteData;