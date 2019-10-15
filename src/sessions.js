import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from './actions/sessionActions';
import NewSession from './NewSession';

class Sessions extends Component {
componentDidMount() {
    this.props.fetchSessions()
}


    render() {
        // console.log("Session.js props:", this.props)
        return (
            <div>
                
                <NewSession/>
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