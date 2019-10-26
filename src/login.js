import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { adminLoginFetch } from './actions/adminActions';
import Headers from './components/headers'


class Login extends Component {

    state = {
        username: '',
        password: '',
        wrongCreds: null
    }

    componentDidMount() {
        if (localStorage.token) { this.props.history.push('/profile') }
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.login(this.state.username, this.state.password)
            .then(() => {

                if (this.props.login.loggedId) {
                    this.setState({ loggedIn: true })
                    this.setState({ wrongCreds: false, username: "", password: "" }, () => { this.props.history.push('/profile') })
                }
                else {
                  
                    this.setState({ wrongCreds: true, username: "", password: "" })
                    this.props.history.push('/')
                    setTimeout(() => { this.setState({ wrongCreds: false }) }, 3000)
                }
            })
    }

    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    render() {
        const { wrongCreds } = this.state
        console.log(this.props)
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
                        <h1 id="login-h1" style={{fontSize:"3em"}} >LOGIN</h1>
                        <br /><br />
                        <form onSubmit={this.handleSubmit} className="login">
                            <h1>User Name</h1>
                            <input style={{ width: "60%", fontSize:"1.25em", borderRadius:".25em"}} type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
                            <h1>Password</h1>
                            <input classname="login-inputs" style={{ width: "60%", fontSize:"1.25em", borderRadius:".25em"}} type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                            <br /><br />
                            <input type="submit" style={{ width: "30%", fontSize:"1em", borderRadius:".25em", borderColor:"grey"}}/>
                            <h4> Forgot password? Reset it  <input type="submit" value="Here" style={{ width: "30%", fontSize:"1em", borderRadius:".25em"}}/></h4>
                        </form>

                    </div>
                </div>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.login
    }

}
const mapDispatchToProps = {
    login: adminLoginFetch
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
