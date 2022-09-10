import React, {useState} from 'react'

const EventCard = ({event_id, image, title, location, date, time, fee}) => {

  function handleOpenForm(){
    document.getElementById("attendee-form").style.display="block";
  }

  function HandleCloseForm(e){
    document.getElementById("attendee-form").style.display="none"
    e.preventDefault();
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const newattendance = {
      name: name,
      email: email,
      event_id: event_id
    }
    // console.log(newattendance)
    fetch("http://localhost:9292/attendees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newattendance),

    })
    .then((r) => r.json())
    // .then((data) => console.log(data))
    document.getElementById("attendee-form").style.display="none"
    alert("Attendance confirm successful, find your ticked attached to your email")
  }

  return (
    <>
      <div className="form-display" id="attendee-form">
              <form id="contactMessage" onSubmit={handleSubmit}>
                  <div className="form-content mt-5">
                  <span className='page-headings'>Confirm your attendance</span>
                      <button className="btn btn-sm button" onClick={HandleCloseForm}>x</button>
                      <div className="form-details mt-3">
                          <label>Attendee Name</label><br/>
                          <input id="username" 
                            type="text" name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Your Full Names" required/>
                      </div>
                      <div className="form-details">
                          <label>Email</label><br />
                          <input id="email"  
                            name="email" 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email" required/>
                      </div>
                      <div className='clr'><input className='btn btn-sm btn-dark' type="submit" value="confirm"/></div>
                      </div>
              </form>
          </div>

      <div className='popular-card'>
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title title mt-2">Theme: {title }</p>
            <p className="card-text">Location: {location}</p>
            <p className="card-text w-100 title-gradient text-light">👉 {date} : {time}</p>
            <p className='text-danger ms-4'>fee: $ {fee}<button className='btn btn-sm btn-secondary ms-3' onClick={handleOpenForm}>Attend</button></p>
          </div>
      </div>
    </>
  )
}

export default EventCard
