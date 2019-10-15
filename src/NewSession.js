import React, { Component } from 'react';
import  { connect } from 'react-redux';


class NewSession extends Component {


    render() {
        return (
            
            <div>
                <h1 style={{color: "red"}}>This is the new session from</h1>
                <select>
                    <option value={null/* this should populate the student clicked on */}>student</option>
                </select>
                <select>
                    <option value={null/* filter the instructors who teach this SUBJECT*/ }>instructor_id</option>
                </select>
                <form className="new-sessions">
                    <label>Date:</label>
                    <input/>
                    <label>Time:</label>
                    <input/>
                    <label>home?:</label>
                    <select>
                        <option value=""> --- </option>
                        <option value={true}>Yes</option>
                        <option value={false} >No</option>
                    </select>
                    <input/>
                    <label>Time:</label>
                    <input/>
                    <label>Subject:</label>
                    <input/>
                    <label>Location:</label>
                    <input/>

                    <textarea value={null}/>
               </form>
            </div>
            
        )
    }
}

export default connect(null)(NewSession)
/*

student_id
instructor_id
admin_id
date
time
home
subject
location
instruction

*/


