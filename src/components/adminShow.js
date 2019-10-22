import React from 'react';

export default function adminShow(props) {
    const { history, admin } = props.info
    return (
        <div className="middle">
             <h1>WELCOME BACK {admin.username}</h1>
        </div>)
    
}
