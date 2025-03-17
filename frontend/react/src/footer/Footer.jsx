import React from 'react'
import {FaFacebook, FaHeart, FaInstagram, FaYoutube} from "react-icons/fa"
import "../footer/footer.css"

const Footer = () => {
    return (
        <div className='fo'>
            <footer>
                {/* <div className='foote-col'>
                    <h4>Dharma Seva Trust</h4>
                    <p>(Registered Charitable Trust)<br></br><br></br>
                        16/11, E-Block, Udhayam Enclave,<br></br>
                        Dr. Natesan Salai, Ashok Nagar,<br></br>
                        Chennai - 600 083
                        Tamil Nadu, India</p>   
                </div> */}
                <div className='foote-col'>
                    <h4>Information</h4>
                    <ul>
                        <li><a href='/About'>About Us</a></li>
                        <li><a href='/Mission'>Mission & Vision</a></li>
                        <li><a href="/Project">Project</a></li>
                        <li><a href='#'>Events</a></li>
                        <li><a href="/Become a volunteer">Become a Volunteer</a></li>
            
                        <li><a href='/Donation'>Donate Now</a></li>
                    </ul>

                </div>
               
                <div className='foote-col'>
                    <h4>Contact Information</h4>
                    <h5>Mobile: +91-7904154189</h5>
                    <h5>Email: info@nationfirsttrust.in</h5>
                    <h5>Website: www.nationfirsttrust.in</h5>
                    <div className='foot-icon'>
                    <a href='#'><FaFacebook/></a>
                    <a href='#'><FaInstagram/></a>
                    <a href='#'><FaYoutube/></a>
                </div>
                </div>
            </footer>
            <div className='copy'>
                <div style={{fontSize:"15px"}}>
                    <h6>Copyright © Nation's First Trust - All Rights Reserved</h6>
                </div>
                <div className="privacy-policy">
                    <a href='#'>Privacy policy </a>-------
                    <a href='#'>Terms & Conditions</a>
                </div>
                </div>

        </div>
    )
}

export default Footer
