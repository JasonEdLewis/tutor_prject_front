import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewSession extends Component {

    state = {
        student_id: "",
        instructor_id: "",
        admin_id: "",
        date: "",
        time: "",
        home: "",
        subject: "",
        location: "",
        instruction: "",
    }

    handleChange = (e) => {
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {

        debugger
        console.log("New Session props: ", this.props, "State:", this.state)
        const { student } = this.props
        return (


            <div>
                <h1 style={{ color: "red" }}>This is the new session from</h1>

                <select>
                    <option value=""> --- </option>
                    <option name="student_id" value={student.id} onChange={this.handleChange}>{student.name}</option>
                </select>
                <select>
                    <option value={null/* filter the instructors who teach this SUBJECT*/}>instructor_id</option>
                </select>
                <form className="new-sessions">
                    <label>Date:</label>
                    <input />
                    <label>Time:</label>
                    <input />
                    <label>home?:</label>
                    <select>
                        <option value=""> --- </option>
                        <option value={true}>Yes</option>
                        <option value={false} >No</option>
                    </select>
                    <input />
                    <label>Time:</label>
                    <input />
                    <label>Subject:</label>
                    <input />
                    <label>Location:</label>
                    <input />

                    <textarea value={null} />
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


