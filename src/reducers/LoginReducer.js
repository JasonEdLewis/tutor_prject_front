
import { REQUEST_LOGGIN, SUCCESS_LOGGIN, FAILED_LOGGIN } from '../actions/types';

const initialState = {
    username: "",
    password: "",
    currentAdmin: {},
    token: "",
    errorMessage: "",
    requesting: false,
    loggedIn: null
}

const LogginReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LOGGIN:
            return { ...state, requesting: true };;
        case FAILED_LOGGIN:
            return { ...state, requesting: false, errorMessage: action.payload };
        case SUCCESS_LOGGIN:
            debugger
            return { ...state, currentAdmin: action.payload, username: action.payload.username, loggedIn: true };

        default:
            return state;
    }
}
export default LogginReducer