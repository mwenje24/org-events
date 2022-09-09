import React from 'react'
import image from "../../assets/user.png"
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <form className="modal-content animate" onSubmit="">
          <div className="imgcontainer">
            <img src={image} alt="Avatar" className="avatar"/>
          </div>

          <div className="log-container">
            <label className='form-label'><b>email</b></label>
            <input className="form-control" type="text" placeholder="Enter Email" name="uname"/>

            <label className='form-label'><b>Password</b></label>
            <input className="form-control" type="password" placeholder="Enter Password" name="psw"/>
              
            <button className='btn btn-sm btn-outline-secondary mt-3 w-25 px-5' type="submit"><Link to="/create-event" className='btn-sm'> Login</Link></button>
          </div>

          <div className="log-container">
            <span className="psw">Don't have an Account <Link to="/create-account" className='nav-header-link'> Sign Up </Link></span>
          </div>
        </form>
    </div>
  )
}

export default Login