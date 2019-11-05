import React from 'react';
import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILED } from './types'


export const profileRequested = () => ({ type: PROFILE_REQUEST, requesting: true });

export const profileSuccess = (admin) => ({ type: PROFILE_SUCCESS, payload: admin });

const profileFailed = (error) => ({ type: PROFILE_FAILED, payload: error });


export const profileAdmin = (token) => {
    if (token !== undefined) {
        return async dispatch => {

            dispatch(profileRequested())
            try {

                let responce = await fetch('http://localhost:3000/api/v1/profile', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `${token}`
                    }
                })
                return responce.json()


            }
            catch (error) {
                dispatch(profileFailed(error))
            }

        }
    } else {

        profileFailed("Please enter valid username or password..")
    }
}



