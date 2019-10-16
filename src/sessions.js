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
    }
    handleClick=(student)=>{
        // console.log(id)
        this.setState({student , needForm: !this.state.needForm})
    }

    render() {
        // console.log("Sessions props",this.props)

        const studentsInNeed = this.props.students.filter(student => student.sessions.length === 0 ) 

        const scheduleTheseStudents = studentsInNeed.map(student => <h3 ><strong>{student.name} </strong><button onClick={()=> this.handleClick(student)} >Book</button></h3>)

        const session = this.props.sessions.map(session => (<li key={session.id} onClick={()=> this.SessionClicked(session.id)}>{session.student.name} has {session.subject} with {session.instructor.name} on   {session.date.replace(/-/g, "/")}</li>))

        return (
            <div>
                <h3>Booked Sessions</h3>
                {session}
        
        <h3>Students to be Scheduled</h3>
        
        {this.state.needForm?  <NewSession student={this.state.student}/> : scheduleTheseStudents }
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
export default connect(mapPropsToState, { fetchSessions } )(Sessions)