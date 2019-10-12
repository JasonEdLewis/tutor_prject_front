import React from 'react';
import NewInstructor from '../NewInstructorForm';
import Instructors from '../Instructors'


export default function adminShow(props) {
    console.log(props)
    return (
        <div>
             <h1>Admin Page</h1>
                
                <ul>{props.sessions}</ul>
                <div>
                    <NewInstructor/>
                    <h2>Our List of Instructors</h2>
                    <Instructors/>
                    <p>Add Students here: </p>
                    <form onSubmit={props.handleSubmit}>
                        <textarea rows="8" cols="75" type="text" onChange={props.handleChange} name="studentInfo"> </textarea>
                        <button >Submit</button>
                    </form>  
                    <h3>Booked Sessions</h3>
                   
                    </div>  
        </div>)
    
}
