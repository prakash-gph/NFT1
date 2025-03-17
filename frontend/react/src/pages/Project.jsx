import React from 'react'
import { FcTodoList } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import image from "/images/21.jpeg"
import "./OurActivities.css"

const Project = () => {
  return (
    <div>
      <div className="picture">
        <img src='images/19.svg' alt='images'></img>
       <h1>Project</h1>
      </div>
      <div className="activities-paragraph">
        <div className="paragraph">
            <h2><FcTodoList/> Our Activities</h2>
            <p>DST is dedicated to promoting, preserving, and presenting 
              the Indian traditional<br></br>arts and culture through the 
              following programme of work:</p>
              <p><FcSportsMode/> Support and nurture young talents from 
              the fields of traditional<br></br> Indian language of Sanskrit</p>
              <p><FcSportsMode/> To develop and nurture an appreciation of
               Indian arts and culture through <br></br>educational programmes, 
               cultural orientation programmes, and outreach <br></br>activities 
               for children and young people.</p>
        </div>
        <div className="activities-image">
          <img src={image} alt='image' ></img>
        </div>
      </div>

      
    </div>
  )
}

export default Project
