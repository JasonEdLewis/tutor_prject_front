import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions, deleteSession } from './actions/sessionActions';
import NewSession from './NewSession';
import './css/sessions.css';
import EditSession from './components/sessionEditForm'
import emojicons from './components/emojicons'


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
        this.setState({ editSessionForm: false })
    }
    toggleOneSession = (id) => {
        this.setState({ showOneSession: !this.state.showOneSession, sessionId: id })
    }
    timeAndDate = (sess) => {
        const theTime = sess.time.replace(/-/g, "/").slice(11, 16)
        const date = sess.date.replace(/-/g, "/").split("T")[0]
        const timeInt = parseInt(theTime)
        const newTime = `${parseInt(theTime.split(":")[0]) % 12}:${theTime.split(":")[1]}`
        return { newTime, date }
    }
    singleSession = (id) => {
        const session = this.props.sessions.find(sess => sess.id === id)
        const time = this.timeAndDate(session)
        const emoji = emojicons(session.subject)
        return (<div className="one-session"><div
            onClick={() => this.toggleOneSession(session.id)}
        ><p key={session.id} >
                <p>{emoji}</p>
                <strong>Student:
                </strong> {session.student.name}</p>
            <p>
                <strong>Subject: </strong>{session.subject}</p>
            <p><strong>Instructor:</strong> {session.instructor.name}</p>
            <strong>Date: </strong>{time.date} <br />
            <strong>Time: </strong>{time.newTime}
            <p><strong>Location:</strong> {
                session.location}</p>
        </div>
            {this.state.editSessionForm ? <></> : <><span onClick={() => this.doWeNeedEditForm()} id="edit-sess">🖋</span> <br /><span onClick={() => this.deleteSession(session.id)} id="delete-sess">🗑</span> <br /></>}
            {this.state.editSessionForm ? <EditSession session={session} student={session.student} doWeNeedEditForm={this.doWeNeedEditForm} /> : <></>}</div>)
    }
    activatePanels = () => {
        console.log(this.state.active)
        if (this.state.active) {
            return <div class="panel"> <p>Lorem ipsum...</p> </div>
        }
    }


    render() {

       const studentsInNeed = this.props.students.filter(student => {
        
       return (!student.sessions || student.sessions.length === 0   && student)
        
          
            
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


                {this.state.needForm ? <NewSession student={this.state.student} history={this.props.history} removeForm={this.handleClick} /> : <><h3 style={{ color: "red" }}>Students to be Scheduled</h3> {studentsInNeed.length === 0 ? <h4 style={{ color: "red" }}>There are currently no students to be Scheduled</h4> : scheduleTheseStudents}</>}
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        sessions: state.sessions.sessions,
        students: state.students.students,
        names: state.students.studentsKeyName
    }
}

export default connect(mapPropsToState, { fetchSessions, deleteSession })(Sessions)