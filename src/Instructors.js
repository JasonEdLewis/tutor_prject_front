import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstructors, deleteInstructor, editInstructor } from './actions/instructorActions';
import './css/instructor.css';
import NewInstructorForm from './NewInstructorForm';
import EditInstructorForm from './components/EditInstructor';
import Emojicon from './components/emojicons';
import Spinner from './components/spinner'




class Instructors extends Component {

    state = {
        needNewForm: false,
        showOneInstructor: false,
        needEditform: false,

    }

    componentDidMount() {

        this.props.fetchInstructors()
    }

    deleteInstructor = (id) => {
        this.props.deleteInstructor(id);
        this.setState({ showOneInstructor: false })
    }

    addFormToPage = () => {

        this.setState({
            needNewForm: !this.state.needNewForm
        })

    }
    editIntructor = () => {

        this.setState({ needEditform: !this.state.needEditform })
    }

    showOneStatus = (id) => {
        this.setState({ showOneInstructor: !this.state.showOneInstructor, id })
        this.state.showOneInstructor && this.showOne()
    }
    showOne = () => {
        const instuct = this.props.instructors.find(inst => inst.id === this.state.id)

        return this.state.needEditform ? <EditInstructorForm id="edit-inst-form" instructor={instuct} removeForm={this.editIntructor} showAll={this.showOneStatus} /> :
            (<div className="instructor-card-div">
                <span onClick={() => this.deleteInstructor(instuct.id)} id="trash-icon"> 🗑 </span><span onClick={() => this.editIntructor(instuct)} id="pen"> 🖋 </span><br />
                <p onClick={() => this.showOneStatus(instuct.id)} id="single-instructor-name"><strong>{instuct.name}</strong></p>
                <p><strong>Subject: </strong>{instuct.subject}<br /></p>
                <p><strong>Specialty: </strong>{instuct.specialty}<br /></p>
                <p><strong>available hours:</strong>{instuct.hours}</p>
                <button onClick={() => { this.setState({ showOneInstructor: false }) }}>All Instructors</button>
            </div>)
    }
    render() {

        console.log("Instructors props: ", this.props.instructors)
        const { showOneInstructor, needEditform, needNewForm } = this.state
        debugger
        if (this.props.instructors) {
            var instructs = this.props.instructors.map(inst => <p onClick={() => this.showOneStatus(inst.id)} className="instructors"><strong> {inst.name} </strong><span> {Emojicon(inst.subject)}</span></p>)

        }

        return (
            <div className="instructors-card">
                {this.props.isloading || this.props.isEditing ? <Spinner animation="border" /> : null}
                {showOneInstructor ? this.showOne() : instructs}
                {needNewForm && <NewInstructorForm id="new-inst-form" removeForm={this.addFormToPage} />}
                {this.props.isEditing && this.state.showOneInstructor ? null : null}
                {!showOneInstructor && !needNewForm && <button onClick={this.addFormToPage}>Add New Instructor</button>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        instructors: state.instructors.instructors,
        isloading: state.instructors.isLoadingInst,
        isEditing: state.instructors.isEditing
    }
}
export default connect(mapStateToProps, { fetchInstructors, deleteInstructor, editInstructor })(Instructors)
