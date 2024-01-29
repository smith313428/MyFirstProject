import {
    LOGS,
} from '../actions';

const INIT_STATE = {
    logsPageNumber: 1,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGS:
            return Object.assign({}, state, {
                logsPageNumber: action.payload
            })
        default: return { ...state };
    }
}
