import React from 'react';
import NewInstructor from '../NewInstructorForm';
import Instructors from '../Instructors';
import { connect } from 'react-redux'


export default function adminShow(props) {
    // debugger
    const { history, user, login } = props.info
    // console.log("Admin show props",props.info.sessions.session)
    return (

        <div className="middle">
            <nav><button onClick={()=> {
                history.push('/')
                localStorage.clear()
                console.log("Local storage After logout",localStorage.token)
        }}>Log Out</button></nav>
             <h1>WELCOME BACK {login.username}</h1>
                
                <div>
                    
                    </div>  
        </div>)
    
}
