import React, { Component } from 'react';
import './App.css';
import StudentForm from './components/EditStudentForm';
import { connect } from 'react-redux';
import { createStudent } from './actions/studentActions'

class NewStudentForm extends Component {


    state = {
        student: {},
    }


    handleChange = (e) => {
        this.setState({
            student: {
                ...this.state.student,
                [e.target.name]: e.target.value
            }
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createStudent(this.state.student).then(
            this.props.formUnclick()
        )
    }
    componentDidMount() {
        this.firstCleanOfNewStudent(this.props.newStuInfo)
    }
    fillInSpaces = (arr) => {

        const results = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].endsWith(":") && (i + 1 !== arr.length) && arr[i + 1].endsWith(":")) {
                results.push(arr[i + 1])
            }
            else if (arr[arr.length - 1].endsWith(":") && i === arr.length - 1 && (!results.includes(arr[arr.length - 1]))) {
                results.push(arr[arr.length - 1])
            }
        }
        const insertNulls = results.map(result => arr.indexOf(result))

        insertNulls.forEach((idx, i = 0) => arr.splice(idx + i, 0, "null"), i += 1)

        if (arr.length % 2 === 1 && arr[arr.length - 1].endsWith(":")) {
            arr.push("null")
        }

        const valuesForObj = arr.filter((attribute, index) => index % 2 === 1)
        this.makeNewStudentObj(valuesForObj)
    }
    // 



    makeNewStudentObj = (arr) => {
        var newStudObj = {}
        const keys = ["name", "school_id", "reason", "date", "hours", "school", "grade", "sped", "counselor_info", "guardian", "address", "home_no", "cell", "email", "subject"]
        for (var i = 0; i < arr.length; i++) {
            newStudObj[keys[i]] = arr[i]

        }
        this.setState({ student: newStudObj })
    }
    firstCleanOfNewStudent = (newStudent) => {

        var rawInput = newStudent.split(/\n/).filter(entry => entry !== "" && entry !== " ")

        let cleanInput = rawInput.map(input => input.trim())

        this.fillInSpaces(cleanInput)
    }

    render() {

        return (
            <div>
                <h1>New Student Form</h1>
                <h3>Student Info</h3>
                <div>
                    <form className="new-student-form" onSubmit={this.handleSubmit} >
                        <label>Name:</label>
                        <input name="name" placeholder='name' className="student-input" value={this.state.student.name} onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>School id:</label>
                        <input name="school_id" value={this.state.student.school_id} placeholder="SchoolId" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Reason:</label>
                        <input name="reason" value={this.state.student.reason} placeholder="reason" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Start Date:</label>
                        <input name="date" value={this.state.student.date} type="date" placeholder="Start date" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Hours: </label>
                        <input name="hours" value={this.state.student.hours} type="number" placeholder="10" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>School: </label>
                        <input name="school" value={this.state.student.school} placeholder="school" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Grade:</label>
                        <input name="grade" value={this.state.student.grade} type="number" min="0" max="12" placeholder=" k - 12" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Subject:</label>
                        <input name="subject" value={this.state.student.subject} type="text" placeholder=" subject" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>SPED: </label>
                        <select name="sped " type="text" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} >
                            <option value={null} > --- </option>
                            <option value={true} > Yes </option>
                            <option value={false} > No </option>
                        </select>
                        <label>Councilor Info:</label>
                        <textarea row="6" col="40" value={this.state.student.counselor_info} placeholder="Counselor Info" className="student-input" onChange={this.handleChange} style={{ width: "100%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <br />
                        <h3>Guardian Info</h3>
                        <label>Name:</label>
                        <input value={this.state.student.guardian} placeholder="guardian" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Address:</label>
                        <input value={this.state.student.address} placeholder="address" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Cell:</label>
                        <input value={this.state.student.cell} type="tel" placeholder="Cell Phone" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} name="cell" />
                        <label>Home Phone:</label>
                        <input value={this.state.student.home_no} type="text" placeholder="Home Phone" className="student-input" onChange={this.handleChange} name="home_no" style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Email:</label>
                        <input name="email" value={this.state.student.email} type="email" placeholder="email" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <br />
                        <br />
                        <input type="submit" className="student-input" style={{ width: "75%", fontSize: "1em", borderRadius: ".25em" }} />
                    </form>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                    <button onClick={this.props.formUnclick}>Back</button>
                </div>
            </div>
        )
    }
}
export default connect(null, { createStudent })(NewStudentForm)



