import React, { useState } from 'react'
import Slider from './slideDatas/Sliders';
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "./Home.css"


const Home = () => {
  const slides = [
    { url: 'images/01.svg' },
    { url: 'images/INDIA.svg' },
    { url: 'images/222.svg' }
  ];

  const [name, setname] = useState("")
  const [email, setemail] = useState("")

  const onsubmit = async (e) => {
    e.preventDefault()

    if (!name || !email) {
      return toast.warning("Must required name and email")
    }

    try {
      const { data } = await axios.post("http://localhost:1200/data", { name, email })

      if (data.error) {
        return toast.error(data.error)
      }
      else {
        setemail("")
        setname("")
        toast.success("Successfuly submit")
      }

    }

    catch (error) {
      console.log(error)
    }


  }
  return (

    <div>

      <ToastContainer />
      <div className="slides">
        <Slider slides={slides} />
      </div>
      <div className="container-paragraph">
        <div className="paragraph">
          <h6>About</h6>
          <h1>Nation's First Trust</h1>

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

        <div className="images" style={{ backgroundImage: "url(/images/18.svg)" }}>
          <h6>Nation's First Trust</h6>
          <h5>Dedicated towards promoting Arts & Culture</h5>
        </div>

      </div>
      <div className="container1">


        <div className='join-commu'>
          <h5>Join Our Community</h5>
          <h1>Get involved into the charity<br></br>projects.</h1>
          <h4>Join our foundation today and start building the <br></br>future of our society and the community of<br></br> tomorrow.</h4>

          <div className="link1">
            <a href='/Become a volunteer'>Become a Volunteer</a>
          </div>
          <div className="link2">
            <a href='/Donation'>Make a Donation</a>
          </div>

        </div>
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
  )
}

export default Home
