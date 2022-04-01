import React, { useState, useEffect } from 'react'
import { Alert } from '@mui/material'
import CountUp from 'react-countup'
import onelabel from '../../../pictures/sts808-1label.png'
import './OneLabel.css'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import { TranslateContextComponent } from '../../TranslateContextComponent'

function OneLabel() {
  const [empty, setEmpty] = useState('')
  const [first, setFirst] = useState('')
  const [diameter, setDiameter] = useState('')

  const [resultA, setResultA] = useState('')
  const [time, setTime] = useState('')

  const [open, setOpen] = useState({ empty: false, first: false, diameter: false })

  useEffect(() => {
    const _empty = +empty
    const _first = +first
    const _diameter = +diameter

    if (_empty && !(_empty > 2.5 && _empty < 60)) setOpen((open) => ({ ...open, empty: true }))
    else setOpen((open) => ({ ...open, empty: false }))

    if (_first && !(_first > 25 && _first < 520)) setOpen((open) => ({ ...open, first: true }))
    else setOpen((open) => ({ ...open, first: false }))

    if (_diameter && !(_diameter > 25 && _diameter < 160)) setOpen((open) => ({ ...open, diameter: true }))
    else setOpen((open) => ({ ...open, diameter: false }))

    if (_empty !== 0 && _first !== 0 && _diameter !== 0) {
      let x1 = 100 - _first - _empty / 2
      let offset = 0
      if (x1 < 0) {
        offset = 100
      } else if (x1 === 0) {
        offset = 1
      } else {
        let x2 = x1 - _first - _empty
        if (x2 < 0) {
          offset = x1
        } else if (x2 === 0) {
          offset = 1
        } else {
          let x3 = x2 - _first - _empty
          if (x3 < 0) {
            offset = x2
          } else if (x3 === 0) {
            offset = 1
          } else {
            let x4 = x3 - _first - _empty
            if (x4 < 0) {
              offset = x3
            } else if (x4 === 0) {
              offset = 1
            } else {
              offset = x4
            }
          }
        }
      }
      if (_first === 100) {
        offset = 97
      }
      setResultA(offset)
      let T = (_diameter * 3.1416) / 88.2

      setTime(T.toFixed(2))
    }
  }, [first, diameter, empty])

  const { t } = useTranslation()

  return (
    <div className="calcS">
      <form action="submit" className="forma">
        <img src={onelabel} alt="label" className="imageLabel" />
        <div className="divDescr">
          <span className="descr">{t('ЛентаСЕтикети')}</span>
          <span className="descr1">{t('Етикет')}</span>
          <span className="descr2">{t('Съд')}</span>
        </div>
        <div className="labelcontainer">
          <div className="labelcalc">
            <span className="label">L0&nbsp;=</span>
            <div className="labelInpt">
              <label htmlFor="l0">{t('ПроцепМуЕтикет')}</label>
              <input
                name="l0"
                min={2}
                max={60}
                className="a"
                onChange={(e) => setEmpty(e.target.value)}
                value={empty}
                type="number"
              />
              {open.empty && (
                <Alert severity="error" variant="filled" className="alrt">
                  2.5 {'<'} L0 {'<'} 60mm
                </Alert>
              )}
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">L&nbsp;=&nbsp;&nbsp;</span>
            <div className="labelInpt">
              <label htmlFor="L">{t('Дължина')}</label>
              <input name="L" className="a" onChange={(e) => setFirst(e.target.value)} value={first} type="number" />
              {open.first && (
                <Alert severity="error" variant="filled" className="alrt">
                  25 {'<'} L {'<'} 520mm
                </Alert>
              )}
            </div>
            <span className="mm">mm</span>
          </div>
          <div className="labelcalc">
            <span className="label">D&nbsp;=&nbsp;&nbsp;</span>
            <div className="labelInpt">
              <label htmlFor="D">{t('ДиаметърСъд')}</label>
              <input
                name="D"
                className="a"
                onChange={(e) => setDiameter(e.target.value)}
                value={diameter}
                type="number"
              />
              {open.diameter && (
                <Alert severity="error" variant="filled" className="alrt">
                  25 {'<'} D {'<'} 160mm
                </Alert>
              )}
            </div>
            <span className="mm">mm</span>
          </div>
        </div>
        <div className="resultS ">
          <div className="offset">
            <span className="offsetres">{t('ОфсетСтоп')}</span>
            <span className="offres">
              <CountUp end={resultA} duration={1} /> mm
            </span>
          </div>
          <div className="offset">
            <span className="offsetres">
              <Trans components={{ br: <br /> }}>{t('Време')}</Trans>
            </span>
            <span className="offres">
              &nbsp;
              <CountUp end={time} decimals={2} duration={1} /> s
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default OneLabel
