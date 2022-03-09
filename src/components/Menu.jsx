import React, { Suspense } from 'react'
import labelmachine from '../pictures/labeling-machine-STS808.png'
import dosingmachine from '../pictures/dozirashti.jpg'
import './Menu.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Menu() {
  const { t } = useTranslation()

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
      </div>
    </Suspense>
  )
}

export default Menu
