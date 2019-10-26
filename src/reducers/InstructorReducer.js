import { FETCH_INSTRUCTORS, NEW_INSTRUCTOR, DELETE_INSTRUCTOR, REDUCE_HOURS } from '../actions/types'

const initialState = {
    instructors: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_INSTRUCTORS:
            return {
                ...state,
                instructors: action.payload
            }
        case NEW_INSTRUCTOR:
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
            case REDUCE_HOURS:
                const idx= state.instructors.findIndex(inst=> inst.id === action.payload)
                const instructor = state.instructors[idx]
                return [
                    ...state.instructors.slice(0, idx),
                    Object.assign({}, instructor, { hours: instructor.hours - 2 }),
                    ...state.instructors.slice(idx + 1)
                ]
        default:
            return state
    }


}
