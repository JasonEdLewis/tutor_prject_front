import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from './actions/sessionActions';
import NewSession from './NewSession';
import './sessions.css'


class Sessions extends Component {
    componentDidMount() {
        this.props.fetchSessions()
    }

    state = {
        student: {},
        needForm: false,
        showOneSession: false,
        active: true,
    }
    handleClick = (student) => {
        // console.log(id)
        this.setState({ student, needForm: !this.state.needForm })
    }
    SessionClicked = (e) => {
        this.setState({ showOneSession: !this.state.showOneSession })
    }
    activatePanels = () => {
        console.log(this.state.active)
    if (this.state.active){
        return <div class="panel"> <p>Lorem ipsum...</p> </div>
    }
    }
    render() {
        // console.log("Sessions props",this.props)
       

        const studentsInNeed = this.props.students.filter(student => student.sessions.length === 0)

        const scheduleTheseStudents = studentsInNeed.map(student => <h3 ><strong>{student.name} </strong><button onClick={() => this.handleClick(student)} >Book</button></h3>)

    const session = this.props.sessions.map(session => {
        const time = session.date.replace(/-/g, "/").slice(11,16)
        const date = session.date.replace(/-/g, "/").split("T")[0]
        const timeInt = parseInt(time)
        console.log("date", date, "time",time, "Integer of time",timeInt )
        return (<><div key={session.id} onClick={() => this.SessionClicked(session.id)}><strong>{session.student.name}:</strong> </div><p> {session.subject} with {session.instructor.name} on {date} at {timeInt >= 12 ? `${time}pm` : `${time}am`}</p></>)
})

        return (
            <div>
                <h2 style={{ color: "green" }}>Booked Sessions</h2>
                {session}
        

                {this.state.needForm ? <NewSession student={this.state.student} history={this.props.history} removeForm={this.handleClick} /> : <><h3 style={{ color: "red" }}>Students to be Scheduled</h3> {studentsInNeed.length === 0 ? <h4 style={{ color: "red" }}>There are currently no student to schedule</h4> : scheduleTheseStudents}</>}
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        sessions: state.sessions.sessions,
        students: state.students.students
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSessions: () => dispatch(fetchSessions())
    }
}
export default connect(mapPropsToState, mapDispatchToProps)(Sessions)