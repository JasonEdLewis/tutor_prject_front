import { combineReducers } from 'redux';
import instructors from './InstructorReducer';
import students from './StudentReducer';
import sessions from './SessionReducer';
import login from './LoginReducer';
import admin from './AdminReducer'

export default combineReducers({
    login,
    instructors,
    students,
    sessions,
    admin
})