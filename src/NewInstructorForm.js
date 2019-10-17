import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createInstructor } from './actions/instructorActions';
import './App.css';

class NewInstructorForm extends Component {

    state = {
        name: "",
        subject: "",
        specialty: "",
        hours: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.createInstructor(this.state)
        this.setState({ name: "", subject: "", specialty: "", hours: "" })
        this.props.removeForm()

    }
    render() {
        console.log("New Instructor form props:", this.props)
        return (
            <div>
                <h2>New Instructor Form</h2>
                <form onSubmit={this.handelSubmit} className="new-instructor-form">
                    <label>name: </label>
                    <input type="text" name="name" placeholder="" value={this.state.name} onChange={this.handleChange} /><br/>
                    <label>Subject: </label>
                    <input type="text" name="subject" placeholder="" value={this.state.subject} onChange={this.handleChange} />
                    <label>specialty: </label>
                    <input type="text" name="specialty" placeholder="" value={this.state.specialty} onChange={this.handleChange} /><br/>
                    <label>Hours: </label>
                    <input type="number" min="4" name="hours" placeholder="" value={this.state.hours} onChange={this.handleChange} />
                    <br />
                    <input type="submit" />
                </form>
                <button onClick={this.props.removeForm}>Back</button>
            </div>
        )
    }
}
export default connect(null, { createInstructor })(NewInstructorForm)
