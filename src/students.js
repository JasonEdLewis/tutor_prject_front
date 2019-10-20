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
        console.log("Plain Students Handle Submit")
        this.setState({
            formSubmitted: !this.state.submitted,
            formClicked: !this.state.clicked
        })


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
                    <textarea rows="8" cols="60" type="text" onChange={this.handleChange} name="studentInfo" value={this.state.studentInfo} className="quick-form"> </textarea>
                    <button >Submit</button>
                </form>
            </>)
    }

    singleStudentInfo = (id) => {
        const theStudent = this.props.students.find(stu => stu.id === id)
        // const instructors = this.props.students.instructors.find(inst => inst.id === this.props.students.sessions.instructor_id)
        return (<div>
            <p onClick={() => this.handleClick(theStudent.id)}><strong>{theStudent.name}</strong></p>
            <ul>
                <li>Grade: {theStudent.grade}</li>
                <li>Guardian: {theStudent.guardian}</li>
                <li>School: {theStudent.school}</li>
                {theStudent.sessions.length > 0 ? theStudent.sessions.map(sess => (<><li> sessions: {sess.subject} </li><li>Dates: {sess.date}</li></>))
                : `${theStudent.name} has no sessions booked`}
                
                
            </ul>
        </div>)
    }

    render() {

        console.group("students.js props", this.props)
        const students = this.props.students.map(stu => <p onClick={() => this.handleClick(stu.id)}><strong>Name:</strong>{stu.name} <br /><strong>Grade:</strong> {stu.grade}th <br /><strong>School:</strong>{stu.school}</p>)
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
        students: state.students.students
    }
}
export default connect(mapStateToProps, { fetchStudents, createStudent })(Students)