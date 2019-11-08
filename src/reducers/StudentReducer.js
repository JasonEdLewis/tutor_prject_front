import React from 'react';
import { FETCH_STUDENTS, NEW_STUDENT, EDIT_STUDENT, ERROR } from '../actions/types';


const initialState = {
    students: [],
    student: {},
    errorMessage:""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case NEW_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students]
            }
        case EDIT_STUDENT:
            debugger
            const idx = state.students.findIndex(student.id === action.payload)
            const student = state.students[idx]
            return {
                ...state,
                students: [...state.students.slice(0, idx),
                Object.assign({}, student, { attribute: action.payload }),
                state.students.slice(idx + 1)
                ]
            }
            case ERROR:
                debugger
                return {
                    ...state,
                    errorMessage: action.payload
                }
        default:
            return state
    }






}