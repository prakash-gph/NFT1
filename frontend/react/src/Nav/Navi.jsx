import React from 'react'
import {NavLink } from 'react-router-dom'
import logo from "../assets/love.png"
import { FaBars } from "react-icons/fa";
import { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import "./Nav.css"

const Navi = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSideBar,setShowSideBar] = useState(false)

  return (
    <>
      
      <nav className='navbar'>
        <div className='logo '>
          <img className="" src={logo} alt='logo'></img>
        </div>
        <div className='title'>
          <a href='#'>NATION'S FIRST TRUST</a>
          <p>service to mankind</p>
        </div>

        <div className='mobile-view'>
          <ul className='nav-link'>
            <li><NavLink to='/'>Home</NavLink></li>

            <li onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}>
              <p>About<i><GoChevronDown/></i></p>
             {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/About">About Us</a>
              <a href="/Board of turstees">Board of turstees</a>
              <a href="/link3">Link 3</a>
            </div>
          )}
              </li>
            <li><NavLink to="/Project">Project</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/Events">Events</NavLink></li>
            <li className=' container-d-sm-inline-grid '><NavLink to="/Donation">Donation</NavLink></li>
          </ul>
        </div>


         {showSideBar && <div className='mobile-views'>
          <ul className='nav-link'>
            <li><NavLink to='/'>Home</NavLink></li>

            <li onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}>
              <p>About<i><GoChevronDown/></i></p>
             {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/About">About Us</a>
              <a href="/Board of turstees">Board of turstees</a>
              <a href="/link3">Link 3</a>
            </div>
          )}
              </li>
            <li><NavLink to="/Project">Project</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/Events">Events</NavLink></li>
            <li className=' container-d-sm-inline-grid'><NavLink to="/Donation">Donation</NavLink></li>
          </ul>
        </div> } 
        <div  className="iconsbar">
          <FaBars onClick={()=>setShowSideBar(!showSideBar)}/>
        </div>
      </nav> 


      <div className='nav2'>
  
      </div>


    </>

  );
}

export default Navi
