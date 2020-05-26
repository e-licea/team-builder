import React, { useState, useEffect } from 'react'
import logo from './logo.svg';

export default function Form() {
    const [uName, setName] = useState ('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = event => {
      event.preventDefault();
      console.log({email, uName, role});
    };

    return (
        <div className="App">
     
      <header className="App-header">
        <h1>Hello there {uName}, your your role is {role} and your contact email is {email}</h1>
       
        <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:  
        <input onChange = {event => {
          setName(event.target.value);
        } }  type = 'text'></input>
        </label>

        <label>
          Email:  
        <input onChange = {event => {
          setEmail(event.target.value);
        } }id='email' type = 'text'></input>
        </label>

        <label>
          Role:  
        <input onChange = {event => {
          setRole(event.target.value);
        } } type = 'text'></input>
        </label>

        <button  >Submit!</button>

      </form>
       
      </header>
    </div>
    )
}
