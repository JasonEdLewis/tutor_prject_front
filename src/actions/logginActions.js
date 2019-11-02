import {REQUEST_LOGGIN,SUCCESS_LOGGIN,FAILED_LOGGIN}from './types';

export const logginRequest = (admin) =>({ type: REQUEST_LOGGIN, payload:admin, requesting:true });
export const logginSucess =(admin)=>({ type: SUCCESS_LOGGIN, payload: admin})
export const logginFail =(error)=> ({ type: FAILED_LOGGIN , payload: error})

const myApi = `http://localhost:3000/api/v1/login/`;

export const logginFetch =(admin)=>{
    return async dispatch => {
        dispatch(logginRequest(admin))
        try{ 
            let data
           let responce = await fetch(myApi, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(admin)
            })
           data = responce.json(); 
           return data
        } 
        catch(error){
            dispatch(logginFail(error))
        };
       
     
    }

}
