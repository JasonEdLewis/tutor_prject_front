import React, { Component } from 'react'

export default class login extends Component {


     handleSubmit = e=> {
         e.preventDefault()
 this.props.history.push('/admin')
}    

render() {
        console.log("Login props:",this.props)
        return (
          <div>
          <div>
		<nav id="nav">
			<button><a href="/registration">Register</a></button>
		</nav>
        <br/><br/>
            </div>
        <div>
		<h1>LOG IN</h1>
        <br/><br/>
            <form onSubmit={this.handleSubmit}>
                <h3>User Name</h3>
                <input type="text" name="username" />
                <h3>Password</h3>  
                <input type="password" name="password"/>
                <br/><br/>
                <input type="submit" />
                <h5> Forgot password? Resset it  <input type="submit" value="Here"/></h5>
            </form>
            </div>
        </div>

           
        )
    }
}


//                      <h3>User Name</h3>
//                     <input type="text" id="username"name="username" />
//                     <h3>Password</h3>
//                     <input type="password" name="password"/>
//                     <br/><br/>
//                     