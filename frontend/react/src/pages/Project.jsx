import React, { useEffect, useState } from 'react'
// import { FcBookmark } from "react-icons/fc";
// import { FcSportsMode } from "react-icons/fc";
// import image from "/images/barat-Mata2.svg"
import "./OurActivities.css"


const Project = () => {



  //** slide images*/
  const slides = [
    { url: 'images/D1.svg' },
    { url: 'images/D2.svg' },
    { url: 'images/D3.svg' },
    { url: 'images/D4.svg' },
    { url: 'images/D5.svg' },
    { url: 'images/project.svg' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;

    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <div>

      <div className="slides2">

        <div className="slider-container2">
          <div className="slider2">
            <div className="slides-container2"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  className="slide2"
                  key={index}
                  style={{ backgroundImage: `url(${slide.url})` }}

                ></div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <div className="left-arrow2" onClick={goToPrevious}>&#10094;</div>

          {/* Right Arrow */}
          <div className="right-arrow2" onClick={goToNext}>&#10095;</div>

          {/* Dots Indicator */}
          <div className="dots-container2">
            {slides.map((_slide, slideIndex) => (
              <div
                className={`dot2 ${slideIndex === currentIndex ? 'active' : ''}`}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>



      <h1 className='project-head'>Project</h1>

      <div className="pdf-link">
        <a href="src\assets\nft.pdf" target="_blank" rel="noopener noreferrer">
          <button className="open-pdf-button">NATION'S FIRST TRUST
            <li></li>CLIK TO VIEW </button>
        </a>
</div>

        { /*
      <div className="activities-paragraph">
        <div className="paragraph">

          <h2>Bharat Needs Projects: The Role of Nation First Trust in<br></br>Driving Development</h2>

          <p>India, or Bharat, stands at the crossroads of unprecedented growth and challenges.
            With a rapidly growing population, increasing urbanization, and a surge in
            technological advancements, the country requires structured and impactful projects
            to sustain its progress. Recognizing this urgent need, Nation First Trust is stepping
            forward to bring transformational change by initiating and supporting projects that
            address critical sectors of development.</p>

          <h3> Why Bharat Needs Projects?</h3>

          <p><FcSportsMode />Bharat is a land of immense potential, yet it faces several socio-economic<br></br>
            hurdles that hinder its path to becoming a global powerhouse.<br></br>Focused projects are essential for:</p>

          <div className="activities-image">

            <img src="images/education.svg" alt="image" />
          </div>

          <h3>Infrastructure Development:</h3>

          <p><FcSportsMode />Modernized roads, bridges, smart cities,and efficient transport systems to <br></br>facilitate trade and daily life.</p>


          <h3>Education & Skill Development:</h3>

          <p><FcSportsMode />Quality education and vocational training for youth to contribute effectively <br></br>to the workforce.</p>

          <h3>Employment Generation:</h3>

          <p><FcSportsMode />nnovative projects in agriculture, manufacturing, and technology to create<br></br>sustainable job opportunities.</p>

          <h3>Renewable Energy Expansion:</h3>

          <p><FcSportsMode />Shifting towards clean energy sources for environmental sustainability and<br></br>reducing dependency on fossil fuels</p>

          <h3>Health & Sanitation:</h3>

          <p><FcSportsMode />Ensuring healthcare accessibility and sanitation projects to improve quality<br></br>of life, especially in rural areas.</p>

          <h3> Rural Development:</h3>

          <p><FcSportsMode />Strengthening rural economies through agriculture, self-employment, and<br></br>digital connectivity for holistic national growth.</p>

          <h2>The Role of Nation First Trust</h2>

          <p>Nation First Trust is committed to spearheading impactful projects that align
            <br></br>with the vision of a self-reliant and progressive Bharat.<br></br>Our focus areas include:</p>


          <div className="activities-image">
            <img src={image} alt='image' ></img>
          </div>


          <h3>Economic Upliftment:</h3>

          <p><FcSportsMode /> Implementing programs to support MSMEs, startups, and self-employment<br></br>initiatives.</p>

          <h3>Educational Reforms:</h3>

          <p><FcSportsMode />Partnering with institutions to enhance digital literacy and skill development.</p>

          <h3>Sustainable Development:</h3>

          <p><FcSportsMode />Promoting eco-friendly solutions, waste management, and water<br></br>conservation projects</p>

          <h3>Social Welfare Initiatives:</h3>

          <p><FcSportsMode />Engaging in healthcare outreach, women empowerment programs, and<br></br>support for underprivileged communities.</p>

          <h3>Rural Empowerment:</h3>

          <p><FcSportsMode />Focusing on agricultural innovations, rural entrepreneurship,<br></br>decentralized renewable energy solutions, and improved access to<br></br>
            healthcare and education in remote areas.</p>

          <h2>Call to Action</h2>
          <p><FcBookmark />Bharat’s progress depends on the collective efforts of its people.
            Nation First Trust <br></br>invites individuals, corporations, and policymakers
            to collaborate and contribute to this <br></br>mission. Whether through financial support, volunteering, or innovative ideas, <br></br>every contribution can make a difference.</p>

        </div>
      </div>
     */}

      </div>
      )
}

      export default Project
