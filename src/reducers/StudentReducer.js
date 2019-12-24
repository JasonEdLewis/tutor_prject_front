import React from 'react';
import { FETCH_STUDENTS, NEW_STUDENT, EDIT_STUDENT, DELETE_STUDENT, ERROR } from '../actions/types';


const initialState = {
    students: [],
    student: {},
    errorMessage: "",
    studentsKeyName: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_STUDENTS:

            return {
                ...state,
                students: action.payload,
                studentsKeyName: action.obj
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
            return {
                ...state,
                errorMessage: action.payload
            }
        case DELETE_STUDENT:
            const students = state.students.filter(student => student.id !== action.id)
            return {
                ...state,
                students
            }
        default:
            return state
    }






}