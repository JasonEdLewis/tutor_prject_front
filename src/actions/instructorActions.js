import axios from 'axios';
import { FETCH_INSTRUCTORS, NEW_INSTRUCTOR, DELETE_INSTRUCTOR, EDIT_INSTRUCTOR, REDUCE_HOURS, IS_LOADGING_INST, NOT_LOADING_INST, IS_EDITING_INST,
    NOT_EDITING_INST} from './types';



export const fetchInstructors = () => {

    return function (dispatch) {

        fetch('http://localhost:3000/instructors')
            .then(resp => resp.json())
            .then(instructors => dispatch({
                type: FETCH_INSTRUCTORS,
                payload: instructors
            }))
    }
}


export const createInstructor = (instructData) => {
    return function (dispatch) {

        dispatch({ type: IS_LOADGING_INST })
        fetch('http://localhost:3000/instructors/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify(instructData)
        }).then(resp => resp.json()).then(data => {
            dispatch({
                type: NEW_INSTRUCTOR,
                payload: data,

            })
            dispatch({ type: NOT_LOADING_INST })
        })
    }
}
export const editInstructor = (info) => {

    return function (dispatch) {
        dispatch({ type: IS_EDITING_INST })

        fetch(`http://localhost:3000/instructors/${info.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify(info)
        }).then(resp => resp.json()).then(data => {
            debugger
             dispatch({
                type: EDIT_INSTRUCTOR,
                payload: data
            })
            dispatch({type:  NOT_EDITING_INST})
        }
        

        )
    }
}

export const reduceInstructorsHoursBasedOnSession = (id, hours) => {
    return function (dispatch) {
        debugger
        dispatch({
            type: REDUCE_HOURS,
            payload: id
        })
        fetch(`http://localhost:3000/instructors/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify({
                hours
            })

        })
    }
}

export const deleteInstructor = (id) => {
    return function (dispatch) {
        dispatch({ type: IS_LOADGING_INST })

        fetch(`http://localhost:3000/instructors/${id}`, {
            method: 'DELETE'
        }).then(
            dispatch({
                type: DELETE_INSTRUCTOR,
                payload: id
            }),
            dispatch({ type: NOT_LOADING_INST })

        )

    }
}