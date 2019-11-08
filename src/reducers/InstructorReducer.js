import { FETCH_INSTRUCTORS, NEW_INSTRUCTOR, DELETE_INSTRUCTOR, REDUCE_HOURS, EDIT_INSTRUCTOR } from '../actions/types'

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
            return {
                ...state,
                instructors: theInsts
            }
        case REDUCE_HOURS:
            const idx = state.instructors.findIndex(inst => inst.id === parseInt(action.payload.id))
            const instructor = state.instructors[idx]
            console.log(idx)
            return [
                ...state.instructors.slice(0, idx),
                Object.assign({}, instructor, { hours: instructor.hours - 2 }),
                ...state.instructors.slice(idx + 1)
            ]
        case EDIT_INSTRUCTOR:
            const indx = state.instructors.findIndex(inst => inst.id === parseInt(action.payload.id))
            const instruct = state.instructors[indx]
            console.log(indx)
            return [
                ...state.instructors.slice(0, indx),
                Object.assign({}, instruct, { hours: action.payload }),
                ...state.instructors.slice(indx + 1)
            ]
        default:
            return state
    }


}
