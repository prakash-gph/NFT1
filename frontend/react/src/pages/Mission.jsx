import React from 'react'
import "./Mission.css"
import img from "/images/26.svg"
import { FcCheckmark } from "react-icons/fc";

const Mission = () => {
  return (
    <div>
      <div className="mission">
        <img src='images/4.png'></img>
        <h1>Mission & Vision</h1>
      </div>
      <div className="OurMission-Vision">
        <div className="OurMission">
          <h2>Our Mission & Vision</h2>
          <p><FcCheckmark />Empower Communities – Support social welfare initiatives to uplift underprivileged individuals.</p>
          <p><FcCheckmark /> Promote Education & Healthcare – Ensure access to quality education and medical facilities for all.</p>
          <p><FcCheckmark />Environmental Sustainability – Advocate for tree plantation, clean energy, and ecological balance </p>
          <p><FcCheckmark />Cultural & Social Development – Preserve traditions while fostering inclusivity and modern progress.</p>
          <p><FcCheckmark />Support for the Needy – Aid the elderly, disabled, transgender community, and those below the poverty line.</p>
          <p><FcCheckmark />Nation First Approach – Work towards a self-reliant and progressive India.Equal Opportunities – Build <br></br>a society where everyone has access to education, healthcare, and employment.</p>
          <p><FcCheckmark />Sustainable Growth – Promote long-term social, economic, and environmental development.</p>
          <p><FcCheckmark />Unity & Harmony – Strengthen national integration and cultural unity. A Better Future for <br></br>All – Ensure dignity, security, and well-being for every citizen.</p>
      
              </div>
        <div className="image">
          <img src={img} alt="images" />
        </div>
      </div>
    </div>
  )
}

export default Mission
