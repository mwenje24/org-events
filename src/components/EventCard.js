import React from 'react'

const EventCard = ({image, title, location, date, time, fee}) => {
  return (
    <>
      <div className='popular-card'>
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title title mt-2">Theme: {title }</p>
            <p className="card-text">Location: {location}</p>
            <p className="card-text w-100 title-gradient text-light">👉 {date} : {time}</p>
            <p className='text-danger ms-4'>fee: $ {fee}<button className='btn btn-sm btn-secondary ms-3'>Attend</button></p>
          </div>
      </div>
    </>
  )
}

export default EventCard
