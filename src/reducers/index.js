import { combineReducers } from 'redux';
import InstructorReducer from './InstructorReducer';
import StudentReducer from './StudentReducer';
import SessionReducer from './SessionReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
    instructors: InstructorReducer,
    students: StudentReducer,
    sessions: SessionReducer,
    login: LoginReducer

})