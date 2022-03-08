import React from 'react'
import sts808 from '../../../pictures/labeling-machine-STS808.png'
import './Home808.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import {TranslateContextComponent} from '../../TranslateContextComponent';

function Home808() {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <img src={sts808} alt="machine" />
      <p className="paragraph">{t('calc808')}</p>

      <section className="buttons">
        <Link to="/labeling-machines/STS808/1-label" className="label1">
          {t('label1')}
        </Link>
        <Link to="/labeling-machines/STS808/2-labels" className="label2">
          {t('label2')}
        </Link>
      </section>
    </div>
  )
}

export default Home808
