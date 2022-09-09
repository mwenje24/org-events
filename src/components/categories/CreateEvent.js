import React from 'react'
import image from "../../assets/user.png"

const CreateEvent = () => {
  return (
    <div>
      {/* <form className="itemform-content"></form> */}
      <form className="modal-content animate">
        <span className='page-headings'>create new event</span>
        <div className="log-container">
          <div class="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Event Title</b></label>
          <div class="col-sm-10">
            <input className="form-control" type="text" placeholder="Enter Title" name="title"/>
          </div>
          </div>

          <div class="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Location</b></label>
          <div class="col-sm-10">
            <input className="form-control" type="text" placeholder="Enter Location" name="location"/>
          </div>
          </div>

          <div class="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Date</b></label>
          <div class="col-sm-10">
            <input className="form-control" type="text" placeholder="Enter Date" name="date"/>
          </div>
          </div>

          <div class="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Time</b></label>
          <div class="col-sm-10">
            <input className="form-control" type="text" placeholder="Enter Time" name="time"/>
          </div>
          </div>

          <div class="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Description</b></label>
          <div class="col-sm-10">
            <textarea className="form-control" 
              type="text" 
              placeholder="Enter event description"
              // value = {formData.description}
              // onChange={handleChange} 
              name="description">
          </textarea>
        </div>
          </div>

          <div class="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Fee</b></label>
          <div class="col-sm-10">
            <input className="form-control" type="text" placeholder="Enter Fee" name="fee"/>
          </div>
          </div>

          <div class="mb-3 row">
            <label className='col-sm-2 col-form-label'><b>Image</b></label>
          <div class="col-sm-10">
            <input className="form-control" type="file" name="image"/>
          </div>
          </div>
            
          <button className='btn btn-sm btn-outline-secondary mt-3 w-25 px-5' type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  )
}

export default CreateEvent
