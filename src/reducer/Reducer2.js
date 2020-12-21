import { TOGGLE } from '../constant/AppConstants'

const initialState = {
    displayData: {
        display: 'contents'
    },
    buttonValue: 'Hide',
    isVisible: true
}

const Reducer2 = (state = initialState, action) => {
    if (action.type === TOGGLE) {
        console.log(action)
        if (action.payload === true) {
            return Object.assign({}, state, {
                displayData: {
                    display: 'contents',
                },
                buttonValue: 'Hide',
                isVisible: true
            });
        } else {
            return Object.assign({}, state, {
                displayData: {
                    display: 'none'
                },
                buttonValue: 'Show',
                isVisible: false
            });
        }
    }
    return state;
}

export default Reducer2;