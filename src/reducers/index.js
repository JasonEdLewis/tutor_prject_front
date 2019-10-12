import { combineReducers } from 'redux';
import InstructorReducer from './InstructorReducer';
import StudentReducer from './StudentReducer';
import SessionReducer from './SessionReducer';

export default combineReducers({
    instructors: InstructorReducer,
    students: StudentReducer,
    sessions: SessionReducer

})