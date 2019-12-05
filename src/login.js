import React, { Component } from 'react';
import './css/login.css';
import { connect } from 'react-redux';
import { logginFetch } from './actions/logginActions';
import { logginSucess } from './actions/logginActions';
import { profileAdmin, profileSuccess } from './actions/adminActions';
import Headers from './components/headers'


class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoading: false,
        wrongCreds: false,
        errorMessage: ""

    }

    handleSubmit = (e) => {

        e.preventDefault()
        this.setState({ requsting: !this.state.requsting })
        this.props.logginFetch(this.state).then(data => {
            debugger
            if (!!data.error) {
                this.setState({ wrongCreds: true, errorMessage: data.error })
            }
            else {
                localStorage.setItem("token", data.data.token)
                const token = localStorage.token
                this.props.profileAdmin(token).then(admin => {
                    this.setState({ requsting: this.props.admin.requesting, username: admin.username })
                    this.props.profileSuccess(admin)
                    this.props.logginSucess(admin)

                    this.setState({ isLoading: this.props.admin.requesting })
                    this.props.history.push('/profile')

                })
            }


        })

    }


    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }
    renderErrorMessage = () => {
        setTimeout(() => this.setState({ wrongCreds: false, username: "", password:"" }), 2000)
        return <p className="wrong-email-or-password" >Please enter valid Email or Password...</p>
    }
    // {this.state.errorMessage}


    render() {
        const { wrongCreds, errorMessage } = this.state
        console.log("Project login props:", this.props)
        return (
            <>
                <div>
                    <Headers history={this.props} />
                </div>
                <div >{wrongCreds ? this.renderErrorMessage() : null}</div>
                <div className={wrongCreds ? "login-div no-login": "login-div"}>
                    <div className="login">
                        <h1 id={ wrongCreds ? "no-login-h1" :"login-h1"} >LOGIN</h1>
                        {/* {wrongCreds ? <></> : <br />} */}
                        {/* {wrongCreds ? <></> : <br />} */}

                        <form onSubmit={this.handleSubmit} className="login">
                            <h1>User Name</h1>
                            <input style={{ width: "60%", fontSize: "1.25em", borderRadius: ".25em" }} type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
                            {this.state.isLoading ? <h1>Loggin you in....</h1> : ""}
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

export default connect(mapStateToProps, { logginFetch, profileAdmin, profileSuccess, logginSucess })(Login)
