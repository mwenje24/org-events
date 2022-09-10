import React, {useState, useEffect} from 'react'
import image from "../../assets/user.png"
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`http://localhost:9292/organizers`)
        .then((r) => r.json())
        .then((user) => setUser(user));
        // .then((user) => console.log(user));
    }, []);

    function handleChange(event) {
      setFormData({
          ...formData,
          [event.target.name]: event.target.value,
      });
    }

    function handleSubmit(e){
      e.preventDefault();
        const email= formData.email
        const password= formData.password

        const verified = user.find(person => 
          person.organizer_email === email
        )
        // console.log(verified)
        if(verified){
          if(password === verified.password){
            navigate('/myevents'+ '/'+ verified.id, {state: {userId : verified.id}});
          }
          else{
            alert('Wrong password')
          }
        }
        else{
          alert('user does not exist')
        }
    }
  return (
    <div>
      <form className="modal-content animate" onSubmit={handleSubmit}>
          <div className="imgcontainer">
            <img src={image} alt="Avatar" className="avatar"/>
          </div>

          <div className="log-container">
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
              
            <button className='btn btn-sm btn-outline-secondary mt-3 w-25 px-5' type="submit">Login</button>
            {/* <Link to="/create-event" className='btn-sm'> Login</Link> */}
          </div>

          <div className="log-container">
            <span className="psw">Don't have an Account <Link to="/create-account" className='nav-header-link'> Sign Up </Link></span>
          </div>
        </form>
    </div>
  )
}

export default Login