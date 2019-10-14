import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents, createStudent } from './actions/studentActions';

class Students extends Component {

    state = {
        clicked: false,
        id: ''
    }

    componentDidMount() {
        this.props.fetchStudents()
    }

    handleClick = (studentId) => {
        this.setState({
            clicked: !this.state.clicked,
            id: studentId,
        })
    }

    singleStudentInfo = (id) => {
        const theStudent = this.props.students.students.find(stu => stu.id === id)
        // debugger
        // console.log("The Single Student", theStudent)
        return (<div>
            <p onClick={() => this.handleClick(theStudent.id)}><strong>{theStudent.name}</strong></p>
            <ul>
                <li>Grade: {theStudent.grade}</li>
                <li>Guardian: {theStudent.guardian}</li>
                <li>sessions: {theStudent.sessions}</li>
                <li>School: {theStudent.school}</li>
                <li>Dates: {theStudent.date}</li>


            </ul>
        </div>)
    }

    render() {
        console.log("Students page props:", this.props)
        const students = this.props.students.students.map(stu => <p onClick={() => this.handleClick(stu.id)}><strong>Name:</strong>{stu.name} <br /><strong>Grade:</strong> {stu.grade}th <br /><strong>School:</strong>{stu.school}</p>)
        return (
            <div>
                {this.state.clicked ? this.singleStudentInfo(this.state.id) : students}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}
export default connect(mapStateToProps, { fetchStudents, createStudent })(Students)