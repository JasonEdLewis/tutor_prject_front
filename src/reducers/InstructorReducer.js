import { FETCH_INSTRUCTORS, NEW_INSTRUCTOR, DELETE_INSTRUCTOR, REDUCE_HOURS, EDIT_INSTRUCTOR, IS_LOADGING_INST, NOT_LOADING_INST, IS_EDITING_INST, NOT_EDITING_INST } from '../actions/types'

const initialState = {
    instructors: [],
    isLoadingInst: false,
    isEditing: false
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
            const idx = state.instructors.findIndex(inst => inst.id === parseInt(action.payload))
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
            const instructs = [
                ...state.instructors.slice(0, indx),
                Object.assign({}, instruct, action.payload),
                ...state.instructors.slice(indx + 1)
            ]
            console.log(indx)
            return {
                ...state,
                instructors: instructs,
                isEditing: false
            }
        case IS_LOADGING_INST:
            return {
                ...state,
                isLoadingInst: true
            }
        case NOT_LOADING_INST:
            return {
                ...state,
                isLoadingInst: false
            }
        case IS_EDITING_INST:
            return {
                ...state,
                isEditing: true
            }
        case NOT_EDITING_INST:
            return {
                ...state,
                isEditing: false
            }
        default:
            return state
    }


}
