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
import { getProfileFetch } from './actions/adminActions';
import Resources from './components/resources'



class App extends Component {

  state = {
    loggedIn: true,
  }




  render() {
    console.log("App props:", this.props, localStorage.token)
    return (
      <>
        <div className="App">
          <header className="App-header">

            {localStorage.token ? <h1>Admin Page</h1> :
              <h3>HOME INSTRUCTION SUPPORT</h3>
            }
          </header>
        </div>

        <body className="Body">
          <Switch>
            <div>
              <Route exact path="/" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/newStudent" component={NewStudentForm} />
              <Route exact path="/newInstructor" component={NewInstructorForm} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/signup" component={Signup} />
              {/* <Route component={Login}/> */}
              <br />

            </div>
          </Switch>

        </body>
      </>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { getProfileFetch })(App);
