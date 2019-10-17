import React from 'react';

 export const adminFetchPost =(admin)=>{
        return dispatch =>{
            return fetch('http://localhost:3000/admins',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify({admin})
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    return 
                }else{
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginAdmin(data.admin))
                }
            })
        }

}

const loginAdmin=(adminObj)=>({
    type:'LOGIN_ADMIN',
    payload: adminObj
})