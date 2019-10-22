import React, { Component } from 'react';
import '../App.css';

class Headers extends Component {
    render() {
        console.log("headers props:", this.props)
        const { history, loggedIn } = this.props
        // debugger
        return (
            <div className="header-component">
                <header >
                    {(() => {
                        switch (true) {
                            case loggedIn:
                                return (<h1>ADMIN PAGE</h1>)
                            case history.location.pathname === "/resources":
                                return (<h1>RESOURCES PAGE</h1>)
                            default:
                                return (<h1>HOME INSTRUCTION SUPPORT</h1>)
                        }
                    })()}
                </header>
            </div>)
    }
}

export default Headers