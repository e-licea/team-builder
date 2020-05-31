import React, { useState, useEffect } from 'react';
import Form from './Form';
import TeamList from './TeamList'
import './App.css';


 

function App() {

let data = [
    {
        username: 'Max23',
        email:'max23@jumpman.com',
        role: 'front-end'
    },
    {
        username: 'Axel_God',
        email: 'electriceel@insomniac.com',
        role: 'front-end'
    },
    {
        username: 'Webster',
        email: 'webdic@dictionary.com',
        role: 'back-end'
    },
    {
        username: 'Domingo',
        email: 'domingosunday@domingo.com',
        role: 'ux designer'
    }
]

console.log({data})
  return (
    <div className = 'App App-header'>

    <TeamList data = {data} />
    <Form />
    
    
    
    </div>
  )
}

export default App;




