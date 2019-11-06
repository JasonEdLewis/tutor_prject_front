import React, { Component } from 'react';
import '../App.css';
import '../css/login.css'


class Headers extends Component {
    render() {
        // console.log("headers props:", this.props)
        const { history, loggedIn } = this.props
        // debugger
        return (
            <div className="header-component">
                <header >
                    {(() => {
                        switch (true) {
                            case loggedIn:
                                return (<h1 style={{marginLeft: "5vw"}}>ADMIN PAGE</h1>)
                            case history.location.pathname === "/resources":
                                return (<h1>RESOURCES PAGE</h1>)
                            default:
                                return (<h1 style={{marginLeft: "10vw"}}>ABC TUTORING</h1>)
                        }
                    })()}
                </header>
            </div>)
    }
}

export default Headers