import React, { useEffect, useState } from 'react'



export default function TeamList(props) {


    
    return (
        <div>
            <div>
      <h3>Here is the current Teams List</h3>
      <h6>{console.log(props)}</h6>

      <div className = 'list-container'>
        <ol className = 'list'>
            {props.data.map(item => (
                <li key={item}>
                    <span className="user-span">Username:</span> {item.username}, 
                    <span className="email-span">  Email:</span> {item.email},  
                    <span className="role-span">  Role:</span> {item.role}
                </li>
            ))}
        </ol>
      </div>
    </div>
        </div>
    )
}
