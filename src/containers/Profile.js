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
    state = {
        username: this.props.admin.currentAdmin.username,
        admin_id: this.props.admin.currentAdmin.id
    }
    adminEmoji =()=>{
        
        switch(this.state.username){
            case "Jason":
                return "👨🏽‍💼";
            case "Lanee":
                return  "👩🏾‍💼";
            default:
                return "👨🏼‍💼";
        }
    }

    render() {
        const { admin, history,sessions, students } = this.props
        
        return (
            <div className="Admin-container">

                <Dropdown history={history} className="dropdown" />
                <Headers propsFromProfile={this.props} loggedIn={true} />
                {/* STUDENTS */}

                <div className="students">
                    <h2 className="students-heading">Students</h2>
                    <div class="line-over-student">____________________</div>
                    <br/>
                    <span className="student-emojicon" > 👨🏽‍💻 </span>
                    <div class="line-under-student">_____________</div>
                     <div className="booked" ><strong style={{ color: '#006600', textShadow: ".05vh .05vh #717375" }}>Booked:<span id="number-booked">{sessions.length}</span > <span style={{fontSize: "1.5rem"}}>✅</span>  </strong> <span className="pipe">|</span><strong style={{ color: '#b30000', textShadow: ".1vw .2vh #bcc0c4",  }}> LEFT:<span id="number-left-to-book">{students.length - sessions.length}</span></strong>❗️</div>
                  
                  
                   
                    <Students handleSubmit={this.handleSubmit} handleChange={this.handleChange} history={history} />
                </div >

                {/* ADMIN */}
                <div className="admin">
                <h1>WELCOME BACK {this.state.username}</h1>
                <h3 className="admin-username"></h3>
                <div class="line-over-admin">______________________</div>
                <span className="admin-emojicon" >{this.adminEmoji()} </span>
               
               
                <br/> <div class="line-under-admin">_____________</div>

                        {/* SESSIONS  */}
                    <Sessions history={history} />
                </div>
                        {/* INSTRUCTORS */}
                <div className="instructors-div">
                    <h4 className="instructors-heading">Instructors</h4>
                    <div class="line-over-instructor">__________________</div>
                    <br/>
                    <span className="teacher-emojicon" >👩🏻‍🏫</span>
                    <div class="line-under-instructor">_____________</div>
                    <div className="subject-legend"><p>Science:🧪 English:📕 Music: 𝄢 Math:🤓 History:🌍</p>
                    </div>
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
