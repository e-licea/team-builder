import React, { useState } from 'react'



export default function Form() {
    const [formData, setFormData] = useState ({
      uName: '',
      role: '',
      email: ''
    });

//Submit Handler
    const handleSubmit = event => {
      event.preventDefault();
      console.log(formData);
      alert('Your information has been saved!');
      
    };

//Input Change Handler
  const onInputChange = event => {

    setFormData({
    
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

    return (
        <div >
          
        

      <header className="App-header">
     
      
   
       <h3>Add a teamate here</h3>
        <form onSubmit={event => handleSubmit(event)}>


        <label>
          Username:  
          <input placeholder='Username' name='uName' onChange = {onInputChange} />
        </label>

        <label>
          Email:  
          <input placeholder = 'E-mail' name='email' onChange = {onInputChange} />
        </label>

        <label>
          Role:  
          <input placeholder='Role' name='role' onChange = {onInputChange} />
        </label>

        <button>Submit!</button>

      </form>

    
       
      </header>



      
    </div>
    )
}
