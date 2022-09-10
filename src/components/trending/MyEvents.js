import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import EventCard from "../EventCard"

const MyEvents = () => {
  let {userId} = useParams()
  const [event, setEvent] = useState(null);
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

  return (
    <div>
      {/* {userId} */}
      <div><span className='page-headings'>My Events Summary</span></div>
      <div>
        {userEvents.map(item =>(
          <EventCard key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            date={item.date}
            time={item.time}
            fee={item.fee}/>
        ))}
      </div>
      
    </div>
  )
}

export default MyEvents
