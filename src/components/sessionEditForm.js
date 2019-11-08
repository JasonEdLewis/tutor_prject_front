import React, { Component } from 'react';
import '../css/sessions.css';
import { connect } from 'react-redux';
import { editSession } from '../actions/sessionActions'

class SessionEditForm extends Component {

    state = {
        id: this.props.session.id,
        student_id: this.props.student.id,
        instructor_id: "",
        admin_id: 1,
        date: "",
        time: "",
        home: true,
        subject: this.props.student.subject,
        location: "",
        instruction: "",
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        this.props.editSession(this.state)

    }
    handleChange = (e) => {

        debugger
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
    home = (val) => {
        val === "yes" ? this.setState({
            home: true
        }) : this.setState({
            home: false
        })
    }

    availableInstructors = () => {
        const theInstructor = this.props.instructors.filter(inst => inst.subject.toLowerCase() === this.props.session.subject.toLowerCase() || inst.specialty.toLowerCase() === this.props.session.subject.toLowerCase())
        // console.group(theInstructor)
        return theInstructor.map(intruct => <option value={intruct.id} >{intruct.name}</option>)
    }
    render() {
        const { student, session } = this.props
        console.log("Edit Sess", this.props)
        return (
            <div className="edit-session-form">
                <h4>Edit Session Details </h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Student:  </label>
                    <input type="text" onChange={this.handleChange} value={null} placeholder={`  ${student.name}`} />
                    {this.availableInstructors().length === 0 ? (<input placeholder={`We Need a ${session.subject} instructor `}></input>) :
                        (<> Instructor: <select onChange={this.handleChange} name="instructor_id">
                            <option value=""> --- </option>
                            {this.availableInstructors()}
                        </select></>
                        )}
                    <label>Subject: </label>
                    <input type="text" onChange={this.handleChange} name="subject" value={`  ${session.subject}`} />
                    <label>Date: </label>
                    <input type="date" value={this.state.date} name="date" onChange={this.handleChange} placeholder={session.date} />
                    <br />
                    <label>Time: </label>
                    <input type="time" value={this.state.time} onChange={this.handleChange} name="time" placeholder={this.props.time} />
                    <br />
                    <label>home?: </label>
                    <select onChange={this.handleChange} name="home" >
                        <option value={null}> --- </option>
                        <option value={true}> Yes </option>
                        <option value={false}> No </option>
                    </select><br />
                    {this.state.home ?
                        (<></>) :
                        (<><label name="location" value={session.location} onChange={this.handleChange}>Location: </label>
                            <input type="text" name="location" value={this.state.location} onChange={this.handleChange} /></>)}
                    <br />
                    Notes:
                    <textarea className="edit-notes-textarea" name="instruction" value={this.state.instruction} onChange={this.handleChange} placeholder={this.props.instruction} />
                    <br />
                    <input style={{ color: "black" }} type="submit"></input>
                    <br />
                    <button onClick={() => this.props.doWeNeedEditForm()}> Cancel </button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        instructors: state.instructors.instructors
    }
}
export default connect(mapStateToProps, { editSession })(SessionEditForm)
