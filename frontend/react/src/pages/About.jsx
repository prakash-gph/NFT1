
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
          <h2>ABOUT THE ORGANISATION:-</h2>

          <p><FcAbout />Bharat's culture is its lifeblood — a timeless source of identity, unity, and strength.
            <br></br>To truly preserve the spirit of Bharat,
            we must first nurture its cultural roots.<br></br>
            If the richness of our culture fades within our own borders,
            and if Hindu society<br></br> is no longer upheld, then what remains would
            merely be a geographical expression<br></br> not the true Bharat-India we revere.<br></br>
          </p>


          <p><FcAbout />Geographical boundaries alone do not define a nation. It is the shared values<br></br>
            traditions, and collective spirit of the people that breathe life into a country.<br></br>
            Therefore, it is vital for our society to remain vigilant, united,
            and well-organized<br></br> for from unity comes strength. When we stand together in purpose and pride
            <br></br> no force can undermine our honor or our heritage.</p>


          <p><FcAbout />It is the responsibility of every individual to contribute to the strengthening <br></br>and
            consolidation of Bharat’s social fabric. One meaningful path is through <br></br> fostering appreciation
            for Indian arts and culture. By promoting educational <br></br>programs, cultural orientation sessions,
            and outreach activities for children<br></br> and youth,we can inspire a deep connection to our roots
            and ensure that <br></br>our legacy lives on for generations to come.

          </p>

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
