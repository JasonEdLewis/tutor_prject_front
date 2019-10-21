import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { adminLoginFetch } from './actions/adminActions'


class Login extends Component {

    state = {
        username: '',
        password: '',

    }



    componentDidMount() {
        if (localStorage.token) { this.props.history.push('/profile') }
    }
    handleSubmit = e => {
        e.preventDefault()
        // debugger
        this.props.login(this.state)
            .then(() => {

                console.log(localStorage.token)

                if (this.props.login.loggedId) {

                    this.setState({ wrongCreds: false, username: "", password: "" }, () => { this.props.history.push('/profile') })

                }
                else {

                    this.setState({ wrongCreds: true, username: "", password: "" })
                    setTimeout(() => { this.setState({ wrongCreds: false }) }, 3000)

                }
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { wrongCreds } = this.state
        // console.log("Username:", this.state.username, "Password:", this.state.password)
        console.log("Login props", this.props)
        return (
            <div className="login-div">
                <div >
                    <div >
                        {wrongCreds ? <p className="wrong-login">{this.props.login.errorMessages}</p>
                            : <></>}
                    </div>
                    {/* <button className="login-nav"><a href="/registration">Register</a></button> */}
                    <br /><br />
                </div>
                <div className="login">
                    <h1 id="login-h1"  >LOGIN</h1>
                    <br /><br />
                    <form onSubmit={this.handleSubmit} className="login">
                        <h1>User Name</h1>
                        <input style={{ width: "60%" }} type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        <h1>Password</h1>
                        <input style={{ width: "60%" }} type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <br /><br />
                        <input type="submit" />
                        <h4> Forgot password? Reset it  <input type="submit" value="Here" /></h4>
                    </form>

                </div>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login
    }

}
const mapDispatchToProps = {
    login: adminLoginFetch
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
