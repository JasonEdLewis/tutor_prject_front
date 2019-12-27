import { FETCH_SESSIONS, NEW_SESSION, EDIT_SESSION, DELETE_SESSION, EDIT_INSTRUCTOR } from './types';
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
    let sessionData, instructorData
    return axios.post('http://localhost:3000/sessions', session)
        // 
        .then(resp => {
            sessionData = resp.data
            axios.patch(`http://localhost:3000/instructors/${id}`, { hours: hours }).then(res => instructorData = res.data).then(() => {
                debugger
                dispatch({ type: NEW_SESSION, payload: sessionData })
                dispatch({ type: EDIT_INSTRUCTOR, payload: instructorData })

            })
        }
        )
    
}
export const editSession = (session) => {

    return function (dispatch) {
        return fetch(`http://localhost:3000/sessions/${session.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify(session)
        }
        ).then(resp => resp.json()).then(
            dispatch({
                type: EDIT_SESSION,
                payload: session
            })
        )
    }

}

export const deleteSession = (id) => {
    return dispatch => {
        dispatch({ type: DELETE_SESSION, payload: id })

        return fetch(`http://localhost:3000/sessions/${id}`, {
            method: 'DELETE'
        })

    }
}



