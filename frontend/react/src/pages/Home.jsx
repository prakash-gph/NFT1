import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";

import "./Home.css"

const BACKEND_URL = import.meta.env.BACKEND_URL;
console.log(BACKEND_URL)

function Home() {

  const slides = [
    { url: 'images/slide0.svg' },
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
      const { data } = await axios.post(`${BACKEND_URL}data`, { name, email });

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
         
          <p>Nation's First Trust (NFT) is dedicated to transforming Bharat<br></br>
            into a developed, self-sustaining nation. We aim to build a foundation <br></br>
            of trust by focusing on sustainable growth, community empowerment, <br></br>
            technological advancement, and innovation. Our wide-ranging initiatives <br></br>
            are carefully designed to enhance social welfare and economic inclusivity.</p>

          <p>Bharat, a land of rich heritage and immense potential, stands <br></br>
            at the cusp of a new era. With its vibrant culture, diverse traditions,<br></br>
            and strong values, it has long been a guiding light of selfless service and <br></br>
            cultural strength. NFT envisions harnessing this collective <br></br> strength to build a
            resilient, self-reliant, and progressive nation.</p>

          <p>NATION'S FIRST TRUST is a registered Charitable Trust. NFT perceives <br></br>
            role as a proactive catalyst in revitalizing cultural sensitivity, nurturing <br></br>
            national identity, and bridging tradition and modernity in today’s interconnected world.</p>

          <h3>-Nation's First Trust </h3>

        </div>

        <div className="images">
          <img src='images/homein.svg'></img>

        </div>

      </div>
      <div className="container1">

        <div className='join-commu'>
          <h5>Nation's First Trust</h5>
          <h4>Get involved in our social welfare and charity<br></br>initiatives</h4>
          <h4>Join our foundation today and start building<br></br> the
            future of our society.</h4>

          <div className="link1">
            <Link className="a" to='/Volunteer'>Become a Volunteer</Link>
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
          <h2>Empowering Lives, Enriching Futures</h2>
          <h4>Building a brighter future, together.</h4>
        </div>
      </div>

      <div className="input-head">
        <h6>Join Us</h6>
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
