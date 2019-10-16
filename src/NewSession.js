import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSession } from './actions/sessionActions';
import './App.css';



class NewSession extends Component {

    state = {
        student_id: "",
        instructor_id: "",
        admin_id: 1,
        date: "",
        time: "",
        home: "",
        subject: this.props.student.subject,
        location: "",
        instruction: "",
    }

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    availableInstructors=()=>{
       const theInstructor = this.props.instructors.filter(inst => inst.subject === this.props.student.subject)
        // console.group(theInstructor)
       return theInstructor.map(intruct=> <option value={intruct.id} >{intruct.name}</option>)
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        debugger
        this.props.createSession(this.state)
        this.setState({student_id: "",instructor_id: "",admin_id: 1,date: "",time: "",home: "",subject: this.props.student.subject,location: "",instruction: "",})
        // console.log(this.state)
    }

    render() {

        console.log("New Session state:", this.state)
        console.log("New Seesion Props: ", this.props)
        const { student } = this.props
        const { instruction, location, date,time,home } =this.state
        return (


            <div>
                <h1 style={{ color: "red" }}>This is the new session from</h1>
                <form className="new-session-form" onSubmit={this.handleSubmit}>
                <select onChange={this.handleChange} name="student_id">
                    <option value=""> --- </option>
                    <option value={student.id} >{student.name}</option>
                </select>
                <select onChange={this.handleChange} name="instructor_id">
                    <option value=""> --- </option>
                    {this.availableInstructors()}}
                </select>
                
                    <label>Date:</label>
                    <input type="date" value={date} name="date" onChange={this.handleChange}/>
                    <label>Time:</label>
                    <input type="time" value={time} onChange={this.handleChange} name="time"/>
                    <label>home?:</label>
                    <select onChange={this.handleChange} name="home">
                        <option value=""> --- </option>
                        <option value={true}>Yes</option>
                        <option value={false} >No</option>
                    </select>
                    <label>Subject:</label>
                    <input name="subject" value={student.subject} placeholder={student.subject} onChange={this.handleChange}/>
                    {home ? 
                        (<></>) : 
                        (<><label name="location" value={location} onChange={this.handleChange}>Location:</label>
                    <input type="text"/></>)}

                    <textarea name="instruction" value={instruction} onChange={this.handleChange}/>
                    <input type="submit"></input>
                </form>

            </div>

        )
    }
}
const mapStateToProps =(state)=>{
    return{
        instructors: state.instructors.instructors
    }
}
export default connect(mapStateToProps ,{ createSession })(NewSession)
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


