import { FETCH_INSTRUCTORS, NEW_INSTRUCTOR, DELETE_INSTRUCTOR } from '../actions/types'

const initialState = {
    instructors: [],
    instructor: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_INSTRUCTORS:
            return {
                ...state,
                instructors: action.payload
            }
        case NEW_INSTRUCTOR:
            debugger
            return {
                ...state,
                instructors: [action.payload, ...state.instructors]
            }
            case DELETE_INSTRUCTOR:
                const theInsts = state.instructors.filter(inst => inst.id !== action.payload)
                return{
                    ...state,
                    instructors: theInsts
                }
        default:
            return state
    }


}
