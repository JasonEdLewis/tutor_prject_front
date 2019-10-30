import React, { Component } from 'react';
import Instructors from '../Instructors';
import Students from '../students';
import Sessions from '../sessions';
import { connect } from 'react-redux';
// import { getProfileFetch } from '../actions/adminActions';
import Headers from '../components/headers';
import '../App.css';
import Dropdown from '../components/dropdown'


class Profile extends Component {


    componentDidMount() {
        // this.props.getProfileFetch()
    }

    SessionClicked = (session) => {
        console.log(session)
        this.setState({

            // diplay: "sessions" stretch goal
        })
    }


    render() {
        console.log("Profile props", this.props)
        const { admin, history } = this.props
        return (
            <div className="Admin-container">

                <Dropdown history={history} className="dropdown" />
                <Headers propsFromProfile={this.props} loggedIn={true} />
                <div className="students">
                    <h1>Students</h1>
                    <Students handleSubmit={this.handleSubmit} handleChange={this.handleChange} history={history} />
                    <> <p className="booked">Booked: ✅   |  Needs Booking:❗️</p></>
                </div >

                <div className="admin">
                    <h1>WELCOME BACK {admin.username}</h1>
                    <Sessions history={history} />
                </div>

                <div className="instructors">
                    <h1>Instructors</h1>
                    <Instructors history={history} />
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
        admin: state.admin.currentAdmin
    }
}



export default connect(mapStateToProps, null)(Profile)

/*
const keys =["name","school_id","reason","date","hours","school","grade","sped","counselor_info","guardian","address","home_no","cell","email", "subject"]

*/