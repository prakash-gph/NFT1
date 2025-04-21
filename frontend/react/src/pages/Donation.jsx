import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";

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
      toast.warning("Please enter a valid amount.");
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
        toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
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
      <ToastContainer />


      <div className="container">
        <div>
        <h3>Donate Process.</h3>
        <p><FcApproval /> Select focus areas from the list below that you wish to support.</p>
        <p><FcApproval /> Proceed to donation and contribute towards the cause of your choice.</p>
        <p><FcApproval /> Your generous support helps us deliver lasting change to those in need.</p>      
        </div>
        <div className="container-image">
          <img src="images/donate-side.svg" alt="image"></img>
        </div>

      </div>

      <div style={{ margin: "5px 0px" }}>
        <h3 className="donateHead">Richness Begins With Giving.</h3>

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
        {/* <h3>Description</h3>
        <p>{descriptions[focusArea]}</p> */}
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
        <h3>Donation Details</h3>
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
      <div className="description-address">
        <h6>NATIONS FIRST TRUST</h6>
        <h6>UNION BANK OF INDIA </h6>
        <h6>Account Number: 333802010461947</h6>
        <h6>IFSC code: UBIN0533386</h6>
        <h6>Natrampalli branch</h6>
        <hr />
        <h4>Address:</h4>
        <p>69/3, Main Road, Natrampalli,Dist. Vellore, Tamil Nadu, PIN - 635852</p>
        <h4>State:</h4>
        <p>Tamil Nadu</p>
        <h4>District:</h4>
        <p> Vellore "Union Bank of India in "Vellore" District</p>
        <h4>Branch:</h4>
        <p>Natrampalli</p>
        <h4>IFSC code:</h4>
        <p>UBIN0533386 (used for RTGS, IMPS and NEFT transactions)</p>
        <h4>Branch Code:</h4>
        <p>Last six characters of IFSC Code represent Branch code</p>
        <h4>MICR Code:</h4>
        <p>635026103</p>
      </div>


    </div>



  );
};

export default DonationPage;
