import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <ul><span>INTRANET</span></ul>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/Product'>Product</Link></li>

        <li><Link to='/Blog'>Blogs</Link></li>

        <li><Link to='/Invest'>Invest</Link></li>

      </ul>
    </div>
  )
}

export default Header