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


    render() {
        console.log("Profile props", this.props)
        const { admin, history } = this.props
        return (
            <div className="Admin-container">

                <Dropdown history={history} className="dropdown" />
                <Headers propsFromProfile={this.props} loggedIn={true} />
                <div className="students">
                    <h1 style={{textShadow: "2px 1px #006600"}}>Students</h1>
                    <> <p className="booked" ><strong style={{color: '#006600', textShadow: ".05vh .05vh #717375"}}>Booked:✅  </strong>  |  <strong style={{color:'#b30000', textShadow: ".1vw .2vh #bcc0c4", fontSize:"1.35em"}}>BOOK NOW:❗️</strong></p></>
                    <br/>
                    <Students handleSubmit={this.handleSubmit} handleChange={this.handleChange} history={history} />
                  
                </div >

                <div className="admin">
                    <h1>WELCOME BACK {admin.currentAdmin.username}</h1>
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
        admin: state.admin,
        login: state.login
    }
}



export default connect(mapStateToProps, null)(Profile)

/*
const keys =["name","school_id","reason","date","hours","school","grade","sped","counselor_info","guardian","address","home_no","cell","email", "subject"]

*/