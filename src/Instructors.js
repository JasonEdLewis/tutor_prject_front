import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstructors, deleteInstructor } from './actions/instructorActions';
import './App.css';



class Instructors extends Component {

    componentDidMount() {

        this.props.fetchInstructors()
    }

    deleteInstructor = (id) => {
        this.props.deleteInstructor(id)
    }

    render() {
        // debugger
        // console.log("Instructors props: ", this.props)
        const { instructors, history}= this.props
        const instructor = instructors.map(inst => <p>{inst.name}/{inst.subject}  <span onClick={() => this.deleteInstructor(inst.id)} className="x"> ❌ </span>  </p>)
        return (
            <div>
                {instructor}
                <button onClick={()=> history.push('/NewInstructor')}>Add New Instructor</button>
                <div>
                   
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { instructors: state.instructors.instructors }
}
export default connect(mapStateToProps, { fetchInstructors, deleteInstructor })(Instructors)
