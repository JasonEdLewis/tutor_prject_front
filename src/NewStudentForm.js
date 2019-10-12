import React, { Component } from 'react';

 class NewStudentForm extends Component {
    render() {

        console.log(this.props)
        return (
            <div>
                <h1>New Student Form</h1>
                <h3>Student Info</h3>
                <input placeholder="name"/>
                <input placeholder="SchoolId"/>
                <input placeholder="reason"/>
                <input type="datetime" placeholder="Start date"/>
                <input type="date" placeholder="End date"/>
                <input type="number" min="0" max="10" placeholder="hours"/>
                <input placeholder="school"/>
                <input type="boolean" placeholder="Special Ed"/>
                <input placeholder="Counselor Info"/>
                <br/>
                <h3>Guardian Info</h3>
                <input placeholder="guardian"/>
                <input placeholder="address"/>
                <input type="tel" placeholder="Cell Phone"/>
                <input placeholder="Home Phone"/>
                <input  type="email" placeholder= "email" />
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={()=> this.props.history.push("/admin")}>Back</button>
                </div>
            </div>
        )
    }
}
export default NewStudentForm


//          address home_no cell email