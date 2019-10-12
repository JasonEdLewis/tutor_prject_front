import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstructors, deleteInstructor } from './actions/instructorActions';
import './App.css';


class Instructors extends Component {

    componentDidMount() {

        this.props.fetchInstructors()
    }

    deleteInstructor = (instruc) => {
        this.props.deleteInstructor(instruc)
    }

    render() {
        // debugger
        console.log("Instructors props: ", this.props)
        const instructors = this.props.instructors.map(inst => <p>{inst.name} teaches {inst.subject}  <span onClick={() => this.deleteInstructor(inst)} className="x"> ❌ </span>  </p>)
        return (
            <div>

                <div>

                </div>
                {instructors}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { instructors: state.instructors.instructors }
}
export default connect(mapStateToProps, { fetchInstructors, deleteInstructor })(Instructors)
