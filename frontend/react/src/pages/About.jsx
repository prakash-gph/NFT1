import React from 'react'
import image from "/images/barat Mata.svg"
import { FcAbout } from "react-icons/fc";

import "./About.css"

const About = () => {
  return (
    <div>
      <div className="aboutImages">
        <img src='images\about.svg' alt='imges'></img>
      </div>

      <h1 className='about-head'>About Us</h1>

      <div className="about">
        <div className="about-paragraph">
          <h2>ABOUT THE ORGANISATION:</h2>

          <p><FcAbout /> Bharat's culture is the lifeblood of the nation. It is evident that to protect Bharat, we must <br></br>first nourish its culture.
            If Bharat's culture fades away within its borders, and if Hindu <br></br>society ceases to exist, it would be inappropriate
            to refer to the mere <br></br>geographical entity that remains as Bharat-India.</p>

          <p><FcAbout /> Geographical boundaries alone do not constitute a nation. It is essential for society to be vigilant <br></br>and organized
            so that no one would dare to undermine our values and honor. Strength arises<br></br> from organization. Therefore,
            it is the duty of every individual to contribute to the<br></br> consolidation of Bharat's society.</p>

          <p><FcAbout /> To develop and nurture an appreciation of Indian arts and culture through
            educational<br></br> programmes, cultural orientation programmes, and outreach
            activities for children and<br></br> young people.</p>
        </div>
        <div className="image">
          <img src={image} alt='imges'></img>
        </div>
      </div>
      <div className="information">
        <h1>Trust Information</h1>
        <div className="information-chief">
          <p>R.N: 4192024</p>
          <p>DUI-TN20250502721</p>
          <p>Chief Functionary's Name  :  S.Sampangi</p>
          <p>Chief Functionary's Name  :  S.Yogini M.A.LET</p>
        </div>
      </div>



    </div>
  )
}

export default About
