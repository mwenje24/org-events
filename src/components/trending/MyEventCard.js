import React, {useState} from 'react'

const MyEventCard = ({description, image, title, location, date, time, fee}) => {

  return (
    <>
      <div className='popular-card'>
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title title mt-2">Theme: {title }</p>
            <p className="card-text">Location: {location}</p>
            <p className='title'>fee: $ {fee}</p>
            <p className='text-dark'>Description: {description}</p>
            <p className="card-text w-100 title-gradient text-light">👉 {date} : {time}</p>
          </div>
      </div>
    </>
  )
}

export default MyEventCard
