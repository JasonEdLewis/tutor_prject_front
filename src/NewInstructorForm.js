import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createInstructor } from './actions/instructorActions'

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
        this.setState({name: "", subject: "", specialty: "", hours: "" })
        this.props.removeForm()

    }
    render() {
        console.log("New Instructor form props:",this.props)
        return (
            <div>
                <h2>New Instructor Form</h2>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="subject" placeholder="subject" value={this.state.subject} onChange={this.handleChange} />
                    <input type="text" name="specialty" placeholder="specialty" value={this.state.specialty} onChange={this.handleChange} />
                    <input type="text" name="hours" placeholder="hours" value={this.state.hours} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <button onClick={this.props.removeForm}>Back</button>
            </div>
        )
    }
}
export default  connect(null,{ createInstructor })(NewInstructorForm)
