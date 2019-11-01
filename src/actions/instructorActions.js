import { FETCH_INSTRUCTORS, NEW_INSTRUCTOR, DELETE_INSTRUCTOR, REDUCE_HOURS } from './types';



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



// export const logginFetch =(admin)=>{
//     return async dispatch => {
//         dispatch(logginRequest(admin))
//         try{ 
//             let data
//            let responce = await fetch(myApi, {
//                 method: 'POST',
//                 headers: {
//                     "content-type": "application/json",
//                 },
//                 body: JSON.stringify(admin)
//             })
//            data = responce.json(); 
//            return data
//         } 
//         catch(error){
//             dispatch(logginFail(error))
//         };
       
     
//     }

// }







export const createInstructor = (instructData) => {
    return function (dispatch) {
        dispatch({
            type: NEW_INSTRUCTOR,
            payload: instructData
        })
        fetch('http://localhost:3000/instructors/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify(instructData)
        })
    }
}

export const reduceInstructorsHoursBasedOnSession = (id, hours) => {
    return function (dispatch) {
        // debugger
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
        dispatch({
            type: DELETE_INSTRUCTOR,
            payload: id
        })
        fetch(`http://localhost:3000/instructors/${id}`, {
            method: 'DELETE'
        })

    }
}