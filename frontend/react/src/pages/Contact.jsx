import { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";
const BACKEND_URL = import.meta.env.BACKEND_URL;
const countries = [
  {
    name: 'India',
    code: '+91',
    flag: '🇮🇳',
    pattern: /^\d{10}$/,
    placeholder: '98765 43210'
  },
  {
    name: 'United States',
    code: '+1',
    flag: '🇺🇸',
    pattern: /^\d{10}$/,
    placeholder: '555 555 5555'
  },
  {
    name: 'United Kingdom',
    code: '+44',
    flag: '🇬🇧',
    pattern: /^\d{10,11}$/,
    placeholder: '7911 123456'
  },
]
////////////  mobile number fuctions


const Contact = () => {

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleCountryChange = (e) => {
    const country = countries.find(c => c.code === e.target.value);
    setSelectedCountry(country);
    validatePhoneNumber(phoneNumber, country.pattern);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
    validatePhoneNumber(value, selectedCountry.pattern);
  };

  const validatePhoneNumber = (number, pattern) => {
    setIsValid(pattern.test(number));
  };


  const [data, setData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    city: '',
    message: '',
  })
  const [showContactDetails, setShowContactDetails] = useState(true)
  const [showContactTable, setShowContactTable] = useState(true)
  const [showLoader, setShowLoader] = useState(false)
  // const [showVerifyBox, setVerifyBox] = useState(false)


  const submitMessage = async (e) => {
    e.preventDefault()
    const { name, email, city, message } = data;

    console.log(phoneNumber)
    try {
      if (!name || !email || !phoneNumber || !city || !message) {

        return toast.warning("Fill the all table")

      }
      
      setShowLoader(true)
      const { data } = await axios.post(`${BACKEND_URL}contact-information`, {
        name, email, city, message, phoneNumber
      })

      if (data.error) {
        return toast.error(data.error)
      }

      else {

        setData({})
        toast.success("Successfuly submited ")
        setShowContactTable(false)
        setShowLoader(false)
        setShowContactDetails(true)
        // setVerifyBox(true)
      }

    }
    catch (error) {
      console.log(error)
    }

  }
  // const [otpValue, setOtpValue] = useState("")

  // const verify = async (e) => {
  //   e.preventDefault()

  //   try {
  //     if (!otpValue) {
  //       return toast.warning("fill the Otp box")
  //     }

  //     const { data } = await axios.post("https://nft1-backend.onrender.com/verify-otp", { otpValue })

  //     if (data.error) {
  //       return toast.error(data.error)
  //     }
  //     else {
  //       setOtpValue("")
  //       setVerifyBox(false)
  //       setShowContactDetails(true)
  //       return toast.success("Varification Successfull")

  //     }
  //   }
  //   catch (error) {

  //     return toast.error(`${error.message}, Please reload page.Enter valide Email and Phonenumber`)
  //   }
  // }

  return (
    <> <ToastContainer />

      <div className='cont-background'>
        <img src="images/contact.svg" alt="imges" />
      </div>

      <h1 className='contact-head'>Contact</h1>

      <div className="contact">
        {showContactDetails && <div className="contact-information">

          <h2>Contact Information</h2>

          <p>Mobile: +91-7598378989</p>
          <p>Email: nft.rss.ind@gmail.com</p>
          <p>Call us: 04179-295781</p>
          <h5>Address:</h5>
          <p>No.25, Tholkaran Vattam, Nayanacheruvu,<br></br>
            Natrampalli, Tirupattur, Tamilnadu,
            India.<br></br>Postal code-635852,Phone:04179-295781</p>
         <h5>Contact person's:</h5>
         <p> President: Mr.S.Sampangi</p>
         <p>Mobile:+919952509559</p>
         <p>Admin: Mr.M.Ramesh B.Tech</p>
         <p>Mobile: +919597357250</p>
         
         
          <h5></h5>
        </div>}
        {showContactTable && <div className="contact-message">

          <h1>Send us a message</h1>
          <form onSubmit={submitMessage} autoComplete='off'>
            <input type='text' placeholder='Enter your name' value={data.name || ""}
              onChange={(e) => setData({ ...data, name: e.target.value })}></input>

            <input type='email' placeholder='Enter your email' value={data.email || ""}
              onChange={(e) => setData({ ...data, email: e.target.value })}></input>

            <div>
              <select
                value={selectedCountry.code}
                onChange={handleCountryChange}
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ flex: '1' }}>
              <input className='phone'
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder={"Enter mobile number"}
              />
            </div>

            {!isValid && phoneNumber.length > 0 && (
              <p style={{ color: 'red', fontWeight: "bold" }}>
                Invalid phone number format for {selectedCountry.name}
              </p>
            )}
            <input type='text' placeholder='Enter your city' value={data.city || ""}
              onChange={(e) => setData({ ...data, city: e.target.value })}></input>

            <textarea type='message' placeholder='Write a message' value={data.message || ""}
              onChange={(e) => setData({ ...data, message: e.target.value })}></textarea>

            <button className='btn' type='submit' onClick={submitMessage}>Submit</button>
          </form>

        </div>}
        {/* <div style={{margin:"150px 0px"}}>

        {showVerifyBox && <div className='verify'>
          <input value={otpValue} onChange={(e) => setOtpValue(e.target.value)} ></input>
          <button onClick={verify}>Verify-Otp</button>
        </div>}

        </div> */}
      </div>
      <div className="load">
        {showLoader && <div className="loader"></div>}
      </div>



      {/* <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4403.
       110822304274!2d78.56917803010624!3d12.496511060705243!2m3!1f0!2f0!3f0!
       3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac55ec67cf1adf%3A0xb889f410bec1dece!
        2sTirupathur%20District%20Bus%20Stand!5e1!3m2!1sen!2sin!4v1738574706982!5m2!1sen!2sin"
          width="100%" height="450" allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div> */}


    </>
  )
}

export default Contact
