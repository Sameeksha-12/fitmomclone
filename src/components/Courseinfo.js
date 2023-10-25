import "./Courseinfo.css"
import React from 'react'
import CourseCard from "./CourseCard"
import CourseCardData from "./Coursedata"


const Courseinfo = () => {
  return (
    <div className="info">

        {CourseCardData.map((val,ind) => {
          return(
            <CourseCard
              key = {ind}
              imgsrc = {val.imgsrc}
              heading = {val.heading}
              text = {val.text}
            />
          )
        })}
    
    </div>
  )
}

export default Courseinfo
