import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './Admin';
import NewStudent from './NewStudentForm';
import NewInstructor from './NewInstructorForm';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NewStudentForm from './NewStudentForm';




class App extends Component{

  render(){
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div>
            <Admin/>
            <br/>
          </div>
        </header>
      </div>
    </Provider>
  );
}
}

export default App;
