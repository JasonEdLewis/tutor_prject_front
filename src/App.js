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
import { getProfileFetch } from './actions/adminActions'






class App extends Component {

  state = {
    // loggedIn: true,
  }



  
  render() {
    console.log("App props:", this.props, localStorage.token) 
    return (
      <>
        <div className="App">
          <header className="App-header">
            {this.state.loggedIn ? <nav>Admin Page</nav> :
              <nav>WELCOME TO ABC TUTORING</nav>
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
              <Route exact path="/signup" component={Signup} />

              {/* <Route component={Four0Four}/> */}
              <br />

            </div>
          </Switch>

        </body>
      </>

    );
  }
}
const mapStateToProps=(state)=>{
  return {
    login: state.login
  }
}

export default connect(null, { getProfileFetch })(App);
