import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions, deleteSession } from './actions/sessionActions';
import NewSession from './NewSession';
import './css/sessions.css';
import EditSession from './components/sessionEditForm';
import emojicons from './components/emojicons';
import Spinner from './components/spinner'


class Sessions extends Component {
    componentDidMount() {
        this.props.fetchSessions()
    }

    state = {
        student: {},
        session: {},
        needForm: false,
        showOneSession: false,
        active: true,
        sessionId: 0,
        editSessionForm: false,
    }
    handleClick = (student, session) => {
        // console.log(id)
        this.setState({ student, needForm: !this.state.needForm, editSessionForm: false, showOneSession: false })
    }


    doWeNeedEditForm = () => {
        this.setState({ editSessionForm: !this.state.editSessionForm })
    }

    deleteSession = (id) => {
        this.props.deleteSession(id);
        debugger
        !this.props.isLoading && this.setState({ editSessionForm: false })
    }
    toggleOneSession = (id) => {
        this.setState({ showOneSession: !this.state.showOneSession, sessionId: id })
    }
    timeAndDate = (sess) => {

        if (!!sess) {
            const theTime = sess.time.replace(/-/g, "/").slice(11, 16)
            const date = sess.date.replace(/-/g, "/").split("T")[0]
            const timeInt = parseInt(theTime)
            const newTime = `${parseInt(theTime.split(":")[0]) % 12}:${theTime.split(":")[1]}`
            return date ? { newTime, date } : newTime
        }
        else {
            this.setState({ showOneSession: false })
        }
    }
    singleSession = (id) => {

        const session = this.props.sessions.find(sess => sess.id === id)
        if (!!session) {
            const time = this.timeAndDate(session)
            const emoji = emojicons(session.subject)
            const ampm = parseInt(time.newTime)
            const raw  = time.date.split("/")
            const sortedDate = `${raw[1]}/${raw[2]}/${raw[0]}`
            return (<div className="one-session"><div
                onClick={() => this.toggleOneSession(session.id)}
            ><p key={session.id} >
                    <p>{emoji}</p>
                    <strong>Student:
                </strong> {session.student.name}</p>
                <p>
                    <strong>Subject: </strong>{session.subject}</p>
                <p><strong>Instructor:</strong> {session.instructor.name}</p>
                <strong>Date: </strong>{sortedDate} <br />
                <strong>Time: </strong>{ampm > 7 ? `${time.newTime}am ` : `${time.newTime}pm ` }
                <p><strong>Location:</strong> {
                    session.location}</p>
            </div>
                {this.state.editSessionForm ? <></> : <><span onClick={() => this.doWeNeedEditForm()} id="edit-sess">🖋</span> <br /><span onClick={() => this.deleteSession(session.id)} id="delete-sess">🗑</span> <br /></>}
                {this.state.editSessionForm ? <EditSession session={session} student={session.student} doWeNeedEditForm={this.doWeNeedEditForm} /> : <></>}</div>)
        }
        else {
            this.setState({ showOneSession: false })
        }
    }
    activatePanels = () => {
        console.log(this.state.active)
        if (this.state.active) {
            return <div class="panel"> <p>Lorem ipsum...</p> </div>
        }
    }


    render() {
        console.log("Sessions props", this.props.isLoading)
        const studentsInNeed = this.props.students.filter(student => {

            return (!student.sessions || student.sessions.length === 0 && student)



        })

        const scheduleTheseStudents = studentsInNeed.map(student => <h3 ><strong>{student.name} </strong><button onClick={() => this.handleClick(student)} >Book</button></h3>)

        const theSessions = this.props.sessions.map(session => {
            return (<div onClick={() => this.toggleOneSession(session.id)} className="each-session"><span>{emojicons(session.subject)}</span><br /><div key={session.id} ><strong>Student: </strong> {session.student.name}</div>
                <div > <strong>Subject: </strong>{session.subject}</div> <div><strong>Instructor:</strong> {session.instructor.name}</div><br />
            </div>)
        })

        return (
            <div>
                <h2 style={{ color: "green", textShadow: ".1vw .2vh #bcc0c4" }}>Booked Sessions</h2>
                <h6 style={{ color: "#3808BD" }}>Click for more details</h6>
                {this.state.showOneSession ? this.singleSession(this.state.sessionId) : theSessions}
                {this.props.isLoading && <Spinner />}

                {this.state.needForm ? <NewSession student={this.state.student} history={this.props.history} removeForm={this.handleClick} /> : <><h3 style={{ color: "red" }}>Students to be Scheduled</h3> {studentsInNeed.length === 0 ? <h4 style={{ color: "red" }}>There are currently no students to be Scheduled</h4> : scheduleTheseStudents}</>}
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        sessions: state.sessions.sessions,
        students: state.students.students,
        names: state.students.studentsKeyName,
        isLoading: state.sessions.isLoading
    }
}

export default connect(mapPropsToState, { fetchSessions, deleteSession })(Sessions)