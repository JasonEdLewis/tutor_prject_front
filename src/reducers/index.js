import { combineReducers } from 'redux';
import instructors from './InstructorReducer';
import students from './StudentReducer';
import sessions from './SessionReducer';
import login from './LoginReducer';

export default combineReducers({
    login,
    instructors,
    students,
    sessions,


})