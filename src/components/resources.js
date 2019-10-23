import React from 'react';
import '../resources.css';
import Headers from './headers'
import Dropdown from './dropdown';



export default function resources(props) {
    // debugger
    console.log("resources props:",props)
    const { history }= props
    return (
        <>
        <div className="header-for-resources" >
        <Headers history={history} />
        </div>
        <div className="resources">
            <div className="main-headers">
           
            <Dropdown history={history}/>
            </div>
            <div className=" resources-header">
            <h1>Welcome to the Resources Page</h1>
            <p><h4>Here is where you will find all of the resources you need for students, administrators and tutors alike.</h4></p>
            </div>
            <div className="stu-resources">
                <h1>Student Resources</h1>
            <h3><a href="https://www.google.com/search?sxsrf=ACYBGNQW8gKhYpPP3HEZa7UwoxQTXtu-cA%3A1571620744535&source=hp&ei=iAetXaSbHcWy5gLduqGAAw&q=8th+grade+math+worksheets+pdf&oq=8th+grade+math+&gs_l=psy-ab.3.4.0l10.2470.5874..8368...0.0..0.248.1156.14j0j1......0....1..gws-wiz.......0i67.wKnTeCGX6Mc">8th Grade Math</a></h3>
            </div>
            <div className="inst-resources">
                <h1>Instructor Resources</h1>
                <h2><a href="https://drive.google.com/file/d/0B_ZbftnTEqRSQm4yOHczWG1RaWs/view?usp=sharing">High School Handbook</a></h2>
                <h2><a href="https://drive.google.com/file/d/0B_ZbftnTEqRSMlZvUEVRdEIzdlE/view?usp=sharing">Tutor Notes</a></h2>
                <h2><a href="https://drive.google.com/file/d/0B_ZbftnTEqRSc0pQU0lYY0ppZ3M/view?usp=sharing">Attendance Forms</a></h2>
            </div>
            <div>
       
        </div>
        </div>
        </>
        
    )
}
