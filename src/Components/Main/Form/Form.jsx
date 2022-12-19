import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form className='f-form'>
      <div className='f-form-container'>
      <input className='f-input' type="email" placeholder='Eamil' name='email'/>
      <input className='f-input' type="password" placeholder='Password' name='password'/>
      <div className='f-btn-container'>
        <button className='f-btn f-btn-submit'>SUBMIT</button>
        <button className='f-btn f-btn-reg'>REGISTER</button>
      </div>
      </div>
    </form>
  )
}

export default Form
