import React from 'react';
import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILED } from '../actions/types'

const initialState = {
    currentAdmin: {},
    requesting: null,
    errorMessage: ""
}
const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_REQUEST:
            return { ...state, requesting: true }

        case PROFILE_SUCCESS:

            return { ...state, currentAdmin: action.payload, requesting: false }

        case PROFILE_FAILED:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}
export default AdminReducer