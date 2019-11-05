import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents, createStudent } from './actions/studentActions';
import NewStudentForm from './NewStudentForm';
import './App.css'

class Students extends Component {

    state = {
        studentclicked: false,
        formClicked: false,
        id: '',
        studentInfo: '',
        formSubmitted: false,

    }

    componentDidMount() {
        this.props.fetchStudents()
    }

    handleClick = (studentId) => {
        this.setState({
            studentClicked: !this.state.studentClicked,
            id: studentId,
        })
    }
    unclickNewStudentForm = () => {
        this.setState({ formSubmitted: false, formClicked: !this.state.formClicked })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            formSubmitted: !this.state.submitted,
            formClicked: !this.state.clicked
        })


    }
    handleEdit =(student)=>{
        console.log(student)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    studentQuickForm = () => {

        return (
            <>
                <br />
                <br />
                <h3><strong>Add A New Student: </strong></h3>
                <form className="quick-form" onSubmit={this.handleSubmit}>
                    <textarea rows="30" cols="80" type="text" onChange={this.handleChange} name="studentInfo" value={this.state.studentInfo} className="quick-form"> </textarea>
                    <br /><button >Submit</button>
                </form>
            </>)
    }
    hasSession = (student) => {
        if (student.sessions.length > 0) {
            student.sessions.map(sess => {
                const time = sess.date.replace(/-/g, "/").slice(11, 16)
                const date = sess.date.replace(/-/g, "/").split("T")[0]
                const timeInt = parseInt(time)
                const garbage = <li>`Date:${date} Time:${time}`</li>
                return garbage
            })
        }
        else {
            const status = <li>`${student.name} has no sessions booked....`</li>
            return status
        }

    }
    sessionsIds = () => {
        return this.props.students.sessions.map(sess => sess.id)
    }
    instructor = (sessionId) => {
        const session = this.props.sessions.find(sess => sess.id === sessionId)
        const instructor = this.props.instructors.find(inst => inst.id === session.instructor_id).name
        return instructor


    }

    singleStudentInfo = (id) => {

        const theStudent = this.props.students.find(stu => stu.id === id)

        return (<div>
            <p onClick={() => this.handleClick(theStudent.id)}><strong>{theStudent.name}</strong></p>
            <ul>
                <li><strong>Grade</strong>: {theStudent.grade}th</li>
                <li><strong>Guardian:</strong> {theStudent.guardian}</li>
                <li><strong>School:</strong> {theStudent.school}</li>
                {/* {this.hasSession(theStudent)} */}
                {theStudent.sessions.length > 0 ? theStudent.sessions.map(sess => (<><li><strong> sessions:</strong> {sess.subject} </li><li><strong>Date:</strong> {sess.date.replace(/-/g, "/").split("T")[0]}</li><li><strong>Time:</strong> {sess.date.replace(/-/g, "/").slice(11, 16)}am</li><strong>Instructor:</strong>{this.instructor(sess.id)}</>))
                    : `${theStudent.name} has no sessions booked`}
            </ul>
            <button onClick={()=> this.handleEdit(theStudent)}>Edit Student</button>
        </div>)
    }


    render() {

        const students = this.props.students.map(stu => {
            return <> <p onClick={() => this.handleClick(stu.id)} style={{ textShadow: ".02vh .02vh #717375" }}><strong>{stu.sessions.length > 0 ? " ✅ " : "❗️ "}Name:</strong>{stu.name} </p></>
        })
        return (
            <div>
                {this.state.studentClicked ? this.singleStudentInfo(this.state.id) : students}
                {this.state.formClicked ? <></> : this.studentQuickForm()}
                {this.state.formSubmitted ? <NewStudentForm newStuInfo={this.state.studentInfo} handleSubmit={this.handleSubmit} formUnclick={this.unclickNewStudentForm} /> : <></>}

            </div>

        )
    }

}
const mapStateToProps = (state) => {
    return {
        students: state.students.students,
        sessions: state.sessions.sessions,
        instructors: state.instructors.instructors
    }
}
export default connect(mapStateToProps, { fetchStudents, createStudent })(Students)