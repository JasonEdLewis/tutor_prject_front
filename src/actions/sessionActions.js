import { FETCH_SESSIONS, NEW_SESSION, EDIT_SESSION } from './types'


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

const dispatchNewSession = (session) => ({ type: NEW_SESSION, payload: session })

export const createSession = (session) => {

    return async dispatch => {

        dispatch(dispatchNewSession(session))
        try {
            const responce = await fetch('http://localhost:3000/sessions', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify(session)
            })
        }
        catch (error) {
            console.log(error)
        }

    }
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



