import React, { Component } from 'react';
import '../App.css';


export default class Dropdown extends Component {

  state ={
    showMenu: false,
  }


  showMenu =(event)=>{
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    const { history } = this.props
    return (
      <div className="dropdown">
        <button onClick={this.showMenu} className="drop-btn">
          |  M | E | N | U |
          </button>

        {
          this.state.showMenu
            ? (
              <div >
                <button onClick={()=> history.push('/resources')} className="drop-btn"> RESOURCES </button>
                <button onClick={()=> { localStorage.clear(); history.push('/') }} className="drop-btn"> LOGOUT </button>
                <button onClick={()=> { history.push('/profile') }} className="drop-btn"> ADMIN </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }

}
