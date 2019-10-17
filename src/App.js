import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './containers/Admin';
import NewStudent from './NewStudentForm';
import NewInstructor from './NewInstructorForm';
import { Switch, Route, Link } from "react-router-dom";
import NewStudentForm from './NewStudentForm';
import NewInstructorForm from './NewInstructorForm';
import Instructors from './Instructors';
import Login from './login';
import Four0Four from './Four0Four';
import Signup from './Signup'






class App extends Component {

  state = {
    loggedIn: true,
  }

  loggedIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }
  render() {
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

              <Route exact path="/admin" component={Admin} />
              <Route exact path="/" component={Login} />
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

export default App;
