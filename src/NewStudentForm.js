import React, { Component } from 'react';
import '../src/App.css';
import { connect } from 'react-redux';
import { createStudent } from './actions/studentActions'

class NewStudentForm extends Component {


    state = {
        students: [],
        student: {},
    }


handleChange=(e)=>{
    this.setState({
        student: {
        [e.target.name]:e.target.value
        }
    })

}

handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Student Form Handle Submit")
    debugger
    
    this.props.createStudent(this.state.student)
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
        const keys = ["name", "school_id", "reason", "date", "hours", "school", "grade", "sped", "counselor_info", "guardian", "address", "home_no", "cell", "email"]
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
                    <form className="new-student-form" handleSubmit={(e)=> console.log(e)}>
                        <label>Name:</label>
                        <input name="name" placeholder={this.state.student.name} className="student-input" value={this.state.student.name} onChange={this.handleChange} />
                        <label>School id:</label>
                        <input name="school_id" value={this.state.student.school_id} placeholder="SchoolId" className="student-input" onChange={this.handleChange} />
                        <label>Reason:</label>
                        <input name="reason"  value={this.state.student.reason} placeholder="reason" className="student-input" onChange={this.handleChange} />
                        <label>Start Date:</label>
                        <input name="date" value={this.state.student.date} type="datetime" placeholder="Start date" className="student-input" onChange={this.handleChange} />
                        <label>End date:</label>
                        <input name="" value={this.state.student.date} type="date" placeholder="End date" className="student-input" onChange={this.handleChange} />
                        <label>Hours:</label>
                        <input name="hours" value={this.state.student.hours} type="number" min="0" placeholder=" hours" className="student-input" onChange={this.handleChange} />
                        <label>School: </label>
                        <input value={this.state.student.school} placeholder="school" className="student-input" onChange={this.handleChange} />
                        <label>SPED: </label>
                        <input value={this.state.student.sped} type="boolean" placeholder="Special Ed" className="student-input" onChange={this.handleChange} />
                        <label>Councilor Info:</label>
                        <textarea row="5" col="60" value={this.state.student.counselor_info} placeholder="Counselor Info" className="student-input" onChange={this.handleChange} />
                        <br />
                        <h3>Guardian Info</h3>
                        <label>Name:</label>
                        <input value={this.state.student.guardian} placeholder="guardian" className="student-input" onChange={this.handleChange} />
                        <label>Address:</label>
                        <input value={this.state.student.address} placeholder="address" className="student-input" onChange={this.handleChange} />
                        <label>Cell:</label>
                        <input value={this.state.student.home_no} type="tel" placeholder="Cell Phone" className="student-input" onChange={this.handleChange} />
                        <label>Home Phone:</label>
                        <input value={this.state.student.cell} type="tel" placeholder="Home Phone" className="student-input" onChange={this.handleChange} />
                        <label>Email:</label>
                        <input value={this.state.student.email} type="email" placeholder="email" className="student-input" onChange={this.handleChange} />
                        <br />
                        <br />
                        <input type="submit" className="student-input" />
                    </form>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                    <button onClick={(e)=> console.log(e)}>Back</button>
                </div>
            </div>
        )
    }
}
export default connect(null, { createStudent })(NewStudentForm)


//          address home_no cell email