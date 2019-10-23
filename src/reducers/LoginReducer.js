
const initialState = {

    currentAdmin: {},
    loggedIn: false,
    error: ""

}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_ADMIN":
            return { ...state, currentAdmin: action.payload, loggedIn: true }
        case "ERROR":
            return { ...state, error: action.payload }

        default:
            return state;
    }

}