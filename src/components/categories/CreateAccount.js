import React from 'react'
import {Link} from 'react-router-dom'

const CreateAccount = () => {
    return (
        <>
          <form className="modal-content animate" onSubmit="">
          <span className='page-headings'>create account</span>
          <div className="log-container">
          <label className='form-label mt-4'><b>organiser name</b></label>
            <input className="form-control" type="text" placeholder="Enter Name" name="organizer-name"/>

            <label className='form-label'><b>email</b></label>
            <input className="form-control" type="text" placeholder="Enter Email" name="email"/>

            <label className='form-label'><b>Password</b></label>
            <input className="form-control" type="password" placeholder="Enter Password" name="psw"/>
              
            <button className='btn btn-sm btn-outline-secondary mt-3 w-25 px-5' type="submit"><Link to="/login" className='btn-sm'> Submit</Link></button>
          </div>

          <div className="log-container">
            <span className="psw">Don't have an Account <Link to="/create-account" className='nav-header-link'> Sign Up </Link></span>
          </div>
        </form>
        </>
    )
}

export default CreateAccount