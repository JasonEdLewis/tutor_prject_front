import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

export default function Nav(props) {
    console.log("Nav Props",props)
    const { history }= props
    return (
        <div >
        <nav >
        <ul>
            <li><Link to="/resources">Resources</Link></li> 
            {/* <li><a href="#news">Add Admin</a></li> */}
            <li><span onClick={()=> {
                history.push('/')
                localStorage.clear()
                console.log("Local storage After logout",localStorage.token)
        }}>Log Out</span></li>
           
        </ul>
    </nav>
        </div>
    )
}
