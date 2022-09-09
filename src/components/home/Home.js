import Trending from '../trending/Trending'

const Home = () => {
  return (
    <>
      <div className='landing-page'>
        <div className='welcome-image mb-5'>
          <div className='welcome-text'>
            <h1>Information Beyond</h1>
            <span>Need to advertise or attend an event? Events Org has got you covered</span>
          </div>
        </div>
     </div>
     <div className='container event-cat'>
        <span className='page-headings'>Event Categories</span>
        <div className='row'>
            <div className='event-categories'><span>Sports</span></div>
            <div className='event-categories'><span>Bussiness</span></div>
            <div className='event-categories'><span>Concerts</span></div>
            <div className='event-categories'><span>Travel</span></div>
            <div className='event-categories'><span>Educational</span></div>
            <div className='event-categories'><span>Talk Shows</span></div>
            <div className='event-categories'><span>Hangouts/Chill</span></div>
        </div>
     </div>
     <Trending />
    </>
  )
}

export default Home
