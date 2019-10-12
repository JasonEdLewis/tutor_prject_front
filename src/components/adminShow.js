import React from 'react';
import NewInstructor from '../NewInstructorForm';
import Instructors from '../Instructors'


export default function adminShow(props) {
    
    const { info, handleSubmit, handleChange, studentState } = props
    console.log("Admin show",info.history)
    return (

        <div>
            <nav><button onClick={()=> info.history.push('/')}>Log Out</button></nav>
             <h1>WELCOME BACK {null}</h1>
                
                <ul>{props.sessions}</ul>
                <div>
                    <NewInstructor/>
                    <h2>Our List of Instructors</h2>
                    <Instructors/>
                    <p>Add Students here: </p>
                    <form onSubmit={handleSubmit}>
                        <textarea rows="8" cols="75" type="text" onChange={handleChange} name="studentInfo" value={studentState}> </textarea>
                        <button onSubmit={handleSubmit}>Submit</button>
                    </form>  
                    <h3>Booked Sessions</h3>

                    <br/>
                    <br/>
                    
                   
                    </div>  
        </div>)
    
}
