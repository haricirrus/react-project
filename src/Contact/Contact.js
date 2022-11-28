import React from 'react'
import './contact.css'


const Contact = () => {
  const preventfunction=(e)=>{
    e.preventDefault();

  }
  return (
    <div className='form-container'>
      <h2>Contact</h2>
      
      <form className='form' onSubmit={preventfunction}>
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <input placeholder='Phone'/>
        <textarea placeholder='Message'/>
        <button type='submit' className='btn-submit'>Submit</button>
        
      </form>
    </div>
  )
}

export default Contact