import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import "../footer/footer.css"

const Footer = () => {
    return (
        <div className='fo'>
            <footer>
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
                    <h5>Call us: 04179-295781</h5>
                    <h5>Mobile: +917598378989</h5>
                    <h5>Email: nft.rss.ind@gmail.com</h5>
                    <h5>Website: www.nationfirsttrust.in</h5>
                    <div className='foot-icon'>
                        <Link className='a' to='#'><FaFacebook /></Link>
                        <Link className='a' to='#'><FaInstagram /></Link>
                        <Link className='a' to='#'><FaYoutube /></Link>
                    </div>
                </div>
            </footer>
            <div className='copy'>
                <div style={{ fontSize: "15px" }}>
                    <h6>Copyright © Nation's First Trust - All Rights Reserved</h6>
                </div>
                <div className="privacy-policy">
                    <Link className="a" to='#'>Privacy policy </Link>-------
                    <Link className='a' to='#'>Terms & Conditions</Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
