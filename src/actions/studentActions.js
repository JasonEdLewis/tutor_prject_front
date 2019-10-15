import React from 'react';
import { FETCH_STUDENTS, NEW_STUDENT, EDIT_STUDENT } from './types';

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

export const createStudent = (studentInfo) => {
    console.log("creating student....")
    return function (dispatch) {

        fetch('http://localhost:3000/students/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify(studentInfo)
        })
            .then(resp => resp.json())
            .then(student => dispatch({
                type: NEW_STUDENT,
                payload: student
            }))

    }
}