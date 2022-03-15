import React, { useState } from 'react'
import logo from '../../pictures/stsLogo.png'
import bg from '../../pictures/flag_bg.jpg'
import en from '../../pictures/flag_en.jpg'
import '../Navbar/Navbar.css'
import i18n from 'i18next'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useNavigate } from 'react-router-dom'

function getLanguage() {
  return i18n.language || window.localStorage.i18nextLng
}

function Navbar() {
  const [lang, setLang] = useState(getLanguage())

  const onClickSwitch = (lang) => {
    setLang(lang)
    i18n.changeLanguage(lang)
  }

  const navigate = useNavigate()

  function handleClick(event) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      MUI
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/getting-started/installation/" onClick={handleClick}>
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>
  ]

  return (
    <div className="header">
      <section className="logo">
        <img src={logo} alt="logo" className="logo" />
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </section>
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
