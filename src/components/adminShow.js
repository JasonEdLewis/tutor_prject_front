import React from 'react';
import NewInstructor from '../NewInstructorForm';
import Instructors from '../Instructors'


export default function adminShow(props) {
    // debugger
    const {  handleSubmit, handleChange, studentState, sessions, history } = props.info
    // console.log("Admin show props",props.info.sessions.session)
    return (

        <div className="middle">
            <nav><button onClick={()=> history.push('/')}>Log Out</button></nav>
             <h1>WELCOME BACK {null}</h1>
                
                <ul>{props.sessions}</ul>
                <div>

                    <br/>
                    <br/>
                   
                    <h3>Booked Sessions</h3>
                    
                    </div>  
        </div>)
    
}
