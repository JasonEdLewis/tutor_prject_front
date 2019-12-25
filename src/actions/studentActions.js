import React from 'react';
import { FETCH_STUDENTS, NEW_STUDENT, EDIT_STUDENT,ERROR, DELETE_STUDENT } from './types';
import axios from 'axios'

export const fetchStudents = () => {
    return function (dispatch) {
        
        fetch('http://localhost:3000/students')
            .then(resp => resp.json())
            .then(students => {
                const obj={}
                students.forEach(student => obj[student.id]= student.name)
                dispatch({
                type: FETCH_STUDENTS,
                payload: students,
                obj
            })
        }
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
export const editStudent =(info)=>{
  
    return function (dispatch) {
   return fetch(`http://localhost:3000/students/${info.id}`,{
     method: 'PATCH',
     headers: {
         'content-type': 'application/json',
         accepts: 'application/json'
     },
     body: JSON.stringify(info)
    }
    ).then(resp => resp.json()).then(data => dispatch({type:EDIT_STUDENT, payload:info }))
    }
}

export const deleteStudent = (id) => dispatch=>{
    dispatch( { type: DELETE_STUDENT, id })
    axios.delete(`http://localhost:3000/students/${id}`)

}