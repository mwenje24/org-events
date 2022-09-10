import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import EventCard from "./MyEventCard"

const MyEvents = () => {
  let {userId} = useParams()
  const [event, setEvent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/events`)
      .then((r) => r.json())
      .then((events) => setEvent(events));
      // .then((event) => console.log(event));
  }, []);
  if (!event) return <h2>Loading events data...</h2>;

  const userEvents = event.filter((item) =>{
    return item.event_owner_id === parseInt(userId)
  })
  // if (!userEvents) return <h2>You have no events yet...</h2>;

  function moveToCreateEvent(){
    navigate('/create-event'+ '/'+ userId, {state: {userId : userId}})
  }

  return (
    <div>
      {/* {userId} */}
      <div>
        <span className='page-headings'>My Events Summary</span>
        <button className='btn btn-sm btn-secondary mx-5 px-3' onClick={moveToCreateEvent}>Create New Event</button>
      </div>
      <div>
        {userEvents.map(item =>(
          <EventCard key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            date={item.date}
            time={item.time}
            fee={item.fee}
            description={item.description}/>
        ))}
      </div>
      
    </div>
  )
}

export default MyEvents
