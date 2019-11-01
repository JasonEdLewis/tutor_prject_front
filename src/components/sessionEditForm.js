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
    home: "",
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
        const {student, subject} =this.props
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
                <input type="text" onChange={this.handleChange} name="subject" value={subject}/>
                <input type="text"onChange={this.handleChange} name="" value={null}/>
                <input type="text"onChange={this.handleChange} name="" value={null}/>
                <br/>
                <input type="submit"/>
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
