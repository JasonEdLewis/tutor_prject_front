import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editInstructor } from '../actions/instructorActions';
import '../App.css';

class EditInstructorForm extends Component {

    state = {

        name: "" || this.props.instructor.name,
        subject: "" || this.props.instructor.subject,
        specialty: "" || this.props.instructor.specialty,
        hours: "" || this.props.instructor.hours,
        id: this.props.instructor.id
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.editInstructor(this.state)
        debugger
        this.setState({ name: "", subject: "", specialty: "", hours: "" })
        // this.props.removeForm(e)

    }
    render() {
        console.log("Edit Instructor form props:", this.props, "State id", this.state.id)
        const { name, subject, specialty, hours } = this.props.instructor
        const { removeForm } = this.props
        const firstName = name.split(" ")[0]
        return (
            <div>
                <h6 style={{ marginLeft: "-15%", color: "#044891" }}>Edit {firstName}'s Info below</h6>
                <form onSubmit={this.handelSubmit} className="instructor-card-div" style={{ paddingTop: "5%" }}>
                    <label>Name: </label>
                    <input type="text" name="name" placeholder={name} value={this.state.name} onChange={this.handleChange} /><br />
                    <label>Subject: </label>
                    <input type="text" name="subject" placeholder={subject} value={this.state.subject} onChange={this.handleChange} />
                    <label>specialty: </label>
                    <input type="text" name="specialty" placeholder={specialty} value={this.state.specialty} onChange={this.handleChange} /><br />
                    <label>Hours: </label>
                    <input type="number" min="4" name="hours" placeholder={hours} value={this.state.hours} onChange={this.handleChange} />
                    <br />
                    <input type="submit" />
                    <br />
                    <button onClick={removeForm} className="edit-instruc-cancel">Cancel</button>
                </form>

            </div>
        )
    }
}


export default connect(null, { editInstructor })(EditInstructorForm)



