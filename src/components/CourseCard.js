import "./CourseCard.css"
import React from 'react'

const CourseCard = (props) => {
  return (
    <div className="card">
      <div className="left-info">
          <h1>{props.heading}</h1>
          <img src={props.imgsrc}/>
        </div>
        <div className="right-info">
          <p>{props.text}</p>
          <a href="/Join">
          <button className="buttonClass">Join Now</button>
          </a>
        </div>
    </div>
  )
}

export default CourseCard;
