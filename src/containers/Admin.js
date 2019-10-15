import React, { Component } from 'react';
import Instructors from '../Instructors';
import Students from '../students';
import Sessions from '../sessions';
import { connect } from 'react-redux';

import AdminShow from '../components/adminShow';
import '../App.css';


class Admin extends Component {

    state = {
        sessions: [],
        display: "",
       
       
    }

    SessionClicked = (session) => {
        console.log(session)
        this.setState({


            // diplay: "sessions" stretch goal
        })
    }


    render() {
        // console.log("Admin Props:", this.props)

        const session = this.props.sessions.map(session => (<li key={session.id} onClick={()=> this.SessionClicked(session.id)}>{session.student.name} has {session.subject} with {session.instructor.name} on   {session.date.replace(/-/g, "/")}</li>))
        const studentsInNeed = this.props.students.filter(student => student.sessions.length === 0 ) 
        const scheduleTheseStudents = studentsInNeed.map(student => <h3 ><strong>{student.name} </strong><button onClick={()=> console.log(student.id)} >Book</button></h3>)
        

        

        return (
            <div className="Admin-container">

                <div className="students">
                    <h1>Students</h1>
                    <Students handleSubmit={this.handleSubmit} handleChange={this.handleChange} studentState={this.state.studentInfo} history={this.props.history}/>
                </div >

                <div className="admin">
                    <AdminShow info={this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={null}/>
                    {session}

                    <br/>
                    <h3>Students to be Scheduled</h3>
                    {scheduleTheseStudents}
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