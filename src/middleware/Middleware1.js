import { ADD } from '../constant/AppConstants'
import { INVALID_LENGTH } from '../constant/AppConstants'
import invalidLength from '../action/InvalidLength'

const invalidLengthMiddleware = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.type === ADD) {
                if (action.payload.length <= 3) {
                    return dispatch(invalidLength(INVALID_LENGTH));
                }
            }
            return next(action);
        }
    }
}

export default invalidLengthMiddleware;