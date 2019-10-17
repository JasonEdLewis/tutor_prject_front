import { FETCH_SESSIONS, NEW_SESSION, EDIT_SESSION } from '../actions/types';

const initialState = {
    sessions: [],
    // session: {}

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
                sessions: [action.payload, ...state.sessions]
            }
        case EDIT_SESSION:
            // this type must come with 2 parameters; the atribute that needs editing and the new value of the attribute
            const idx = state.session.findIndex(session => session.id !== action.payload)
            let session = state.sesisons[idx]
            return [
                ...state.sessions.slice(0, idx),
                Object.assign({}, session, { attribute: action.payload }),
                ...state.sessions.slice(idx + 1)
            ];

        default:
            return state

    }


}



/* editing an instance
 let idx = state.findIndex(quote => quote.id === action.quoteId);
let quote =state[idx]


/*return [
...state.slice(0, idx),
  Object.assign({}, quote, { votes: quote.votes - 1 }),
...state.slice(idx + 1)
 ];
 */