import { FETCH_SESSIONS, NEW_SESSION, EDIT_SESSION, DELETE_SESSION, EDIT_INSTRUCTOR, IS_LOADING, FINISH_LOADING } from './types';
import axios from 'axios';


export const fetchSessions = () => {

    return async function (dispatch) {
        const resp = await fetch('http://localhost:3000/sessions')
        const sessions = await resp.json()
        return dispatch({
            type: FETCH_SESSIONS,
            payload: sessions
        })
    }
}
export const newSession = (session, id, hours) => dispatch => {
    dispatch({ type: IS_LOADING })
    return axios.post('http://localhost:3000/sessions', session)
        // 
        .then(resp => {
            dispatch({ type: NEW_SESSION, payload: resp.data })
            return axios.patch(`http://localhost:3000/instructors/${id}`, { hours: hours }).then(res => {
                dispatch({ type: EDIT_INSTRUCTOR, payload: res.data })
                dispatch({ type: FINISH_LOADING })
            }
            )

        }
        )


}


export const editSession = (session) => dispatch=>{
    dispatch({ type: IS_LOADING })
    return axios.patch(`http://localhost:3000/sessions/${session.id}`, session)
        .then(resp => {
            dispatch({
                type: EDIT_SESSION,
                payload: resp.data
            })
            dispatch({ type: FINISH_LOADING })
        }
        )
    }



export const deleteSession = (id) => dispatch => {
    debugger
        dispatch({ type: IS_LOADING })
        dispatch({ type: DELETE_SESSION, payload: id })
        return axios.delete(`http://localhost:3000/sessions/${id}`, {
            method: 'DELETE'
        }).then(dispatch({ type: FINISH_LOADING }))

    }






// AXIOS.ALL THAT DIDNT WORK WITH RAILS API
// export const newSession = (session, id, hours) => dispatch => {
//     return axios.all([
//         axios.post('http://localhost:3000/sessions', session),
//         axios.patch(`http://localhost:3000/instructors/${id}`, { hours: hours })
//     ]).then((sessionData, instructorData) => {
//         console.log("Session resp data:", sessionData)
//         console.log("Instructor resp data:", instructorData)

//     })


// }