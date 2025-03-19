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
