import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky-top nav-header bg-light'>
        {/* <Link to="/" style={linkStyle} className='nav-lin'> Home </Link> */}
        {/* <Link to="/" className='nav-header-link'> <img src={logo} alt='logo'/> </Link> */}
        <Link to="/" className='nav-header-link'> Home </Link>
        {/* <Link to="/categories" className='nav-header-link'> categories </Link> */}
        <Link to="/trends" className='nav-header-link'> trends </Link>
        <Link to="/login" className='nav-header-link'> create event </Link>
        <form className='nav-header-link search-bar'>
          <input className='form-control' type='text' name='search' placeholder='search Event...'/>
        </form>
    </div>
  )
}

export default Header
