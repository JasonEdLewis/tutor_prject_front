import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './Admin';
import NewStudent from './NewStudentForm';
import NewInstructor from './NewInstructorForm';
import { Switch,Route, Link } from "react-router-dom";
import NewStudentForm from './NewStudentForm';
import NewInstructorForm from './NewInstructorForm';
import Instructors from './Instructors';
import Login from './login';
import Four0Four from './Four0Four';






class App extends Component{

  render(){
  return (
   
      <div className="App">
        <header className="App-header">
          <nav>ADMIN PAGE</nav>
        </header>
        <body className="Body-header">
        <Switch>
        <div>
       
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/" component={Login}/>
            <Route exact path="/newStudent" component={NewStudentForm}/>

            {/* <Route component={Four0Four}/> */}
            <br/>
          </div>
          </Switch>
        </body>
        </div>
      
  );
}
}

export default App;
