import React, { Component } from 'react';
import { editStudent } from '../actions/studentActions';
import { connect } from 'react-redux';
import '../css/students.css'



class StudentForm extends Component {
   

    state = {
        id:this.props.student.id,
        name:""|| this.props.student.name,
        school_id: "" || this.props.student.school_id,
        reason: "" || this.props.student.reason,
        date: "" || this.props.student.date,
        hours: "" || this.props.student.hours,
        school: "" || this.props.student.school,
        grade: "" || this.props.student.grade,
        sped: false || this.props.student.sped,
        subject: "" || this.props.student.suject,
        counselor_info: "" || this.props.student.counselor_info,
        guardian: "" || this.props.student.guardian,
        address: "" || this.props.student.address,
        home_no: "" || this.props.student.home_no,
        cell: "" || this.props.student.cell,
        email: "" || this.props.student.email,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editStudent(this.state).then(data => {
            this.props.back() 
        })
    }
    render() {
        const {name, school_id, reason, date, hours, school, grade, sped, counselor_info, guardian, address, home_no, cell,email,subject } = this.props.student
       
        return (
            <div>
                <h6>Edit Student</h6>
                <form className="edit-student-form" onSubmit={this.handleSubmit}>
                <label>Name: </label>
                    <input type="text" name="name" placeholder={name}  onChange={this.handleChange} value={this.state.name}/>
                    <label>School id:</label>
                    <input type="number" name="school_id" value={this.state.school_id} placeholder={ school_id } className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <label>Reason:</label>
                    <input type="text" name="reason" value={this.state.reason} placeholder={reason} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <label>Start Date:</label>
                    <input name="date" value={this.state.date} type="date" placeholder={ date} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <label>Hours: </label>
                    <input name="hours" value={this.state.hours} type="number" placeholder={ hours} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <label>School: </label>
                    <input type="text" name="school" value={this.state.school} placeholder={school} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <label>Grade:</label>
                    <input name="grade" value={this.state.grade} type="number" min="0" max="12" placeholder={ grade} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <label>Subject:</label>
                    <input name="subject" value={this.state.subject} type="text" placeholder={ subject} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <label>SPED: </label>
                    <select name="sped "  type="boolean" placeholder={ sped} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} >
                        <option value={null} > --- </option>
                        <option value={true} > Yes </option>
                        <option value={this.state.sped} > No </option>
                    </select>
                    <label>Councilor Info:</label>
                    <textarea row="5" col="60" value={this.state.counselor_info} placeholder={ counselor_info} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} name="counselor_info" />
                    {/* <br /> */}
                    <h3>Guardian Info</h3>
                    <label>Name:</label>
                    <input type="text" value={this.state.guardian} placeholder={ guardian} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} name="guardian"/>
                    <label>Address:</label>
                    <input type="text" value={this.state.address} placeholder={ address} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} name="address" />
                    <label>Cell:</label>
                    <input value={this.state.cell} type="text" placeholder={ cell} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} name="cell" />
                    <label>Phone:</label>
                <input value={ this.state.home_no} type="text" placeholder={ home_no} className="student-input" onChange={this.handleChange} name="home_no" style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <label>Email:</label>
                    <input name="email" value={this.state.email} type="email" placeholder={ email} className="student-input" onChange={this.handleChange} style={{ width: "40%", fontSize: ".75vw", borderRadius: ".25em" }} />
                    <br />
                        <br /> 
                    <input type="submit" className="student-input" style={{ width: "20%", fontSize: "1em", borderRadius: ".25em" }} />
                </form>
            </div>
        )
    }
}
export default connect(null, { editStudent })(StudentForm)