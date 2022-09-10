import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';


// let owner_id = 1
const CreateEvent = () => {
  let {userId} = useParams()
  // console.log(userId)

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    time: "",
    // event_owner_id: "",
    description: "",
    fee: 0,
    date: "",
    image: "",
  });

  // const navigate = useNavigate();

  // function moveToSummary(){
  //   navigate('/myevents');
  // }

  function handleChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    const newEvents = {
      title: formData.title,
      category: formData.category,
      location: formData.location,
      time: formData.time,
      event_owner_id: userId,
      description: formData.description,
      fee: formData.fee,
      date: formData.date,
      image: formData.image
    }
    // console.log(newEvents)
    fetch("http://localhost:9292/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvents),
    })
  }

  return (
    <div>
      {/* <form className="itemform-content"></form> */}
      {/* <button className='btn btn-sm btn-secondary mx-3 px-4' onClick={moveToSummary}> <span className='fs-5'>&laquo;</span> Back to Summary</button> */}
      <form className="modal-content animate" onSubmit={handleSubmit}>
        <span className='page-headings'>create new event</span>
        <div className="log-container">
          <div className="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Event Title</b></label>
          <div className="col-sm-10">
            <input className="form-control" 
              type="text" 
              placeholder="Enter Title" 
              value = {formData.title}
              onChange={handleChange}
              name="title"/>
          </div>
          </div>

          <div className="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Category</b></label>
          <div className="col-sm-10">
            <select className="form-control form-select form-select-sm mb-3" 
                // value = {formData.category}
                onChange={handleChange}
                name="category"
                defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Select Category...</option>
                <option value="business">business</option>
                <option value="sports">sports</option>
                <option value="concerts">concerts</option>
                <option value="travel">travel</option>
                <option value="educational">educational</option>
                <option value="talkshows">talkshows</option>
                <option value="hangout/chill">hangout/chill</option>
            </select>
          </div>
          </div>

          <div className="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Location</b></label>
          <div className="col-sm-10">
            <input className="form-control" 
              type="text" 
              placeholder="Enter Location" 
              value = {formData.location}
              onChange={handleChange}
              name="location"/>
          </div>
          </div>

          <div className="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Date</b></label>
          <div className="col-sm-10">
            <input className="form-control" 
              type="text" 
              placeholder="Enter Date" 
              value = {formData.date}
              onChange={handleChange}
              name="date"/>
          </div>
          </div>

          <div className="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Time</b></label>
          <div className="col-sm-10">
            <input className="form-control" 
              type="text" 
              placeholder="Enter Time" 
              value = {formData.time}
              onChange={handleChange}
              name="time"/>
          </div>
          </div>

          <div className="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Description</b></label>
          <div className="col-sm-10">
            <textarea className="form-control" 
              type="text" 
              placeholder="Enter event description"
              value = {formData.description}
              onChange={handleChange} 
              name="description">
          </textarea>
        </div>
          </div>

          <div className="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Fee</b></label>
          <div className="col-sm-10">
            <input className="form-control" 
              type="text" 
              placeholder="Enter Fee" 
              value = {formData.fee}
              onChange={handleChange}
              name="fee"/>
          </div>
          </div>

          <div className="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Image</b></label>
          <div className="col-sm-10">
            <input className="form-control" 
              type="text" 
              placeholder="Enter Image URL"
              value = {formData.image}
              onChange={handleChange}
              name="image"/>
          </div>
          </div>
            
          <button className='btn btn-sm btn-outline-secondary mt-3 w-25 px-5' type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  )
}

export default CreateEvent
