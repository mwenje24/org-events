import React, {useState, useEffect}  from 'react'
import EventCard from "../EventCard"

function Categories() {
  const [event, setEvent] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:9292/events`)
        .then((r) => r.json())
        .then((event) => setEvent(event));
        // .then((event) => console.log(event));
    }, []);

    if (!event) return <h2>Loading events data...</h2>;
  return (
    <>
      <div className='container trends mt-3' id='trends'>
        <span className='page-headings'>category</span>
        <div className="cards">
            {event.map(item =>(
              <EventCard key={item.id}
                event_id={item.event_id}
                image={item.image}
                title={item.title}
                location={item.location}
                date={item.date}
                time={item.time}
                fee={item.fee}/>
            ))}
        </div>
     </div>
    </>
  )
}

export default Categories
