import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from './actions/sessionActions';
import NewSession from './NewSession';

class Sessions extends Component {
componentDidMount() {
    this.props.fetchSessions()
}

    state = {
        needForm: true,
    }

    render() {
        const session = this.props.sessions.map(session => (<li key={session.id} onClick={()=> this.SessionClicked(session.id)}>{session.student.name} has {session.subject} with {session.instructor.name} on   {session.date.replace(/-/g, "/")}</li>))
        return (
            <div>
                {session}
        {this.state.needForm?  <NewSession/> : <></>}
            </div>
        )
    }
}

const mapPropsToState=(state)=>{
    return {
        sessions: state.sessions.sessions
    }
}
export default connect(mapPropsToState, { fetchSessions } )(Sessions)