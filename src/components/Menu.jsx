import React, { Suspense } from 'react'
import labelmachine from '../pictures/labeling-machine-STS808.png'
import dosingmachine from '../pictures/dozirashti.jpg'
import './Menu.css'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useTranslation } from 'react-i18next'

const translatioinsBg = {
  етикиращиМашини: 'Етикиращи машни',
  дозиращиМашини: 'Дозиращи машни'
}
const translationsEn = {
  етикиращиМашини: 'Labeling Machines',
  дозиращиМашини: 'Dosing Machines'
}

i18n.use(initReactI18next).init({
  resources: {
    bg: { translation: translatioinsBg },
    en: { translation: translationsEn }
  },
  lng: 'bg',
  fallbackLng: 'bg',
  interpolation: { escapeValue: false }
})

function Menu() {
  const { t } = useTranslation()

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Suspense fallback="Loading...">
      <div className="menu">
        <Link to="/labeling-machines" className="labelMach">
          <span className="title">
            <h3>{t('етикиращиМашини')}</h3>
          </span>
          <span className="imgWrap">
            <img src={labelmachine} alt="lalbel-machine" className="image" />
          </span>
        </Link>

        <Link to="/dosing-machines" className="labelMach">
          <span className="title">
            <h3>{t('дозиращиМашини')}</h3>
          </span>
          <span className="imgWrap">
            <img src={dosingmachine} alt="dosing-machine" className="image" />
          </span>
        </Link>
        {/* <select name="language" onChange={onChange}>
          <option value="bg">Bulgarian</option>
          <option value="en">English</option>
        </select> */}
      </div>
    </Suspense>
  )
}

export default Menu
