import "./Footprint.css"
import React from 'react'

const Footprint = () => {
  return (
    <div class="globalfootprint">
        <h1>Global Footprint</h1>
        <p>At VMax Fit, we are proud of our global footprint, serving users in over 
      40 countries and impacting the lives of 1 million individuals. With a user base of 38,000 worldwide, we have garnered a remarkable 
      98% success rate. Our commitment to making a positive difference in people’s lives is at the core of who we are.We invite you to join 
      our community and share in our passion for creating meaningful and transformative experiences. Together, let’s make a lasting impact 
      and spread the love.</p>
        <div className="footprint">
            <div className="one">
                <h1>38K</h1>
                <p>Users Globally</p>
            </div>
            <div className="two">
                <h1>98%</h1>
                <p>Success rate</p>
            </div>
            <div className="three">
                <h1>40+</h1>
                <p>Countries Served Globally</p>
            </div>
        </div>
        <a href="/About">       
        <button className="button1">Know More</button>
        </a>
    </div>

  )
}

export default Footprint
