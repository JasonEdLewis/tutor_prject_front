import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstructors, deleteInstructor } from './actions/instructorActions';
import './css/instructor.css';
import NewInstructorForm from './NewInstructorForm';
import Emojicon from './components/emojicons'



class Instructors extends Component {

    state = {
        needForm: false,
        showOneInstructor:false,
        id : ""
    }

    componentDidMount() {

        this.props.fetchInstructors()
    }

    deleteInstructor = (id) => {
        this.props.deleteInstructor(id)
    }

    addFormToPage = () => {
        this.setState({
            needForm: !this.state.needForm
        })

    }

    showOneStatus=(id)=>{
        this.setState({showOneInstructor: !this.state.showOneInstructor, id})
        this.state.showOneInstructor && this.showOne()
    }
    showOne=()=>{
        const instuct =  this.props.instructors.find(inst => inst.id === this.state.id)
        return (<p onClick={()=> this.showOneStatus(instuct.id)}><strong>{instuct.name}</strong>/{instuct.subject}: <span onClick={() => this.deleteInstructor(instuct.id)} className="x"> ❌ </span><br/><strong>available hours:</strong>{instuct.hours}</p>)
    }
    render() {
        // debugger
        // console.log("Instructors props: ", this.props)
        const { instructors, history } = this.props
const instructs = instructors.map(inst => <p onClick={()=> this.showOneStatus(inst.id)} className="instructors"><strong> {inst.name} </strong><span> {Emojicon(inst.subject)}</span></p>)
        
        return (
            <div className="instructors-card-div">
                { this.state.showOneInstructor ? this.showOne(): instructs }
                {this.state.needForm ? <NewInstructorForm removeForm={this.addFormToPage} /> : <button onClick={this.addFormToPage}>Add New Instructor</button>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { instructors: state.instructors.instructors }
}
export default connect(mapStateToProps, { fetchInstructors, deleteInstructor })(Instructors)
