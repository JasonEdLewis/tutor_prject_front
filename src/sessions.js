import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from './actions/sessionActions';
import NewSession from './NewSession';

class Sessions extends Component {
componentDidMount() {
    this.props.fetchSessions()
}

    state = {
        student: {},
        needForm: false,
        showOneSession: false,
    }
    handleClick=(student)=>{
        // console.log(id)
        this.setState({student , needForm: !this.state.needForm})
    }
    SessionClicked=(e)=>{
        this.setState({showOneSession : !this.state.showOneSession})
    }

    render() {
        // console.log("Sessions props",this.props)

        const studentsInNeed = this.props.students.filter(student => student.sessions.length === 0 ) 

        const scheduleTheseStudents = studentsInNeed.map(student => <h3 ><strong>{student.name} </strong><button onClick={()=> this.handleClick(student)} >Book</button></h3>)

        const session = this.props.sessions.map(session => (<><ul key={session.id} onClick={()=> this.SessionClicked(session.id)}><li ><strong>{session.student.name}: </strong> <li>has {session.subject} </li> with {session.instructor.name} on  {session.date.replace(/-/g, "/")}</li></ul></>))

        return (
            <div>
                <h2 style={{color:"green"}}>Booked Sessions</h2>
                {session}
        
        {this.state.needForm?  <NewSession student={this.state.student} history={this.props.history} removeForm={this.handleClick}/> : <><h3 style={{color:"red"}}>Students to be Scheduled</h3> {studentsInNeed.length === 0 ? <h4 style={{color:"red"}}>There are currently no student to schedule</h4> :scheduleTheseStudents  }</> }
            </div>
        )
    }
}

const mapPropsToState=(state)=>{
    return {
        sessions: state.sessions.sessions,
        students: state.students.students
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchSessions:()=> dispatch(fetchSessions())
    }
}
export default connect(mapPropsToState, mapDispatchToProps )(Sessions)