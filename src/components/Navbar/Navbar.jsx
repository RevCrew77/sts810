import React, { useContext, Suspense } from 'react'
import logo from '../../pictures/stsLogo.png'
import bg from '../../pictures/flag_bg.jpg'
import en from '../../pictures/flag_en.jpg'
import '../Navbar/Navbar.css'
import i18n from 'i18next'


function Navbar() {

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }

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
      <select name="language" onChange={onChange}>
          <option value="bg">Bulgarian</option>
          <option value="en">English</option>
        </select>
    </div>
  )
}

export default Navbar
