import { FETCH_SESSIONS, NEW_SESSION, EDIT_SESSION } from './types'
import { async } from 'q'




export const fetchSessions = () => {

    return function (dispatch) {
        fetch('http://localhost:3000/sessions')
            .then(resp => resp.json())
            .then(sessions => dispatch({
                type: FETCH_SESSIONS,
                payload: sessions
            }
            ))
    }

}

const dispatchNewSession =(session)=>({ type: NEW_SESSION, payload: session})
export const createSession = (session) => {

    return async dispatch => {
        dispatch(dispatchNewSession(session))
        try{
            debugger
        const responce = await fetch('http://localhost:3000/sessions', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({ session })
        })
        
    }
    catch(error){
        console.log(error)
    }
        
    }
}


// export const profileAdmin = (token) => {
//     return async dispatch => {

//         dispatch(profileRequested())
//         try {

//             let responce = await fetch('http://localhost:3000/api/v1/profile', {
//                 method: "GET",
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json',
//                     'Authorization': `${token}`
//                 }
//             })
//             return responce.json()


//         }
//         catch (error) {
//             dispatch(profileFailed(error))
//         }

//     }
// }
