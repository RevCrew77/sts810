import React from 'react'
import sts810 from '../../../pictures/sts810.jpg'
import './Home.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TranslateContextComponent } from '../../TranslateContextComponent';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <img src={sts810} alt="machine" />
      <p className="paragraph">{t('calc810a')}</p>

      <section className="buttons">
        <Link to="/labeling-machines/STS810/1-label" className="label1">
          {t('label1')}
        </Link>
        <Link to="/labeling-machines/STS810/2-labels" className="label2">
          {t('label2')}
        </Link>
      </section>
    </div>
  )
}

export default Home
