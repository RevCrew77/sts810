import React from 'react'
import { Link } from 'react-router-dom'
import sts808 from '../../pictures/labeling-machine-STS808.png'
import sts810 from '../../pictures/sts810.jpg'
import './MainPage.css'
import sts816 from '../../pictures/sts816-labeling.jpg'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
// import {TranslateContextComponent} from '../TranslateContextComponent'

function MainPage() {
  const { t } = useTranslation();
  

  return (
    <div className="app">
      <div className="sts808">
        <Link to="/labeling-machines/STS808" className="link">
          <h3>
            <Trans components={{br: <br />, strong: <strong />}}>{t('sts808')}</Trans>
          </h3>
          <span className="imageWrapper">
            <img src={sts808} alt="sts-808-machine" />
          </span>
        </Link>
      </div>

      <div className="sts810">
        <Link to="/labeling-machines/STS810" className="link">
          <h3>
          <Trans components={{br: <br />, strong: <strong />}}>{t('sts810')}</Trans>
          </h3>
          <span className="imageWrapper">
            <img src={sts810} alt="sts-808-machine" />
          </span>
        </Link>
      </div>

      <div className="sts816">
        <Link to={'/STS816'} className="link">
          <h3>
          <Trans components={{br: <br />, strong: <strong />}}>{t('sts816')}</Trans>
          </h3>
          <span className="imageWrapper">
            <img src={sts816} alt="sts-816-machine" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default MainPage
