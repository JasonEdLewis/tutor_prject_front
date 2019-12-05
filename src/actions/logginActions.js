import { REQUEST_LOGGIN, SUCCESS_LOGGIN, FAILED_LOGGIN } from './types';
import axios from 'axios';
export const logginRequest = (admin) => ({ type: REQUEST_LOGGIN, payload: admin, requesting: true });
export const logginSucess = (admin) => ({ type: SUCCESS_LOGGIN, payload: admin })
export const logginFail = (error) => ({ type: FAILED_LOGGIN, payload: error });


const myApi = `http://localhost:3000/api/v1/login/`;

export const logginFetch = (admin) => dispatch => {
    dispatch({ type: REQUEST_LOGGIN })
    return axios.post(myApi, admin)


}

