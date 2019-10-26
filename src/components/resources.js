import React, { Component } from 'react';
import '../resources.css';
import Headers from './headers'
import Dropdown from './dropdown';



export default class Resources extends Component {
    // debugger

    state = {

    }

    render() {
        console.log("resources props:", this.props)
        const { history } = this.props
        return (
            <>
                <div className="header-for-resources" >
                    <Headers history={history} />
                </div>
                <div className="resources">
                    <div className="main-headers">

                        <Dropdown history={history} />
                    </div>
                    <div className=" resources-header">
                        <h1>Welcome to the Resources Page</h1>
                        <p><h3>Here is where you will find all of the resources you need for students, administrators and tutors alike.</h3></p>
                    </div>
                    <div className="stu-resources">
                        <h1>Student Resources</h1>
                        <h2 style={{ color: "#1d06b8" }}>💥 New Resources 💥</h2>
                        <h3><a href="https://www.google.com/search?sxsrf=ACYBGNQW8gKhYpPP3HEZa7UwoxQTXtu-cA%3A1571620744535&source=hp&ei=iAetXaSbHcWy5gLduqGAAw&q=8th+grade+math+worksheets+pdf&oq=8th+grade+math+&gs_l=psy-ab.3.4.0l10.2470.5874..8368...0.0..0.248.1156.14j0j1......0....1..gws-wiz.......0i67.wKnTeCGX6Mc">8th Grade Math</a></h3>
                        <h2>Select By Grade</h2>
                        <select name="grade">
                            <option value="">---</option>
                            <option value="1">1st Grade</option>
                            <option value="2">2nd Grade</option>
                            <option value="3">3rd Grade</option>
                            <option value="4">4th Grade</option>
                            <option value="5">5th Grade</option>
                            <option value="6">6th Grade</option>
                            <option value="7">7th Grade</option>
                            <option value="8">8th Grade</option>
                            <option value="9">9th Grade</option>
                            <option value="10">10th Grade</option>
                            <option value="11">11th Grade</option>

                        </select>
                        <h2>Select By Subject</h2>
                        <select name="subject">
                            <option value="">---</option>
                            <option value="math">Math</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="health">Health</option>
                            <option value="Social Studies">5th Grade</option>
                            <option value="art">Art</option>
                            <option value="spanish">7th Grade</option>
                            <option value="french">8th Grade</option>
                            <option value="mandarin">9th Grade</option>
                            <option value="Physical Education">10th Grade</option>


                        </select>
                    </div>
                    <div className="inst-resources">
                        <h1>Instructor Resources</h1>
                        <h2><a href="https://drive.google.com/file/d/0B_ZbftnTEqRSQm4yOHczWG1RaWs/view?usp=sharing" style={{ color: "grey" }}>High School Handbook</a></h2>
                        <h2><a href="https://drive.google.com/file/d/0B_ZbftnTEqRSMlZvUEVRdEIzdlE/view?usp=sharing" style={{ color: "grey" }}>Tutor Notes</a></h2>
                        <h2><a href="https://drive.google.com/file/d/0B_ZbftnTEqRSc0pQU0lYY0ppZ3M/view?usp=sharing" style={{ color: "grey" }}>Attendance Forms</a></h2>
                    </div>
                    <div>

                    </div>
                </div>
            </>

        )
    }
}
