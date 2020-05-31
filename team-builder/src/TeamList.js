import React, { useEffect, useState } from 'react'



export default function TeamList(props) {

    useEffect(()=>{

        for (let i=0; 0<props.data.length; i++){
            console.log(`this loop works so far`)
        }
    }, [1])
    
    return (
        <div>
            <div>
      <h3>Here is the current Teams List</h3>
  <h5>{`username: ${props.data[2].username} `} ß
      {`email: ${props.data[2].email} `}
      {`role: ${props.data[2].role} `}</h5>
      <h6>{console.log(props)}</h6>
    </div>
        </div>
    )
}
