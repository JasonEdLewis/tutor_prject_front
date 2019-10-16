import React, { Component } from 'react';
import Instructors from '../Instructors';
import Students from '../students';
import Sessions from '../sessions';
import { connect } from 'react-redux';

import AdminShow from '../components/adminShow';
import '../App.css';


class Admin extends Component {

    state = {
        
       
    }

    SessionClicked = (session) => {
        console.log(session)
        this.setState({


            // diplay: "sessions" stretch goal
        })
    }


    render() {
        // console.log("Admin Props:", this.props)

        
        
        

        

        return (
            <div className="Admin-container">

                <div className="students">
                    <h1>Students</h1>
                    <Students handleSubmit={this.handleSubmit} handleChange={this.handleChange} studentState={this.state.studentInfo} history={this.props.history}/>
                </div >

                <div className="admin">
                    <AdminShow info={this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={null}/>
                    
                   

                    <br/>
                    {/* <h3>Students to be Scheduled</h3> */}
                    {/* {scheduleTheseStudents} */}
                    <Sessions/>
                    
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
        instructors: state.instructors.instructors
    }
}


export default connect(mapStateToProps)(Admin)

/*
const keys =["name","school_id","reason","date","hours","school","grade","sped","counselor_info","guardian","address","home_no","cell","email", "subject"]

*/