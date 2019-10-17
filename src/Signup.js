import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminFetchPost } from './actions/adminActions';

class Signup extends Component {

        state ={
            username:"",
            password:""
        }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>New Admin</h1>
    
            <label>Username</label>
            <input
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
              /><br/>
    
            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
              /><br/>
              <input type="submit"/>
            </form>
        )
    }
}

export default connect(null, {adminFetchPost})(Signup)
