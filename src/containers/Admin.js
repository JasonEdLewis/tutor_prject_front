import React, { Component } from 'react';
import Instructors from '../Instructors';
import Students from '../students';
import { connect } from 'react-redux';
import { fetchSessions } from '../actions/sessionActions';
import AdminShow from '../components/adminShow';
import '../App.css';


class Admin extends Component {

    state = {
        sessions: [],
        display: "",
        studentInfo: "",
        newStudent: {},


    }

    componentDidMount() {
        this.props.fetchSessions()
        // fetch('http://localhost:3000/sessions')
        //     .then(resp => resp.json())
        //     .then(sessions => this.setState({ sessions: sessions }))
    }


    // var newStudentArr = rawInput.filter((attribute, index) => index % 2 === 0)
    //if odd elements contains (includes) ":" index - 1 = null splice(index -1, 0, "null")

    // const newStudentObj = this.makeNewStudentObj(newStudentArr)

    // this.setState({ studentInfo: '' })

    // console.log("Resulting student object:", newStudentObj)

    //         fetch('http://localhost:3000/students',{
    //         method: 'POST', 
    //         headers:{
    //                 'content-type' : 'application/json'
    //     }, 
    //     body : JSON.stringify(newStudent)
    // })




    SessionClicked = (session) => {
        this.setState({
            diplay: "sessions"
        })
    }



    render() {
        // console.log("Admin Props:", this.props)

        const session = this.props.sessions.sessions.map(session => (<li key={session.id} onClick={(e) => console.log(session.id)}>{session.student.name} has {session.subject} with {session.instructor.name} on   {session.date.replace(/-/g, "/")}</li>))

        return (
            <div className="Admin-container">

                <div className="students">
                    <h1>Students</h1>
                    <Students handleSubmit={this.handleSubmit} handleChange={this.handleChange} studentState={this.state.studentInfo} history={this.props.history}/>
                </div >

                <div className="admin">
                    <AdminShow info={this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} studentState={this.state.studentInfo} />
                    {session}
                    <br/>
                    <h3>To Be Scheduled</h3>
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
        sessions: state.sessions
    }
}


export default connect(mapStateToProps, { fetchSessions })(Admin)

/*
const keys =["name","school_id","reason","date","hours","school","grade","sped","counselor_info","guardian","address","home_no","cell","email"]

*/