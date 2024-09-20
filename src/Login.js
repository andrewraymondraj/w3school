import React from 'react'
import { NavLink } from 'react-router-dom'
import './signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Signup = () => {
  return (
    <div className='signupbox'>

      <div className='line1'>
            <p className='headline'>Login</p>
            <NavLink to='/'>
                  <FontAwesomeIcon className='xmark' icon={faXmark} />
            </NavLink>    
      </div>
      <h5 className='already'>Don't have an account? <NavLink to='/signup'>
        <span>Sign Up</span></NavLink></h5>
     
      <div className='bigbox1'>
        <div className='minibox1' >
          <h3>Google</h3>
          <FontAwesomeIcon className='icon' icon={faGoogle} />
        </div>
        <div className='minibox2' >
          <h3>Facebook</h3>
          <FontAwesomeIcon className='icon' icon={faFacebook} />
        </div>
        
      </div>

      <div className='bigbox1'>
        <div className='minibox1' >
          <h3>Github</h3>
          <FontAwesomeIcon className='icon' icon={faGithub} />
        </div>
        <div className='minibox2' >
          <h3>Instagram</h3>
          <FontAwesomeIcon className='icon' icon={faInstagram} />
        </div>
        
        
      </div>

      <p className='orstate'>OR</p>

<div className='inputs'>
      <input className='input' placeholder='email'/>
      <input className='input' placeholder='password'/>
   
</div>
<div className='buttonsss'> 
          <button className='buttonlog1'>Forgot Password</button>
          
          <button className='buttonlog2'>LogIn</button>
</div>
  
  
    
      
    </div>
  )
}

export default Signup
