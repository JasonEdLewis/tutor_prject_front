import React, { Component } from 'react';
import '../src/App.css'

class NewStudentForm extends Component {


    state = {

        students:[]
    }

    render() {

       
        console.log(this.props)
        return (
            <div>
                <h1>New Student Form</h1>
                <h3>Student Info</h3>
          <div>
              <form>
                <input placeholder="name" className="student-input"/>
                <input placeholder="SchoolId"  className="student-input"/>
                <input placeholder="reason"  className="student-input"/>
                <input type="datetime" placeholder="Start date" className="student-input" />
                <input type="date" placeholder="End date"  className="student-input"/>
                <input type="number" min="0"  placeholder=" hours"  className="student-input"/>
                <input placeholder="school"  className="student-input"/>
                <input type="boolean" placeholder="Special Ed"  className="student-input"/>
                <input placeholder="Counselor Info" className="student-input" />
                <br />
                <h3>Guardian Info</h3>
                <input placeholder="guardian"  className="student-input"/>
                <input placeholder="address"  className="student-input"/>
                <input type="tel" placeholder="Cell Phone"  className="student-input"/>
                <input type="tel" placeholder="Home Phone"  className="student-input"/>
                <input type="email" placeholder="email" className="student-input" />
                <br />
                <br />
                <input type="submit" className="student-input"/>
            </form>
        </div>
        <div>
                    <br />
                    <br />
                    <br />
                    <button onClick={() => this.props.history.push("/admin")}>Back</button>
         </div>
            </div>
        )
    }
}
export default NewStudentForm


//          address home_no cell email