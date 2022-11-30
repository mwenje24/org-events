import Trending from '../trending/Trending'
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  function filterCat({criteria}){
    navigate('/categories', {state: {criteria : criteria}});
  }
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
            <div className='event-categories' onClick={filterCat}><span>Sports</span></div>
            <div className='event-categories' onClick={filterCat}><span>Bussiness</span></div>
            <div className='event-categories' onClick={filterCat}><span>Concerts</span></div>
            <div className='event-categories' onClick={filterCat}><span>Travel</span></div>
            <div className='event-categories' onClick={filterCat}><span>Educational</span></div>
            <div className='event-categories' onClick={filterCat}><span>Talk Shows</span></div>
            <div className='event-categories' onClick={filterCat}><span>Hangouts/Chill</span></div>
        </div>
     </div>
     <Trending />
    </>
  )
}

export default Home
