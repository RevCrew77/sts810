import React, { useState } from 'react'
import logo from '../../pictures/stsLogo.png'
import bg from '../../pictures/flag_bg.jpg'
import en from '../../pictures/flag_en.jpg'
import '../Navbar/Navbar.css'
import i18n from 'i18next'

function getLanguage() {
  return i18n.language || window.localStorage.i18nextLng
}

function Navbar() {
  const [lang, setLang] = useState(getLanguage())

  const onClickSwitch = (lang) => {
    setLang(lang)
    i18n.changeLanguage(lang)
  }


  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <section className="lang">
        <div onClick={() => onClickSwitch('bg')} style={lang === 'bg' ? { opacity: 0.5 } : {}}>
          <img src={bg} alt="bg" className="bg" />
        </div>
        <div onClick={() => onClickSwitch('en')} style={lang === 'en' ? { opacity: 0.5 } : {}}>
          <img src={en} alt="en" className="en" />
        </div>
      </section>
    </div>
  )
}

export default Navbar