import React from 'react'
import { Link } from 'react-router-dom'
import dosing from '../../pictures/dozirashti.jpg'
import './DosingMachines.css'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

function DosingMachines() {
  const { t } = useTranslation()

  return (
    <div className="dosing">
      <div className="sts809">
        <Link to="#" className="linkTo">
          <h3>
            <Trans components={{ br: <br />, strong: <strong /> }}>{t('sts809')}</Trans>
          </h3>
          <span className="imgWraper">
            <img src={dosing} alt="Dosing machine" />
          </span>
        </Link>
      </div>
      <div className="sts809">
        <Link to="#" className="linkTo">
          <h3>
            <Trans components={{ br: <br />, strong: <strong /> }}>{t('sts812')}</Trans>
          </h3>
          <span className="imgWraper">
            <img src={dosing} alt="Dosing machine" />
          </span>
        </Link>
      </div>
      <div className="sts809">
        <Link to="#" className="linkTo">
          <h3>
            <Trans components={{ br: <br />, strong: <strong /> }}>{t('sts811G')}</Trans>
          </h3>
          <span className="imgWraper">
            <img src={dosing} alt="Dosing machine" />
          </span>
        </Link>
      </div>
      <div className="sts809">
        <Link to="#" className="linkTo">
          <h3>
            <Trans components={{ br: <br />, strong: <strong /> }}>{t('sts813G')}</Trans>
          </h3>
          <span className="imgWraper">
            <img src={dosing} alt="Dosing machine" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default DosingMachines
