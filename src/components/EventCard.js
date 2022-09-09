import React from 'react'
import pic from '../assets/logo192.png'

const EventCard = () => {
  return (
    <>
      <div className='popular-card'>
          <img src={pic} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="card-title">Event Title <span className='ms-3'>charges</span></h6>
            <h6 className="card-text">location</h6>
            <h6 className="card-text">date:day<span className='btn btn-sm btn-secondary ms-3'>Attend</span></h6>
          </div>
      </div>
    </>
  )
}

export default EventCard
