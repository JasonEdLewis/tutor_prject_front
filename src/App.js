import React, { Component } from 'react';
import './App.css';
import Profile from './containers/Profile';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import NewStudentForm from './NewStudentForm';
import NewInstructorForm from './NewInstructorForm';
import Login from './login';
import Four0Four from './Four0Four';
import Signup from './Signup';
import Resources from './components/resources'



class App extends Component {

  state = {
    loggedIn: false,
  }

  componentDidMount() {
    localStorage.clear()
  
  }
  render() {
    console.log("App props:", this.props)
    return (
      <div>
        <body className="Body">
          <Switch>
            <div>
              <Route exact path="/" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/newStudent" component={NewStudentForm} />
              <Route exact path="/newInstructor" component={NewInstructorForm} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/signup" component={Signup} />
              <br />

            </div>
          </Switch>

        </body>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(App);
