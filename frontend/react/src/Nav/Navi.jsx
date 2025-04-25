import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/love.png"
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from "react-icons/go";
import "./Nav.css"

const Navi = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false)

  const menuRef = useRef()
  useEffect(() => {

    let handler = (e) => {

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowSideBar(false)
      }
    };
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  });

  return (
    <>

      <nav className='navbar'>
        <div className='logo '>
          <img className="" src={logo} alt='logo'></img>
        </div>
        <div className='title'>
          <h4>தேசமே ! பிரதானம் !</h4>
          <Link className='a' to='/'>NATION'S FIRST TRUST</Link>
          <p>Service to Mankind</p>
        </div>

        <div className='mobile-view'>
          <ul className='nav-link'>
            <li><NavLink to='/'>Home</NavLink></li>

            <li onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}>
              <p>About<i><GoChevronDown /></i></p>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  < Link className='a' to="/About">About Us</Link>
                  <Link className='a' to="/Board of trustees">Board of trustees</Link>
                  <Link className='a' to="/Mission">Mission & Vision</Link>
                  <Link className='a' to="/Volunteer">Volunteer</Link>
                </div>
              )}
            </li>
            <li><NavLink to="/Project">Project</NavLink></li>
            <li><NavLink to="/Events">Events</NavLink></li>
            <li><NavLink to="/Gallery">Gallery</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            
             <Link className='dona' to="/Donation"><span>Donation🤍</span></Link>
             
          </ul>
        </div>
        {showSideBar && <div className='mobile-views' >
          <ul className='nav-link' ref={menuRef}>
            <li><NavLink to='/'>Home</NavLink></li>

            <li onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}>
              <p>About<i><GoChevronDown /></i></p>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <Link className='a' to="/About">About Us</Link>
                  < Link className='a' to="/Board of trustees">Board of trustees</Link>
                  <Link className='a' to="/Mission">Mission & Vision</Link>
                  <Link className='a' to="/Volunteer">Volunteers</Link>
                </div>
              )}
            </li>
            <li><NavLink to="/Project">Project</NavLink></li>
            <li><NavLink to="/Events">Events</NavLink></li>
            <li><NavLink to="/Gallery">Gallery</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
             
             <Link className='dona' to="/Donation"><span>Donation🤍</span></Link>

          </ul>
        </div>}
        <div className="iconsbar">
          <FaBars
            onClick={(e) => setShowSideBar(!showSideBar)}
          />
        </div>
      </nav>


      <div className='nav2'>

      </div>


    </>

  );
}

export default Navi
