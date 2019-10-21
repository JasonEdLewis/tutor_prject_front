import React, { Component } from 'react';
import Instructors from '../Instructors';
import Students from '../students';
import Sessions from '../sessions';
import { connect } from 'react-redux';
import { getProfileFetch } from '../actions/adminActions';
import AdminShow from '../components/adminShow';
import '../App.css';
import Nav from '../components/nav'


class Profile extends Component {



componentDidMount() {
    this.props.getProfileFetch()
}

    SessionClicked = (session) => {
        console.log(session)
        this.setState({

            // diplay: "sessions" stretch goal
        })
    }


    render() {
        console.log("profile props",this.props)
        return (
            <div className="Admin-container">
                <div className="nav">
                    <Nav history={this.props.history}/>
                </div>
                <div className="students">
                    <h1>Students</h1>
                    <Students handleSubmit={this.handleSubmit} handleChange={this.handleChange}  history={this.props.history}/>
                </div >

                <div className="admin">
                    <AdminShow info={this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={null}/>
                    <br/>
                    <Sessions history={this.props.history}/>
                </div>

                <div className="instructors">
                    <h1>Instructors</h1>
                    <Instructors history={this.props.history} />
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sessions: state.sessions.sessions,
        students: state.students.students,
        instructors: state.instructors.instructors,
        admin: state.login.currentAdmin
    }
}



export default connect(mapStateToProps, { getProfileFetch } )(Profile)

/*
const keys =["name","school_id","reason","date","hours","school","grade","sped","counselor_info","guardian","address","home_no","cell","email", "subject"]

*/