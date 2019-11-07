import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstructors, deleteInstructor, editInstructor } from './actions/instructorActions';
import './css/instructor.css';
import NewInstructorForm from './NewInstructorForm';
import EditInstructorForm from './components/EditInstructor';
import Emojicon from './components/emojicons'



class Instructors extends Component {

    state = {
        needNewForm: false,
        showOneInstructor: false,
        needEditform: false
    }

    componentDidMount() {

        this.props.fetchInstructors()
    }

    deleteInstructor = (id) => {
        this.props.deleteInstructor(id)
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
        return this.state.needEditform ? <EditInstructorForm id="edit-inst-form" instructor={instuct} removeForm={this.addFormToPage} /> :
            (<div className="instructors-card-div">
                <span onClick={() => this.deleteInstructor(instuct.id)} id="trash-icon"> 🗑 </span><span onClick={() => this.editIntructor(instuct)} id="pen"> 🖋 </span><br />
                <p onClick={() => this.showOneStatus(instuct.id)} id="single-instructor-name"><strong>{instuct.name}</strong></p>
                <p><strong>Subject: </strong>{instuct.subject}<br /></p><p><strong>available hours:</strong>{instuct.hours}</p> </div>)
    }
    render() {
        // debugger
        // console.log("Instructors props: ", this.props)
        const { instructors, history } = this.props
        const { showOneInstructor, needEditform, needNewForm } = this.state
        const instructs = instructors.map(inst => <p onClick={() => this.showOneStatus(inst.id)} className="instructors"><strong> {inst.name} </strong><span> {Emojicon(inst.subject)}</span></p>)

        return (
            <div>

                {showOneInstructor ? this.showOne() : instructs}
                {needNewForm && <NewInstructorForm id="new-inst-form" removeForm={this.addFormToPage} />}
                {!showOneInstructor && !needNewForm && <button onClick={this.addFormToPage}>Add New Instructor</button>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { instructors: state.instructors.instructors }
}
export default connect(mapStateToProps, { fetchInstructors, deleteInstructor, editInstructor })(Instructors)
