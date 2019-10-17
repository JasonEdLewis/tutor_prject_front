import React, { Component } from 'react';
import './App.css';

export default class login extends Component {


    handleSubmit = e => {
        e.preventDefault()
        this.props.history.push('/admin')
    }

    render() {
        console.log("Login props:", this.props)
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
                        <input type="text" name="username" />
                        <h3>Password</h3>
                        <input type="password" name="password" />
                        <br /><br />
                        <input type="submit" />
                        <h5> Forgot password? Resset it  <input type="submit" value="Here" /></h5>
                    </form>
                </div>
            </div>


        )
    }
}
