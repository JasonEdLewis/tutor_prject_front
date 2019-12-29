import { FETCH_SESSIONS, NEW_SESSION, EDIT_SESSION, DELETE_SESSION, IS_LOADING, FINISH_LOADING } from '../actions/types';

const initialState = {
    sessions: [],
    isLoading: null,

};

export default function (state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: true }

        case FINISH_LOADING:
            return { ...state, isLoading: false }

        case FETCH_SESSIONS:
            return {
                ...state,
                sessions: action.payload
            }
        case NEW_SESSION:

            return {
                ...state,
                sessions: [...state.sessions, action.payload],

            }
        case EDIT_SESSION:

            const idx = state.sessions.findIndex(session => session.id === action.payload.id)
            let TheSession = state.sessions[idx]
            let LastestSesssions = [
                ...state.sessions.slice(0, idx),
                Object.assign({}, TheSession, action.payload),
                ...state.sessions.slice(idx + 1)
            ]
            debugger
            return {
                ...state,
                sessions: LastestSesssions,

            };
        case DELETE_SESSION:

            const sesss = state.sessions.filter(sess => sess.id !== action.payload)
            return {
                ...state,
                sessions: sesss,

            }

        default:
            return state

    }


}
