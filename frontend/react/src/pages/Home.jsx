import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "./Home.css"

function Home() {
  const slides = [
    { url: 'images/slide1.svg' },
    { url: 'images/slide2.svg' },
    { url: 'images/slide3.svg' },
    { url: 'images/slide4.svg' },
    { url: 'images/slide5.svg' }
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


  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      return toast.warning("Must required name and email");
    }

    try {
      const { data } = await axios.post("https://nft1-backend.onrender.com/data", { name, email });

      if (data.error) {
        return toast.error(data.error);
      }
      else {
        setemail("");
        setname("");
        toast.success("Successfuly submit");
      }

    }

    catch (error) {
      console.log(error);
    }


  };
  return (

    <div>
      <ToastContainer />
      <div className="slides">

        <div className="slider-container">
          <div className="slider">
            <div className="slides-container"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  className="slide"
                  key={index}
                  style={{ backgroundImage: `url(${slide.url})` }}

                ></div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <div className="left-arrow" onClick={goToPrevious}>&#10094;</div>

          {/* Right Arrow */}
          <div className="right-arrow" onClick={goToNext}>&#10095;</div>

          {/* Dots Indicator */}
          <div className="dots-container">
            {slides.map((_slide, slideIndex) => (
              <div
                className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>




      <div className="container-paragraph">
        <div className="paragraph">
          <h1>Who We Are</h1>

          <p>Nation's First Trust (NFT) is dedicated to transforming Bharat into a<br></br> developed nation.
            We aim to build a foundation of trust and progress <br></br>by focusing on sustainable growth,
            community empowerment,<br></br> and innovation. Our initiatives are designed to enhance social welfare.
          </p>
          <p>Bharat, a land of rich heritage and immense potential,stands at the cusp <br></br>of a new era.
            With its vibrant culture, diverse traditions, and <br></br>strong values,
            it has always been a beacon of wisdom and resilience.
            NFT<br></br> envisions harnessing this strength to build a self-reliant and progressive nation.
          </p>

          <p>Established in June 2021, the NATION'S FIRST TRUST is a registered <br></br>Public Charitable Trust
            based in Chennai, Tamil Nadu, India
            NFT<br></br> perceives its role as that of a catalyst in revitalizing cultural<br></br> sensitivity in contemporary times
            as that of a catalyst,<br></br> in revitalizing cultural sensitivity in contemporary times</p>

        </div>

        <div className="images">
          <img src='images/homein.svg'></img>
        
        </div>

      </div>
      <div className="container1">

        <div className='join-commu'>
          <h5>Join Our Community</h5>
          <h4>Get involved into the charity projects.</h4>
          <h4>Join our foundation today and start building the <br></br>future of our society and the community of<br></br> tomorrow.</h4>

          <div className="link1">
            <Link className="a" to='/Become a volunteer'>Become a Volunteer</Link>
          </div>
          <div className="link2">
            <Link className="a" to='/Donation'>Make a Donation</Link>
          </div>

        </div>
        <img src='images/homejoin.svg'></img>
      </div>

      <div className="background-image">
        <div className="backgroun-image-head">
          <h5>Testimonials</h5>
          <h2>Happy Beneficiaries</h2>
          <h4>Building a brighter future, together.</h4>
        </div>
      </div>

      <div className="input-head">
        <h6>Newsletter</h6>
        <h3>Sign up to hear from us about our new activities.</h3>
      </div>

      <div className="input-box">
        <form onSubmit={onsubmit} autoComplete='off'>
          <input className='btn1' type="text" placeholder='Enter Name' value={name}
            onChange={((e) => (setname(e.target.value)))} />

          <input className="btn2" type='Email' placeholder='Enter Email' value={email}
            onChange={((e) => (setemail(e.target.value)))} />

          <button onClick={onsubmit}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Home
