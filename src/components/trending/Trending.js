import React from 'react'
import EventCard from "../EventCard"

const Trending = () => {
  return (
    <>
      <div className='container trends mt-3' id='trends'>
        <span className='page-headings'>Trending Events</span>
        <div className="cards">
            <EventCard />
            <EventCard />
        </div>
     </div>
    </>
  )
}

export default Trending
