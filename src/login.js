import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import {logginFetch}from './actions/logginActions';
import {logginSucess}  from './actions/logginActions';
import { profileAdmin, profileSuccess } from './actions/adminActions';
import Headers from './components/headers'


class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoading: false,
        wrongCreds: null
    }

   


    handleSubmit = (e) => {
        debugger
        e.preventDefault()
        this.setState({ requsting: !this.state.requsting })
        this.props.logginFetch(this.state).then(data => {

            this.setState({ username: "", password: "" });

           localStorage.setItem("token", data.token)
           const token = localStorage.token
            this.props.profileAdmin(token).then(admin => {
                this.setState({ requsting: this.props.admin.requesting })
               
                if (admin.username !== undefined) {
                    this.props.profileSuccess(admin)
                    this.props.logginSucess()
                
                    this.setState({ requsting: this.props.admin.requesting })
                    this.props.history.push('/profile')
                   
                   
                }
                else {
                    this.setState({ error: !this.state.error })
                }

            })


        })
        // console.log(this.props.admin.username)
        // localStorage.token !== "undefined" ? this.props.history.push('/profile') : this.props.history.push('/') 
    }


    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    render() {
        const { wrongCreds } = this.state
        console.log("Project login props:",this.props)
        return (
            <>
                <div>
                    <Headers history={this.props} />
                </div>
                <div className="login-div">
                    <div >
                        <div >
                            {wrongCreds ? <p className="wrong-login">WRONG LOGIN INFO</p>
                                : <></>}
                        </div>

                        <br /><br />
                    </div>
                    <div className="login">
                        <h1 id="login-h1" style={{ fontSize: "3em" }} >LOGIN</h1>
                        <br /><br />
                        <form onSubmit={this.handleSubmit} className="login">
                            <h1>User Name</h1>
                            <input style={{ width: "60%", fontSize: "1.25em", borderRadius: ".25em" }} type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
                            {this.state.isLoading ? <h1>Loggin you in....</h1> : "" }
                            <h1>Password</h1>
                            <input classname="login-inputs" style={{ width: "60%", fontSize: "1.25em", borderRadius: ".25em" }} type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
                            <br /><br />
                            <input type="submit" style={{ width: "30%", fontSize: "1em", borderRadius: ".25em", borderColor: "grey" }} />
                            <h4> Forgot password? Reset it  <input type="submit" value="Here" style={{ width: "30%", fontSize: "1em", borderRadius: ".25em" }} /></h4>
                        </form>

                    </div>
                </div>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.login,
        admin: state.admin
    }

}

export default connect(mapStateToProps, {logginFetch, profileAdmin, profileSuccess, logginSucess })(Login)
