import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    const newOrganizer = {
      organizer_name: formData.name,
      organizer_email: formData.email,
      password: formData.password
    }
    // console.log(newOrganizer)
    fetch("http://localhost:9292/organizers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrganizer),
    })
    .then((r) => r.json())
    // .then((data) => console.log(data))
  }

    return (
        <>
          <form className="modal-content animate" onSubmit={handleSubmit}>
          <span className='page-headings'>create account</span>
          <div className="log-container">
          <label className='form-label mt-4'><b>organiser name</b></label>
            <input className="form-control" 
              type="text" 
              placeholder="Enter Name" 
              value = {formData.name}
              onChange={handleChange}
              name="name"/>

            <label className='form-label'><b>email</b></label>
            <input className="form-control" 
              type="text" 
              placeholder="Enter Email" 
              value = {formData.email}
              onChange={handleChange}
              name="email"/>

            <label className='form-label'><b>Password</b></label>
            <input className="form-control" 
              type="password" 
              placeholder="Enter Password" 
              value = {formData.password}
              onChange={handleChange}
              name="password"/>
              
            <button className='btn btn-sm btn-outline-secondary mt-3 w-25 px-5' type="submit">Submit</button>
            {/* <Link to="/login" className='btn-sm'> Submit</Link> */}
          </div>

          <div className="log-container">
            <span className="psw">have an account? <Link to="/login" className='nav-header-link'> Login </Link></span>
          </div>
        </form>
        </>
    )
}

export default CreateAccount