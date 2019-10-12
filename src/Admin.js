import React, { Component } from 'react';
import Instructors from './Instructors';
import NewInstructor from './NewInstructorForm';
import newStudentForm from './NewStudentForm';
import { Fragment } from 'react';
import AdminShow from './components/adminShow';


class Admin extends Component {

    state = {
        sessions: [],
        display: "",
        

    }

    componentDidMount() {
      
        fetch('http://localhost:3000/sessions')
            .then(resp => resp.json())
            .then(sessions => this.setState({ sessions: sessions }))
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            diplay:"new Student"
        })
        var rawInput = this.state.studentInfo.split(/\n/).filter(entry => entry !== "" && entry !== " ") 
        var studentObj = rawInput.filter((attribute, index) => index % 2 === 1 )
        this.props.history.push('/newStudentForm')

        
        console.log(studentObj)

//         fetch('http://localhost:3000/students',{
//         method: 'POST', 
//         headers:{
//                 'content-type' : 'application/json'
//     }, 
//     body : JSON.stringify(newStudent)
// })

    }

SessionClicked=(session)=>{
    this.setState({
        diplay: "sessions"
    })
}

    

    render() {
      
        const sessions = this.state.sessions.map(session => (<li key={session.id} onClick={(e)=> console.log(session.id)}>{session.student.name} has {session.subject} with {session.instructor.name} on   {session.date.replace(/-/g,"/")}</li>))
        
        return (
            <div>
               <AdminShow/>
               {sessions}
            </div>
        )
    }
}
export default Admin