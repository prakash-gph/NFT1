import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcApproval } from "react-icons/fc";

import "./Donat.css";

const descriptions = {
  "Education": "Education is the key to a brighter future. Your donation helps provide books, school supplies, and scholarships to children in need.",
  "Tree Plantation": "Support tree plantation to create a greener and healthier environment for future generations.",
  "Seminar Class": "Help organize educational and awareness seminars for various social and professional topics.",
  "Sports": "Encourage physical fitness and sportsmanship by supporting sports programs and activities.",
  "Welfare": "Contribute to welfare initiatives aimed at improving community living standards.",
  "Electricity": "Provide electricity to underprivileged areas, bringing light to homes and schools.",
  "Housing": "Help build homes for homeless families, giving them a safe and secure place to live.",
  "Temple Donation": "Support temple maintenance, religious activities, and cultural preservation.",
  "Transgender": "Empower transgender individuals with education, employment, and social inclusion programs.",
  "Disability": "Assist people with disabilities by providing medical aid, support equipment, and accessibility solutions.",
  "Old Age Home": "Ensure elderly individuals receive the care, shelter, and companionship they deserve.",
  "Annadanam-Food": "Donate food to the needy and help eliminate hunger through meal distribution programs.",
  "Children's Home": "Provide shelter, education, and care for orphaned and homeless children.",
  "Medical": "Support medical aid, treatments, and health checkups for those in need.",
  "Yoga": "Promote physical and mental well-being through yoga programs and awareness.",
  "Animal": "Help protect and rescue animals, ensuring their safety and well-being.",
  "Below Poverty": "Guidance of Below Poverty",
  "Transportations": "Support transportation initiatives to improve mobility for underprivileged communities.",
  "Cultural Programmes": "Preserve and promote cultural heritage through events and artistic initiatives.",
  "Library": "Help establish and maintain libraries to encourage education and knowledge-sharing.",
  "Awareness programs": "Awareness is the first step towards change – Act now, make a difference!",
  "Swachh Bharat": "Swasth Bharat – Clean India for a Healthy India!",
  "School": "School is the first step towards turning dreams into reality.",
  "Ex- Army": "Served with honor, living with pride."
};

const DonationPage = () => {

  //** slide images*/
  const slides = [
    { url: 'images/D1.svg' },
    { url: 'images/D2.svg' },
    { url: 'images/D3.svg' },
    { url: 'images/D4.svg' },
    { url: 'images/D5.svg' }
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




  const [focusArea, setFocusArea] = useState("Education");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("Education"); // Default remark
  const navigate = useNavigate();

  // Update remarks when focusArea changes (if the user hasn't manually edited it)
  useEffect(() => {
    setRemarks(focusArea);
  }, [focusArea]);

  const handlePayment = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    console.log(amount + " first")
    const options = {
      key: "rzp_test_WAG2H4yqS0mQLo", // Replace with your Razorpay Key ID
      amount: amount * 100, // Convert to paise (smallest currency unit)
      currency: "INR",
      name: "Nation First Trust",
      description: `Donation for ${focusArea} - Remarks: ${remarks}`,
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "PARGUNAN BHARATHI",
        email: "youremail@example.com",
        contact: "9543934015",
      },
      notes: {
        focusArea: focusArea,
        remarks: remarks,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentGateway = new window.Razorpay(options);
    paymentGateway.open();
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

      <div className="container">
        
        <p><FcApproval/> Select one focus areas from the list below that you wish to support.</p>
        <p><FcApproval/> Proceed to donation and contribute towards the cause of your choice.</p>
        <p><FcApproval/> Your generous support helps us deliver lasting change to those in need.</p>
        <p><FcApproval/> Key Focus Areas of the Trust</p>

      </div>

      <div style={{ margin: "5px 0px" }}>
        <h3 className="donateHead">Focus Areas</h3>

        <div className="focus">
          {Object.keys(descriptions).map((area) => (
            <label className="donate-option" key={area}>
              <input
                type="radio"
                name="focus"
                value={area}
                checked={focusArea === area}
                onChange={() => setFocusArea(area)}
              />
              {area}
            </label>
          ))}
        </div>
      </div>

      <div className="description">
        <h3>Description</h3>
        <p>{descriptions[focusArea]}</p>
        
      </div>

      <div className="amount">
        <h3>Enter Amount (₹)</h3>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="remark">
        <h3>Remarks</h3>
        <input
          type="text"
          placeholder="Enter remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
      </div>

      <div className="bt">
        <button onClick={handlePayment}>Donate <img src="images/rupee.svg"></img> </button>
      </div>
    </div>



  );
};

export default DonationPage;
