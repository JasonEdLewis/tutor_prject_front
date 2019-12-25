import { FETCH_SESSIONS, NEW_SESSION, EDIT_SESSION, DELETE_SESSION } from '../actions/types';

const initialState = {
    sessions: [],

};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SESSIONS:
            return {
                ...state,
                sessions: action.payload
            }
        case NEW_SESSION:

            return {
                ...state,
                sessions: [...state.sessions, action.payload]
            }
        case EDIT_SESSION:

            const idx = state.session.findIndex(session => session.id === action.payload.id)
            let session = state.sesisons[idx]

            return [
                ...state.sessions.slice(0, idx),
                Object.assign({}, session, { session: action.payload }),
                ...state.sessions.slice(idx + 1)
            ];
        case DELETE_SESSION:

            const sesss = state.sessions.filter(sess => sess.id !== action.payload)
            return {
                ...state,
                sessions: sesss
            }

        default:
            return state

    }


}
