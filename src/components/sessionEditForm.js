import React, { Component } from 'react';
import '../sessions.css';
import { connect } from 'react-redux'

 class SessionEditForm extends Component {

    state ={
    session:{},
    name:'',
    student_id: 0,
    instructor_id: "",
    admin_id: 1,
    date: "",
    time: "",
    home: false,
    subject: this.props.student.subject,
    location: "",
    instruction: "",
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e)
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    availableInstructors = () => {
        const theInstructor = this.props.instructors.filter(inst => inst.subject.toLowerCase() === this.props.student.subject.toLowerCase())
        // console.group(theInstructor)
        return theInstructor.map(intruct => <option value={intruct.id} >{intruct.name}</option>)
    }
    render() {
        const {student, session} =this.props
        console.log("Edit Sess",this.props)
        return (
            <div className="edit-session-form">
                <form onSubmit={this.handleSubmit}>
                <input type="number" name="student_id" value={student.id} hidden="true"/>

                    <label>Student:</label>
                <input type="text" onChange={this.handleChange} name="name" value={null} placeholder={student.name}/>
                {this.availableInstructors().length === 0 ? (<input placeholder={`We Need a ${student.subject} instructor `}></input>) :
                        (<> Instructor: <select onChange={this.handleChange} name="instructor_id">
                            <option value=""> --- </option>
                            {this.availableInstructors()}
                        </select></>
                        )}
                <input type="text" onChange={this.handleChange} name="subject" value={student.subject}/>
                <label>Date:</label>
                    <input type="date" value={this.state.date} name="date" onChange={this.handleChange} placeholder={session.date} />
                    <label>Time:</label>
                    <input type="time" value={session.time} onChange={this.handleChange} name="time" />
                    <label>home?:</label>
                    <select onChange={this.handleChange} name="home">
                        <option value=""> --- </option>
                        <option value={true}>Yes</option>
                        <option value={false} >No</option>
                    </select><br />
                    <label>Subject:</label>
                    <input name="subject" value={student.subject} placeholder={student.subject} onChange={this.handleChange} />
                    {this.state.home ?
                        (<></>) :
                        (<><label name="location" value={session.location} onChange={this.handleChange}>Location:</label>
                            <input type="text" /></>)}
                    <br />
                    Notes:
                    <textarea name="instruction" value={session.instruction} onChange={this.handleChange} />
                    <br />
                    <input style={{color: "black"}}type="submit"></input>
                    <br />
                    <button onClick={() => this.props.doWeNeedEditForm()}>Cancel</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        instructors : state.instructors.instructors
    }
}
export default connect(mapStateToProps)(SessionEditForm)
