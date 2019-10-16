import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstructors, deleteInstructor } from './actions/instructorActions';
import './App.css';
import NewInstructorForm from './NewInstructorForm'



class Instructors extends Component {

    state ={
        needForm: false,
    }

    componentDidMount() {

        this.props.fetchInstructors()
    }

    deleteInstructor = (id) => {
        this.props.deleteInstructor(id)
    }

    addFormToPage=()=>{
        this.setState({
            needForm: !this.state.needForm
        })
        
    }
    render() {
        // debugger
        // console.log("Instructors props: ", this.props)
        const { instructors, history}= this.props
        const instructor = instructors.map(inst => <p>{inst.name}/{inst.subject}  <span onClick={() => this.deleteInstructor(inst.id)} className="x"> ❌ </span>  </p>)
        return (
            <div>
                {instructor}
                {this.state.needForm ? <NewInstructorForm removeForm={this.addFormToPage}/> : <button onClick={this.addFormToPage}>Add New Instructor</button> }
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
