import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newSession } from './actions/sessionActions';
import { reduceInstructorsHoursBasedOnSession } from './actions/instructorActions';
import './css/sessions.css';



class NewSession extends Component {

    state = {
        student_id: 0,
        instructor_id: null,
        admin_id: 1,
        date: "",
        time: "",
        home: true,
        subject: this.props.student.subject,
        location: "" || this.props.student.address,
        instruction: "",
        edit: false

    }

    handleChange = (e) => {

        if (e.target.name === "home") {
            if (e.target.value === 'true') {
                this.setState({ home: true })
            }
            else {
                this.setState({ home: false })
            }
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }

    }
    isEdit = () => {
        this.setState({ edit: !this.state.edit })
    }
    availableInstructors = () => {

        const theInstructor = this.props.instructors.filter(inst => inst.subject.toLowerCase() === this.props.student.subject.toLowerCase())
        // console.group(theInstructor)
        return theInstructor.map(intruct => <option value={parseInt(intruct.id)} >{intruct.name}</option>)
    }
    handleSubmit = (e) => {

        e.preventDefault()
        const instId = parseInt(this.state.instructor_id)
        const instHours = this.props.instructors.find(inst => inst.id === instId).hours - 2
        
        this.props.newSession(this.state, instId, instHours)

        this.setState({ student_id: 0, instructor_id: 0, admin_id: 1, date: "", time: "", home: "", subject: this.props.student.subject, location: "", instruction: "", })
        !this.props.isLoading && this.props.removeForm() 

    }

    render() {

        console.log("New Sessions state", this.state)
        console.log("New Sessions props", this.props.isLoading)


        // console.log("New Session state:", this.state) 
        console.log("New Seesion Props: ", this.props)
        const { student } = this.props
        console.log("Student's subject:", this.state)
        const { instruction, location, date, time, home } = this.state
        return (


            <div>
                <h2 style={{ color: "red" }}>Book {student.subject} for {student.name}</h2>
                <form className="new-session-form" onSubmit={this.handleSubmit}>
                    Student: <select onChange={this.handleChange} name="student_id">
                        <option value=""> --- </option>
                        <option value={parseInt(student.id)} >{student.name}</option>
                    </select>
                    <br />
                    {this.availableInstructors().length === 0 ? (<input placeholder={`We Need a ${student.subject} instructor `}></input>) :
                        (<> Instructor: <select onChange={this.handleChange} name="instructor_id">
                            <option value=""> --- </option>
                            {this.availableInstructors()}
                        </select></>
                        )}

                    <br />
                    <label>Date:</label>
                    <input type="date" value={date} name="date" onChange={this.handleChange} required />
                    <label>Time:</label>
                    <input type="time" value={time} onChange={this.handleChange} name="time" />
                    <label>Subject:</label>
                    <input name="subject" value={student.subject} placeholder={student.subject} onChange={this.handleChange} />
                    <label>home?: </label>
                    <select onChange={this.handleChange} name="home" >
                        <option value={null}> --- </option>
                        <option value={true}> Yes </option>
                        <option value={false}> No </option>
                    </select><br />
                    {this.state.home ?
                        (<></>) :
                        (<><label>Location: </label>
                            <input type="text" name="location" value={location} onChange={this.handleChange} placeholder={location} /></>)}
                    
                    <br />
                    Notes:
                    <textarea name="instruction" value={instruction} onChange={this.handleChange} />
                    <br />
                    <input type="submit"></input>
                    <br />
                    <button onClick={() => this.props.removeForm()}>Cancel</button>
                </form>

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        instructors: state.instructors.instructors,
        isLoading: state.sessions.isLoading
    }
}
export default connect(mapStateToProps, { reduceInstructorsHoursBasedOnSession, newSession })(NewSession)
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


:student_id,:instructor_id,:admin_id,:date,:time,:home,:subject,:location,:instruction


student_id: "",instructor_id: "",admin_id: 1,date: "",time: "",home: "",subject: this.props.student.subject,location: "",instruction: "",

*/


