import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-part1'>

  
      <ul>
          <li><p>Welcome to our blog where we help you with day to day furniture care, discuss design ideas and latest trends, and speak about the latest design trends. We also discuss how the right decision for buying furniture can lead to an overall improvement in your lifestyle and ofcourse, make your home look beautiful.</p>
          </li>
          </ul>
          
          <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/Contact'>Contacts</Link></li>
           <li><Link to='/Business'>Business</Link></li>
           <li><Link to='/Blog'>Blogs</Link></li>
           <li><Link to='/Invest'>Invest</Link></li>
          </ul>
          
          <ul>
            <span><a href='https://www.instagram.com/'><img className='instagram' src='https://cdn.pixabay.com/photo/2018/03/19/02/52/logo-instagram-3238899__480.png'></img></a></span>
            <span><a href='https://www.linkedin.com/'><img className='linkedin' src='https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_1280.png'></img></a></span>
            <span><a href='https://twitter.com/'><img className='twitter' src='https://cdn.pixabay.com/photo/2017/12/06/04/57/twitter-3000965_1280.png'></img></a></span>
          
         </ul>
         </div>
        <div className='footer-part2'>
            <p>Copyright| All rights are reserved 2022</p>
        </div>
    
      
    </div>
  )
}

export default Footer