import React from 'react'
import image from "/images/23.jpg"
import { FcAbout } from "react-icons/fc";

import "./About.css"

const About = () => {
  return (
    <div>
      <div className="aboutImages">
       <img src='images/19.svg' alt='imges'></img>
       <h1>About Us</h1> 
      </div>
      <div className="about">
        <div className="about-paragraph">
          <h2>ABOUT THE ORGANISATION:</h2>

          <p><FcAbout /> The DHARMA SEVA TRUST (DST) means “to hold together”. The need to create,<br></br>
            to discover, to imagine is universal and requires expression and therefore support.</p>

          <p><FcAbout /> The purpose of DST is to cultivate an environment for the preservation and<br></br>
            development of artistic and cultural expressions not only of India but also<br></br> of the world as a whole.</p>
          <p><FcAbout /> Established in June 2021, the DHARMA SEVA TRUST is a registered Public <br></br>
            Charitable Trust based in Chennai, Tamil Nadu, India. DST perceives its role <br></br>
            as that of a catalyst, in revitalizing cultural sensitivity in contemporary times <br></br>
            and promoting Sanskrit at all levels FREE OF COST irrespective of<br></br>
            gender, creed, and religion.</p>
        </div>
        <div className="image">
          <img src={image} alt='imges'></img>
        </div>
      </div>
      <div className="table1">
        <h1>NGO Information</h1>
        <div className="table2">
          <table className='tables'>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trust Registration No & Date</td>
                <td>4/44/2021, dated 09/06/2021</td>
              </tr>
              <tr>
                <td>Darpan Unique ID</td>
                <td>TN/2021/0295794</td>
              </tr>
              <tr>
              <td>Chief Functionary’s Name</td>
              <td>Dr. V Raghavendran</td>
              </tr>
              <tr>
                <td>Chief Functionary’s Name</td>
                <td>Dr. V Raghavendran</td>
              </tr>
              <tr>
                <td>Income Tax Exemption Certificate 80G</td>
                <td>AADTD8335J24CH02, dated 09-08-2024</td>
              </tr>
               
            </tbody>

          </table>
        </div>
      </div>



    </div>
  )
}

export default About
