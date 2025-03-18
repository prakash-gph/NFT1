import React from 'react'
import {Link} from "react-router-dom"
import {FaFacebook,FaInstagram, FaYoutube} from "react-icons/fa"
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
                        <li><Link className='a' to='/About'>About Us</Link></li>
                        <li><Link className='a' to='/Mission'>Mission & Vision</Link></li>
                        <li><Link className='a' to="/Project">Project</Link></li>
                        <li><Link className='a' to='/Events'>Events</Link></li>
                        <li><Link className='a' to="/Become a volunteer">Become a Volunteer</Link></li>
                        <li><Link className='a' to='/Donation'>Donate Now</Link></li>
                    </ul>

                </div>
               
                <div className='foote-col'>
                    <h4>Contact Information</h4>
                    <h5>Mobile: +91-7904154189</h5>
                    <h5>Email: info@nationfirsttrust.in</h5>
                    <h5>Website: www.nationfirsttrust.in</h5>
                    <div className='foot-icon'>
                    <Link to='#'><FaFacebook/></Link>
                    <Link to='#'><FaInstagram/></Link>
                    <Link to='#'><FaYoutube/></Link>
                </div>
                </div>
            </footer>
            <div className='copy'>
                <div style={{fontSize:"15px"}}>
                    <h6>Copyright © Nation's First Trust - All Rights Reserved</h6>
                </div>
                <div className="privacy-policy">
                    <Link to='#'>Privacy policy </Link>-------
                    <Link to='#'>Terms & Conditions</Link>
                </div>
                </div>

        </div>
    )
}

export default Footer
