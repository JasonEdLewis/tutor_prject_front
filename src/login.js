import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { adminLoginFetch } from './actions/adminActions'


class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.history.push('/admin')
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        console.log("Username:", this.state.username, "Password:", this.state.password)
        return (
            <div >
                <div >
                    <button className="login-nav"><a href="/registration">Register</a></button>
                    <br /><br />
                </div>
                <div>
                    <h1 id="login-h1" className="login" >LOGIN</h1>
                    <br /><br />
                    <form onSubmit={this.handleSubmit} className="login">
                        <h3>User Name</h3>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        <h3>Password</h3>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <br /><br />
                        <input type="submit" />
                        <h5> Forgot password? Resset it  <input type="submit" value="Here" /></h5>
                    </form>
                </div>
            </div>


        )
    }
}
export default Login
