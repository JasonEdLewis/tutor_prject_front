import React, { Component } from 'react';
import Instructors from '../Instructors';
import NewInstructor from '../NewInstructorForm';
import newStudentForm from '../NewStudentForm';
import { Fragment } from 'react';
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

        fetch('http://localhost:3000/sessions')
            .then(resp => resp.json())
            .then(sessions => this.setState({ sessions: sessions }))
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    makeNewStudentObj = (arr) => {
        var newStudObj ={}
        const keys = ["name","school_id","reason","date","hours","school","grade","sped","counselor_info","guardian","address","home_no","cell","email"]
        for(var i = 0; i< arr.length; i++){
            newStudObj[keys[i]] = arr[i]
            debugger
        }
        return newStudObj
    }
    handleSubmit = (e) => {

        e.preventDefault()
        // this.props.history.push('/newStudent')
        
        var rawInput = this.state.studentInfo.split(/\n/).filter(entry => entry !== "" && entry !== " ")
        var newStudentArr = rawInput.filter((attribute, index) => index % 2 === 1)
              
        const newStudentObj = this.makeNewStudentObj(newStudentArr)

        this.setState({studentInfo: '' })

        console.log("Resulting student object:", newStudentObj)

        //         fetch('http://localhost:3000/students',{
        //         method: 'POST', 
        //         headers:{
        //                 'content-type' : 'application/json'
        //     }, 
        //     body : JSON.stringify(newStudent)
        // })

    }

    SessionClicked = (session) => {
        this.setState({
            diplay: "sessions"
        })
    }



    render() {
        console.log("Student info:", this.state.studentInfo)
        const sessions = this.state.sessions.map(session => (<li key={session.id} onClick={(e) => console.log(session.id)}>{session.student.name} has {session.subject} with {session.instructor.name} on   {session.date.replace(/-/g, "/")}</li>))

        return (
            <div>
                <div className="students-left">
                <AdminShow info={this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} studentState={this.state.studentInfo} />
                </div>
                <div>

                </div>
                <div>

                </div>

                
                {sessions}
            </div>
        )
    }
}
export default Admin

/*
const keys =["name","school_id","reason","date","hours","school","grade","sped","counselor_info","guardian","address","home_no","cell","email"]

*/