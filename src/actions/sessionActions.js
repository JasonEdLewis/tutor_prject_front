import { FETCH_SESSIONS, NEW_SESSION, EDIT_SESSION } from './types'

export const fetchSessions =()=>{

    return function (dispatch) {
        fetch('http://localhost:3000/sessions')
        .then(resp => resp.json())
        .then( sessions => dispatch({
                type: FETCH_SESSIONS,
                payload : sessions 
        }
            ) )
    }

}

export const createSession =(session)=>{
    return function (dispatch) {
        fetch('http://localhost:3000/sessions', {
            method: 'POST',
            headers :{
                "content-type" :"application/json",
                accept : "application/json"
            },
            body : JSON.stringify({session})
        })
        .then(resp => resp.json())
        .then(session => dispatch({
            type: NEW_SESSION,
            payload: session
        }))
        
    }

}