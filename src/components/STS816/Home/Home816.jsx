import React from 'react'
import sts816 from '../../../pictures/sts816-labeling.jpg'
import './Home816.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TranslateContextComponent } from '../../TranslateContextComponent'

function Home816() {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <img src={sts816} alt="machine" className="sts816img" />
      <p className="paragraph">{t('calc816a')}</p>

      <section className="buttons">
        <Link to="/labeling-machines/STS816/1-label" className="label1">
          {t('label1')}
        </Link>
        <Link to="/labeling-machines/STS816/2-labels" className="label2">
          {t('label2')}
        </Link>
      </section>
    </div>
  )
}

export default Home816
