import React from 'react';
import { FETCH_STUDENTS, NEW_STUDENT, EDIT_STUDENT,ERROR } from './types';

export const fetchStudents = () => {
    return function (dispatch) {
        
        fetch('http://localhost:3000/students')
            .then(resp => resp.json())
            .then(students => dispatch({
                type: FETCH_STUDENTS,
                payload: students
            })
            )
    }

}
const dispatchNewStudent=(info)=>({type:NEW_STUDENT, payload:info })
const dispatchError=(err)=>({type: ERROR, payload: err})
export const createStudent = (studentInfo) => {
    console.log("creating student....")

    return async dispatch =>{
        dispatch(dispatchNewStudent(studentInfo))
        try{
        fetch('http://localhost:3000/students/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify(studentInfo)
        })
    }
    catch(error){
        dispatch(dispatchError(error))
    }

    }
}