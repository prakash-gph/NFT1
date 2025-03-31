import React from 'react'
import { FcTodoList } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import image from "/images/21.jpeg"
import "./OurActivities.css"

const Project = () => {
  return (
    <div>
      <div className="picture">
        <img src='images/19.png' alt='images'></img>
       <h1>Project</h1>
      </div>
      <div className="activities-paragraph">
        <div className="paragraph">
            <h2><FcTodoList/> Our Activities</h2>
            <p>Bharat's culture is the lifeblood of the nation. It is evident that to protect 
              Bharat, we must first nourish its culture.<br></br> If Bharat's
               culture fades away within its borders, and if Hindu
                society ceases to exist, it would be inappropriate <br></br>to
                 refer to the mere geographical entity that remains as
                  Bharat-India.</p>
              <p><FcSportsMode/>Geographical boundaries alone do not constitute a nation. 
              It is essential for society to be vigilant and organized <br></br>so that no one would 
              dare to undermine our values and honor. Strength arises from organization. Therefore,<br></br> 
              it is the duty of every individual to contribute to the consolidation of Bharat's society.</p>
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
