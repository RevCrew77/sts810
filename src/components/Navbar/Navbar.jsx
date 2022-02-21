import React from 'react';
import logo from "../../pictures/stsLogo.png"
import bg from "../../pictures/flag_bg.jpg"
import en from "../../pictures/flag_en.jpg"
import "../Navbar/Navbar.css"

function Navbar() {
  return (
    <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <section className="lang">
          <a href="#" id="bgFlag">
            <img src={bg} alt="bg" className="bg" />
          </a>
        
          <a href="#" id="enFlag">
            <img src={en} alt="en" className="en" />
          </a>
        </section>
      </div>
  )
}

export default Navbar