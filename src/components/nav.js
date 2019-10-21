import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

export default function Nav(props) {
    console.log("Nav Props",props)
    return (
        <div >
        <nav >
        <ul>
            <li class="active" onClick={()=> props.history.push('/resources')}>Resources</li>
            <li><a href="#news">Add Admin</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
        </div>
    )
}
